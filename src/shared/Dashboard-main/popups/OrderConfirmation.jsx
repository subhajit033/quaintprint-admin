/* eslint-disable react/prop-types */
import PopupHeader from './components/popup-header';
import CustomerDetails from './components/customer-details';

import { Phone, X } from 'lucide-react';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const OrderConfirmation = ({ isOpen, onClickHandler }) => {
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
            // src={avatar !== 'N/A' ? avatar : '/user_avatar.png'}
            alt='user-img'
          />
          <div>
            {/* <p className='text-xl text-black font-semibold'>{`${firstName} ${lastName}`}</p> */}
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
            // onClick={approvePdt}
            className='px-6 py-2 rounded-full bg-green-500 text-white'
          >
            Accept
          </button>
        </div>
        {/* <Dialog className='relative z-50' open={isDiaOpen || isContactOpen}>
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
              {isContactOpen && (
                <DialogDescription>
                  Artist has not updated the contact details
                </DialogDescription>
              )}
            </DialogHeader>
            {isDiaOpen && (
              <div className='flex items-center space-x-2'>
                <div className='grid flex-1 gap-2'>
                  <Label htmlFor='link' className='sr-only'>
                    Link
                  </Label>
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type='text'
                    placeholder='Enter you reason for denying'
                  />
                </div>
              </div>
            )}
            <DialogFooter className='sm:justify-start gap-4'>
              {isDiaOpen && (
                <Button
                  onClick={() => denyProduct()}
                  type='button'
                  className=''
                  variant=''
                >
                  Submit
                </Button>
              )}

              <Button
                onClick={() => {
                  setIsDiaOpen(false);
                  setIsContactOpen(false);
                }}
                type='button'
                className=''
                variant='destructive'
              >
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog> */}
        ;
      </div>
      {/**Header */}
      <div className='my-4 flex items-center gap-6'>
        <img
          className='w-80 h-80 rounded-2xl object-cover'
          //   src={pdtDetails?.picture}
          alt='image'
        />
        <div className='flex-1'>
          <p className='text-blue-600 underline cursor-pointer'>
            {/* {pdtDetails?.title} */}
          </p>
          <div className=''>
            <p className='text-sm text-gray-400 my-2'>Addon notes</p>
            <p className='w-80 h-32 border border-gray-400 rounded-xl p-4 text-sm text-gray-400 tracking-tighter'>
              “Lorem ipsum dolor sit amet consectetur. Dui id leo viverra
              vivamus ipsum amet. Nisl luctus imperdiet cursus vulputate duis
              vulputate a tortor. Massa augue faucibus ac quisque in aliquet.
              Elementum mauris quis quam feugiat.”
            </p>
          </div>
        </div>
      </div>
      {/**Customer Details */}
      <div className='space-y-4 my-4 border-b border-gray-400 pb-4'>
        {/* <p className='text-gray-500 max-w-[32rem]'><span className='text-black font-semibold'>Delivery Address: </span>{address}</p> */}
        <div className='flex items-center gap-10'>
          {/* {contactNo && <p>Mobile No: {contactNo}</p>}
        {altContactNo && <p>Altername Contact No - {altContactNo}</p>} */}
        </div>
        {/* <p>Email: {email}</p> */}
      </div>
      {/**Customer Details */}
      <div className='space-y-3 pb-4'>
        <div className='flex items-center gap-10'>
          {/* <p>Print Type: {pdtDetails?.paintingType}</p> */}
          {/* <p>Required Print Size: {pdtDetails?.paintingSize}</p> */}
        </div>
      </div>
      {/* <div className="flex justify-end">
          <button className="px-4 py-2 rounded-full bg-gray-200 border border-gray-400 flex items-center gap-2"><Share2/> Details</button>
        </div> */}
    </div>
  );
};

export default OrderConfirmation;
