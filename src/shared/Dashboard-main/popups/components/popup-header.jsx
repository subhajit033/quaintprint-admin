import { Phone } from 'lucide-react';

const PopupHeader = () => {
  return (
    <div className='w-full flex items-center justify-between border-b border-gray-400 pb-4'>
      <div className='flex items-center gap-4'>
        <img
          className='w-20 h-20 rounded-full'
          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
          alt='user-img'
        />
        <div>
          <p className='text-xl text-black font-semibold'>Subhajit Kundu</p>
          <p className='text-sm text-gray-500'>Kolkata, West Bengal</p>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <button className='p-4 rounded-full'>
          <Phone />
        </button>
        <button className='px-6 py-2 rounded-full border border-[#E51F9A] text-[#E51F9A]'>
          Deny
        </button>
        <button className='px-6 py-2 rounded-full bg-green-500 text-white'>
          Accept
        </button>
      </div>
    </div>
  );
};

export default PopupHeader;
