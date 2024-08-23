import UploadProducts from '@/shared/UploadProducts/UploadProducts';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

const BestDeals = () => {
  const pdtDetails = {
    title: '',
    price: '',
    image: '',
  };
  const [bestDeals, setBestDeals] = useState([pdtDetails]);

  const deletePdt = (idx) => {
    setBestDeals(
      bestDeals.filter((pdt, i) => {
        return i !== idx;
      })
    );
  };
  console.log(bestDeals);

  const handleInput = (e, idx) => {
    const { name, value } = e.target;
    bestDeals[idx] = { ...bestDeals[idx], [name]: value };
  };
  return (
    <div className='w-full space-y-4'>
      {bestDeals.map((pdt, i) => {
        return (
          <div key={i}>
            <div className='flex items-center justify-center w-full gap-10'>
              <div>
                <div className='grid w-[20rem] max-w-sm items-center gap-1.5'>
                  <Label htmlFor='title'>Title of Product</Label>
                  <Input
                    onChange={(e) => handleInput(e, i)}
                    type='text'
                    name='title'
                    id='title'
                    placeholder='Title..'
                  />
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                  <Label htmlFor='price'>Price</Label>
                  <Input
                    onChange={(e) => handleInput(e, i)}
                    type='text'
                    name='price'
                    id='price'
                    placeholder='Set price'
                  />
                </div>
              </div>
              <label
                htmlFor='product'
                className='w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue '
              >
                <svg
                  className='w-8 h-8'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z' />
                </svg>
                <span className='mt-2 text-base leading-normal'>
                  Select a file
                </span>
                <input id='product' type='file' className='hidden' />
              </label>
              <Trash2 onClick={() => deletePdt(i)} className='text-red-600' />
            </div>
            <div className='w-full h-[1px] my-4 bg-gray-400' />
          </div>
        );
      })}
      <Button onClick={() => setBestDeals([...bestDeals, pdtDetails])}>
        Add +
      </Button>
    </div>
  );
};

export default BestDeals;
