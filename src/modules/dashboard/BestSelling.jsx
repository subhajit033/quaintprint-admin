import UploadProducts from '@/shared/UploadProducts/UploadProducts';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { contentservice } from '@/api/content.service';
import toast from 'react-hot-toast';

const ProductCard = ({ image, title, price }) => {
  return (
    <div className='w-[20rem] rounded-xl overflow-hidden mx-4'>
      <img
        className='object-cover rounded-xl w-full h-[21rem]'
        src={image}
        alt='pdt-img'
      />
      <p className='text-center text-xl font-semibold'>{title}</p>
      <p className='text-center font-bold text-blue-600'>{`${price}/-`}</p>
    </div>
  );
};

const BestSelling = () => {
  const [bestDeals, setBestDeals] = useState();
  const [enabled, setEnabled] = useState(false);
  const { isError, isPending, isSuccess, data, refetch } =
    contentservice.useGetBestSeller(enabled);
  const uploadAsset = contentservice.useUploadAsset();
  const uploadBestDeals = contentservice.useUploadtSeller();

  const deletePdt = (idx) => {
    setBestDeals(
      bestDeals.filter((pdt, i) => {
        return i !== idx;
      })
    );
  };

  const handleBannerUpload = (e) => {
    const upload = new FormData();
    upload.append('uploadArt', e.target.files[0]);

    uploadAsset.mutate(upload, {
      onSuccess: (res) => {
        if (res?.data?.url) {
          toast.success('Image uploaded succesfully');
          setBestDeals({ ...bestDeals, image: res.data.url });
        } else {
          console.error('URL not found in response:', res);
        }
      },
      onError: (error) => {
        toast.error('Upload failed');
        console.error('First mutation error:', error);
      },
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setBestDeals({ ...bestDeals, [name]: value });
  };

  const handleUploadDelas = (e) => {
    e.preventDefault();
    uploadBestDeals.mutate(bestDeals, {
      onSuccess: () => {
        toast.success('Product uploaded successfully');
        setEnabled(true);
        refetch();
      },
      onError: (e) => {
        console.log(e);
        toast.error('Failed');
      },
    });
  };

  useEffect(() => {
    if (isSuccess || isError) {
      setEnabled(false);
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    setEnabled(true);
  }, []);
  return (
    <div className='w-full space-y-4'>
      {isSuccess && data?.data?.data?.data?.length === 0
        ? ''
        : data?.data?.data?.data?.map((product) => {
            return <ProductCard key={product._id} {...product} />;
          })}
      <div>
        <form onSubmit={handleUploadDelas}>
          <div className='flex items-center justify-center w-full gap-10'>
            <div>
              <div className='grid w-[20rem] max-w-sm items-center gap-1.5'>
                <Label htmlFor='title'>Title of Product</Label>
                <Input
                  onChange={(e) => handleInput(e)}
                  type='text'
                  name='title'
                  id='title'
                  required
                  placeholder='Title..'
                />
              </div>
              <div className='grid w-full max-w-sm items-center gap-1.5'>
                <Label htmlFor='price'>Price</Label>
                <Input
                  type='text'
                  onChange={(e) => handleInput(e)}
                  name='price'
                  id='price'
                  required
                  placeholder='Set price'
                />
              </div>
            </div>
            <Label
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
              <Input
                onChange={handleBannerUpload}
                id='product'
                required
                type='file'
                className='hidden'
              />
            </Label>
            <Trash2 className='text-red-600' />
          </div>
          <Button type='submit'>Save</Button>
        </form>
        <div className='w-full h-[1px] my-4 bg-gray-400' />
      </div>
    </div>
  );
};

export default BestSelling;
