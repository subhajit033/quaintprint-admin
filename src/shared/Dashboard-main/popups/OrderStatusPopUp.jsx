/* eslint-disable react/prop-types */
import PopupHeader from './components/popup-header';
import CustomerDetails from './components/customer-details';
import { Share2 } from 'lucide-react';
import { X } from 'lucide-react';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const OrderStatusPopUp = ({
  isOpen,
  onClickHandler,
  isArtistPage,
  address,
  userDetails,
  pdtDetails,
  pdtId,
}) => {
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [productData, setProductData] = useState([]);
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
      <PopupHeader
        {...userDetails}
        isArtistPage={isArtistPage}
        price={price}
        pdtId={pdtId}
      />
      <div className='my-4 flex items-center gap-6'>
        <img
          className='w-80 h-80 rounded-2xl object-cover'
          src={pdtDetails?.picture}
          alt='image'
        />
        <div className='flex-1'>
          {/* <p className='text-blue-600 underline cursor-pointer'>
            loremipsum.pdf
          </p> */}
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
      <CustomerDetails address={address} {...userDetails} />
      <div className='space-y-3 pb-4'>
        <div className='flex items-center gap-10'>
          <p>Print Type: {pdtDetails?.paintingType}</p>
          <p>Required Print Size: {pdtDetails?.paintingSize}</p>
        </div>
        <div className='flex items-start justify-between gap-6'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setProductData([...productData, { price, size }]);
              setPrice('');
              setSize('');
            }}
          >
            <div className='grid w-full max-w-sm items-center gap-1.5'>
              <Label htmlFor='email'>Set Size</Label>
              <Input
                onChange={(e) => setSize(e.target.value)}
                value={size}
                type='text'
                id='email'
                required
                placeholder='size'
              />
            </div>
            <div className='grid w-full max-w-sm items-center gap-1.5'>
              <Label htmlFor='email'>Set Price</Label>
              <Input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type='text'
                id='email'
                required
                placeholder='Price'
              />
            </div>
            <Button type='submit'>Save</Button>
          </form>
          <div>
            {productData.length > 0 &&
              productData.map((data, i) => {
                return (
                  <p key={i} className='font-semibold text-xl'>
                    {data.size} : ₹{data.price}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
      {/* <div className="flex justify-end">
          <button className="px-4 py-2 rounded-full bg-gray-200 border border-gray-400 flex items-center gap-2"><Share2/> Details</button>
        </div> */}
    </div>
  );
};

export default OrderStatusPopUp;
