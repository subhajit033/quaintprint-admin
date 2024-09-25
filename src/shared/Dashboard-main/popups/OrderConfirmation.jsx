/* eslint-disable react/prop-types */
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { adminSevice } from '@/api/admin.service';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

const OrderConfirmation = ({
  isOpen,
  onClickHandler,
  orderDetails,
  refetch,
}) => {
  const [isDiaOpen, setIsDiaOpen] = useState(false);
  const [status, setStatus] = useState('');
  const approvePdt = adminSevice.useApproveOrder();
  useEffect(() => {
    setStatus(orderDetails?.status);
  }, [orderDetails?.status]);
  if (!orderDetails) {
    return <h1 className='hidden'>Not order details found</h1>;
  }
  const { user, product, address } = orderDetails;
  // console.log(status);
  const handleDownload = () => {
    let imageUrl = product?.image;

    // Modify the URL by inserting 'fl_attachment/' after 'upload/'
    const modifiedUrl = imageUrl.replace('/upload/', '/upload/fl_attachment/');
    const link = document.createElement('a');
    (link.href = modifiedUrl), (link.download = 'filename.png'); // You can specify a name for the downloaded file
    link.click();
  };

  const handleApprovePdt = () => {
    if (status === 'In process' || status === '') {
      toast.error('Please set Order status');
      return;
    }
    approvePdt.mutate(
      { orderId: orderDetails?._id, body: { status } },
      {
        onSuccess: () => {
          toast.success('Order approved Successfully');
          setIsDiaOpen(false);
          onClickHandler();
          refetch();
        },
        onError: () => {
          toast.error('Something went wrong , please try again');
        },
      }
    );
  };

  return (
    <div
      className={`w-[40rem] h-[40rem] overflow-auto ${
        isOpen ? 'block' : 'hidden'
      } border border-gray-500 rounded-xl p-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white shadow-2xl`}
    >
      <div
        onClick={onClickHandler}
        className='absolute top-2 right-4 cursor-pointer  border border-black rounded-md'
      >
        <X />
      </div>
      {/**Header */}
      <div className='w-full flex items-center justify-between border-b border-gray-400 pb-4'>
        <div className='flex items-center gap-4'>
          <img
            className='w-20 h-20 rounded-full'
            src={user?.avatar ? user?.avatar : 'user_avatar.png'}
            alt='user-img'
          />
          <div>
            <p className='text-xl text-black font-semibold'>{`${user?.firstName} ${user?.lastName}`}</p>
            {/* <p className='text-sm text-gray-500'>Kolkata, West Bengal</p> */}
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <button
            // onClick={() => setIsContactOpen(true)}
            className='p-4 rounded-full'
          >
            <Phone />
          </button>
          <button
            // onClick={() => setIsDiaOpen(true)}
            className='px-6 py-2 rounded-full border border-[#E51F9A] text-[#E51F9A]'
          >
            Deny
          </button>
          <button
            onClick={() => setIsDiaOpen(true)}
            className='px-6 py-2 rounded-full bg-green-500 text-white'
          >
            Accept
          </button>
        </div>
        <Dialog className='relative z-50' open={isDiaOpen}>
          <DialogContent>
            <DialogHeader>
              {isDiaOpen && (
                <DialogTitle> Are you absolutely sure?</DialogTitle>
              )}

              {isDiaOpen && (
                <DialogDescription>
                  Enter your reason for denying this
                </DialogDescription>
              )}
              {/* {isContactOpen && (
                <DialogDescription>
                  Artist has not updated the contact details
                </DialogDescription>
              )} */}
            </DialogHeader>
            <div>
              <RadioGroup
                onValueChange={(value) => setStatus(value)}
                className='flex items-center'
                defaultValue={status}
              >
                {['In Printing', 'Out for Delivery', 'Delivered'].map(
                  (value, i) => {
                    return (
                      <div key={value} className='flex items-center space-x-2'>
                        <RadioGroupItem value={value} id={'r' + i} />
                        <Label htmlFor={'r' + i}>{value}</Label>
                      </div>
                    );
                  }
                )}
              </RadioGroup>
            </div>
            <DialogFooter className='sm:justify-start gap-4'>
              <Button
                onClick={handleApprovePdt}
                type='button'
                className='bg-green-500 hover:bg-green-400'
                variant=''
              >
                Accept
              </Button>

              <Button
                onClick={() => {
                  setIsDiaOpen(false);
                }}
                type='button'
                className=''
                variant='destructive'
              >
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        ;
      </div>
      {/**Header */}
      <div className='my-4 flex items-center gap-6'>
        <img
          className='w-80 h-80 rounded-2xl object-cover'
          src={product?.image}
          alt='image'
        />
        <div className='flex-1 space-y-4'>
          <p className='text-blue-600 underline cursor-pointer'>
            {product?.title}
          </p>

          <Button
            onClick={handleDownload}
            className='bg-blue-500 hover:bg-blue-300 px-4 py-2 text-white block w-32 rounded-md'
          >
            Download
          </Button>
        </div>
      </div>
      {/**Customer Details */}
      <div className='space-y-4 my-4 border-b border-gray-400 pb-4'>
        <div>
          <p className='max-w-[32rem] text-xl font-semibold'>
            Delivery Address:
          </p>
          <p>{address?.addressLine1}</p>
          <p>{address?.addressLine2}</p>
          <p>{`${address?.city} , ${address?.state} , ${address?.zipCode}`}</p>
        </div>

        <div className='flex items-center gap-10'>
          {user?.contactNo && <p>Mobile No: {user?.contactNo}</p>}
          {user?.altContactNo && (
            <p>Altername Contact No - {user?.altContactNo}</p>
          )}
        </div>
        <p>Email: {user?.email}</p>
      </div>
      {/**Customer Details */}
      <div className='space-y-3 pb-4'>
        <div className='flex items-center gap-10'>
          <p>
            Print Type:{' '}
            {product?.paintingType ? product?.paintingType : 'Canvas Printing'}
          </p>
          <p>Required Print Size: {product?.size}</p>
        </div>
      </div>
      {/* <div className="flex justify-end">
          <button className="px-4 py-2 rounded-full bg-gray-200 border border-gray-400 flex items-center gap-2"><Share2/> Details</button>
        </div> */}
    </div>
  );
};

export default OrderConfirmation;
