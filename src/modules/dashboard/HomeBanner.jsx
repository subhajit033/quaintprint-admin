import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { contentservice } from '@/api/content.service';
import toast from 'react-hot-toast';
import { Trash2 } from 'lucide-react';
const HomeBanner = () => {
  const bannerUrl = '';

  const [enabled, setEnabled] = useState(false);
  const { isError, isPending, isSuccess, data, refetch } =
    contentservice.useGetBanner(enabled);
  const uploadAsset = contentservice.useUploadAsset();
  const uploadBanner = contentservice.useUploadBanner();
  const deleteBanner = contentservice.useDeleteBanner();

  useEffect(() => {
    setEnabled(true);
  }, []);
  useEffect(() => {
    if (isSuccess) {
      setEnabled(false);
      console.log(data);
    }
  }, [isSuccess]);

  const handleBannerUpload = (e) => {
    const upload = new FormData();
    upload.append('uploadArt', e.target.files[0]);

    uploadAsset.mutate(upload, {
      onSuccess: (res) => {
        console.log('First mutation success, response:', res);
        if (res?.data?.url) {
          uploadBanner.mutate(
            { image: res.data.url },
            {
              onSuccess: () => {
                toast.success('Banner uploaded successfully');
                setEnabled(true);
                refetch();
              },
              onError: (error) => {
                toast.error('Upload failed');
                console.error('Second mutation error:', error);
              },
            }
          );
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

  const handleDeleteBanner = (idx) => {
    deleteBanner.mutate(idx, {
      onSuccess: () => {
        toast.success('Banner deleted succesfully');
        setEnabled(true);
        refetch();
      },
    });
  };

  return (
    <div>
      <div className='grid grid-cols-4 gap-4'>
        {data?.data?.data?.data?.length === 0
          ? ''
          : data?.data?.data?.data?.map((banner) => {
              return (
                <div key={banner._id}>
                  <img
                    className='w-80 h-56 object-cover border border-gray-400 rounded-md'
                    src={banner.image}
                    alt='product_image'
                  />
                  <Trash2
                    onClick={() => handleDeleteBanner(banner._id)}
                    className='text-red-600'
                  />
                </div>
              );
            })}
      </div>
      <div>
        <label
          htmlFor='product'
          className='w-64 mt-8 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue '
        >
          <svg
            className='w-8 h-8'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z' />
          </svg>
          <span className='mt-2 text-base leading-normal'>Select a file</span>
          <input
            onChange={handleBannerUpload}
            id='product'
            type='file'
            accept='image/*'
            className='hidden'
          />
        </label>
      </div>
      {/* <Button
        className='my-8'
        onClick={() => setBannerImages([...bannerImages, bannerUrl])}
      >
        Add +
      </Button> */}
    </div>
  );
};

export default HomeBanner;
