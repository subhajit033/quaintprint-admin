import { Phone } from 'lucide-react';
import api from '@/api';

import toast from 'react-hot-toast';

const PopupHeader = ({
  firstName,
  lastName,
  avatar,
  isArtistPage,
  price,
  pdtId,
}) => {
  const approvePdt = async () => {
    try {
      const res = await api.patch('/admin/approve-product/' + pdtId, { price });
      toast.success('Approval Successfull');
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error('Operation Failed , try again');
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
        <button className='p-4 rounded-full'>
          <Phone />
        </button>
        <button className='px-6 py-2 rounded-full border border-[#E51F9A] text-[#E51F9A]'>
          Deny
        </button>
        <button onClick={approvePdt} className='px-6 py-2 rounded-full bg-green-500 text-white'>
          Accept
        </button>
      </div>
    </div>
  );
};

export default PopupHeader;
