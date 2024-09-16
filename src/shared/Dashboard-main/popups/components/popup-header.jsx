/* eslint-disable react/prop-types */
import { Phone } from 'lucide-react';
import api from '@/api';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import toast from 'react-hot-toast';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const PopupHeader = ({
  firstName,
  lastName,
  avatar,
  email,
  isArtistPage,
  price,
  pdtId,
}) => {
  const [isDiaOpen, setIsDiaOpen] = useState(false);
  const [message, setMessage] = useState('');
  const approvePdt = async () => {
    if (price === '') {
      toast.error('please set the price for product');
      return;
    }
    try {
      const res = await api.patch('/admin/approve-product/' + pdtId, { price });
      toast.success('Approval Successfull');
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error('Operation Failed , try again');
    }
  };
  const denyProduct = async () => {
    console.log('deny');
    try {
      const res = await api.patch('/admin/deny-product/' + pdtId, {
        email,
        message,
      });
      setIsDiaOpen(false);
      toast.success('Product Denied Successfully');
    } catch (e) {
      toast.success('Please try again');
      console.log(e);
    }
  };

  return (
    <div className='w-full flex items-center justify-between border-b border-gray-400 pb-4'>
      <div className='flex items-center gap-4'>
        <img className='w-20 h-20 rounded-full' src={avatar} alt='user-img' />
        <div>
          <p className='text-xl text-black font-semibold'>{`${firstName} ${lastName}`}</p>
          {/* <p className='text-sm text-gray-500'>Kolkata, West Bengal</p> */}
        </div>
      </div>
      <div className='flex items-center gap-4'>
        {/* <button className='p-4 rounded-full'>
          <Phone />
        </button> */}
        <button
          onClick={() => setIsDiaOpen(true)}
          className='px-6 py-2 rounded-full border border-[#E51F9A] text-[#E51F9A]'
        >
          Deny
        </button>
        <button
          onClick={approvePdt}
          className='px-6 py-2 rounded-full bg-green-500 text-white'
        >
          Accept
        </button>
      </div>
      <Dialog className='relative z-50' open={isDiaOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              Enter your reason for denying this
            </DialogDescription>
          </DialogHeader>
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
          <DialogFooter className='sm:justify-start gap-4'>
            <Button
              onClick={() => denyProduct()}
              type='button'
              className=''
              variant=''
            >
              Submit
            </Button>

            <Button
              onClick={() => setIsDiaOpen(false)}
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
  );
};

export default PopupHeader;
