import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, Trash2 } from 'lucide-react';
import { contentservice } from '@/api/content.service';
import toast from 'react-hot-toast';
import { paintaingType } from '@/utils/const';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const BestDeals = () => {
  const [bestDeals, setBestDeals] = useState();
  const [enabled, setEnabled] = useState(false);
  const [priceANdSize, setPriceAndSize] = useState([]);
  const [price, setPrice] = useState('');
  const [marketPrice, setMarketPrice] = useState('');
  const [size, setSize] = useState('');
  const [itemDetails, setItemDetails] = useState('');
  const [aboutItem, setAboutItem] = useState([]);

  const { isError, isPending, isSuccess, data, refetch } =
    contentservice.useGetBestDeals(enabled);
  const uploadAsset = contentservice.useUploadAsset();
  const uploadBestDeals = contentservice.useUploadBestDeals();
  const deleteBestSeller = contentservice.useDeleteBestDeals();

  const deletePdt = (idx) => {
    deleteBestSeller.mutate(idx, {
      onSuccess: () => {
        toast.success('Product deleted succesfully');
        setEnabled(true);
        refetch();
      },
    });
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
    uploadBestDeals.mutate(
      { ...bestDeals, price: priceANdSize, aboutItem },
      {
        onSuccess: () => {
          toast.success('Product uploaded successfully');
          setPriceAndSize([]);
          setAboutItem([]);
          setEnabled(true);
          refetch();
        },
        onError: (e) => {
          console.log(e);
          toast.error('Failed');
        },
      }
    );
  };

  const handlePriceUpdate = () => {
    setPriceAndSize([...priceANdSize, { price, size, marketPrice }]);
    setPrice('');
    setSize('');
    setMarketPrice('');
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
      <div className='grid grid-cols-6 gap-4 border w-[1200px] overflow-auto'>
        {isSuccess && data?.data?.data?.data?.length === 0
          ? ''
          : data?.data?.data?.data?.map((product) => {
              return (
                <div
                  key={product._id}
                  className='min-w-[10rem] rounded-xl overflow-hidden mx-4'
                >
                  <img
                    className='object-cover rounded-xl w-full h-[10rem]'
                    src={product?.image}
                    alt='pdt-img'
                  />
                  <div className='flex items-center justify-center gap-4'>
                    <div>
                      <p className='text-center font-semibold'>
                        {product?.title}
                      </p>
                      {/* <p className='text-center font-bold text-blue-600'>{`${product?.price}/-`}</p> */}
                    </div>
                    <Eye className='cursor-pointer' />
                    <Trash2
                      onClick={() => deletePdt(product._id)}
                      className='text-red-600 cursor-pointer'
                    />
                  </div>
                </div>
              );
            })}
      </div>
      <div className='flex justify-evenly'>
        <form onSubmit={handleUploadDelas}>
          <div className='flex  items-center justify-start w-full  gap-10'>
            <div className='space-y-2'>
              <p>Select Painting from below</p>
              <select
                onChange={(e) =>
                  setBestDeals({ ...bestDeals, title: e.target.value })
                }
                className='border border-black py-2 px-4 rounded-lg'
              >
                {paintaingType.map((type, i) => {
                  return (
                    <option key={i} value={type}>
                      {type}
                    </option>
                  );
                })}
              </select>
              {/**Price and sizes */}
              <div className='grid w-full max-w-sm items-center gap-1.5'>
                <div className='flex items-center gap-2'>
                  <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label htmlFor=''>Size</Label>
                    <Input
                      type='text'
                      onChange={(e) => setSize(e.target.value)}
                      name='size'
                      value={size}
                      id=''
                      placeholder='Set size'
                    />
                  </div>
                  <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label htmlFor=''>Your Price</Label>
                    <Input
                      type='text'
                      onChange={(e) => setPrice(e.target.value)}
                      name='size'
                      id=''
                      placeholder='Price'
                      value={price}
                    />
                  </div>
                  <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label htmlFor=''>Market Price</Label>
                    <Input
                      type='text'
                      onChange={(e) => setMarketPrice(e.target.value)}
                      name='size'
                      value={marketPrice}
                      id=''
                      placeholder='Market price'
                    />
                  </div>

                  <Button type='button' onClick={handlePriceUpdate}>
                    Add+
                  </Button>
                </div>
              </div>
              {/**Abot Item */}
              <div className='grid w-full max-w-sm items-center gap-1.5'>
                <Label htmlFor='price'>About Item</Label>
                <div className='flex gap-2'>
                  <Input
                    type='text'
                    onChange={(e) => {
                      setItemDetails(e.target.value);
                    }}
                    name='size'
                    value={itemDetails}
                    placeholder='About Item'
                  />
                  <Button
                    type='button'
                    onClick={() => {
                      setAboutItem([...aboutItem, itemDetails]);
                      setItemDetails('');
                    }}
                  >
                    Add+
                  </Button>
                </div>
              </div>
              <div className='flex  gap-2'>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                  <Label htmlFor=''>Item Weight</Label>
                  <Input
                    type='text'
                    onChange={(e) => handleInput(e)}
                    name='itemWeight'
                    id=''
                    required
                    placeholder='Item Weight'
                  />
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                  <Label htmlFor=''>Material</Label>
                  <Input
                    type='text'
                    onChange={(e) => handleInput(e)}
                    name='material'
                    id=''
                    required
                    placeholder='Material'
                  />
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                  <Label htmlFor=''>Texture</Label>
                  <Input
                    type='text'
                    onChange={(e) => handleInput(e)}
                    name='texture'
                    id=''
                    required
                    placeholder='Texture'
                  />
                </div>
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
          </div>
          <Button className='mt-2' type='submit'>
            Save
          </Button>
        </form>
        {/**Preview details */}
        <div>
          <h1 className='text-xl'>Preview Details</h1>
          {priceANdSize.length > 0 && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Size</TableHead>
                  <TableHead>Our Price</TableHead>
                  <TableHead>Market Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {priceANdSize.map((data, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>{data?.size}</TableCell>
                      <TableCell>{data?.price}</TableCell>
                      <TableCell>
                        <div className='flex items-center gap-8'>
                          <p>{data?.marketPrice}</p>
                          <p
                            onClick={() =>
                              setPriceAndSize(
                                priceANdSize.filter((item, idx) => idx !== i)
                              )
                            }
                            className='text-red-500 font-semibold cursor-pointer'
                          >
                            X
                          </p>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
          {aboutItem.length > 0 && (
            <div>
              <p className='font-semibold'>About Item</p>
              {aboutItem.map((item, i) => {
                return (
                  <li className='list-disc flex items-center gap-4' key={i}>
                    <p>{item}</p>
                    <p
                      onClick={() =>
                        setAboutItem(aboutItem.filter((item, idx) => idx !== i))
                      }
                      className='text-red-500 font-semibold cursor-pointer'
                    >
                      X
                    </p>
                  </li>
                );
              })}
            </div>
          )}
        </div>
        {/* <div className='w-full h-[1px] my-4 bg-gray-400' /> */}
      </div>
    </div>
  );
};

// const BestDeals = () => {
//   const [bestDeals, setBestDeals] = useState();
//   const [enabled, setEnabled] = useState(false);
//   const { isError, isPending, isSuccess, data, refetch } =
//     contentservice.useGetBestDeals(enabled);
//   const uploadAsset = contentservice.useUploadAsset();
//   const uploadBestDeals = contentservice.useUploadBestDeals();
//   const deleteDeals = contentservice.useDeleteBestDeals();

//   const deletePdt = (idx) => {
//     deleteDeals.mutate(idx, {
//       onSuccess: () => {
//         toast.success('Product deleted succesfully');
//         setEnabled(true);
//         refetch();
//       },
//     });
//   };

//   const handleBannerUpload = (e) => {
//     const upload = new FormData();
//     upload.append('uploadArt', e.target.files[0]);

//     uploadAsset.mutate(upload, {
//       onSuccess: (res) => {
//         if (res?.data?.url) {
//           toast.success('Image uploaded succesfully');
//           setBestDeals({ ...bestDeals, image: res.data.url });
//         } else {
//           console.error('URL not found in response:', res);
//         }
//       },
//       onError: (error) => {
//         toast.error('Upload failed');
//         console.error('First mutation error:', error);
//       },
//     });
//   };

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setBestDeals({ ...bestDeals, [name]: value });
//   };

//   const handleUploadDelas = (e) => {
//     e.preventDefault();
//     uploadBestDeals.mutate(bestDeals, {
//       onSuccess: () => {
//         toast.success('Product uploaded successfully');
//         setEnabled(true);
//         refetch();
//       },
//       onError: (e) => {
//         console.log(e);
//         toast.error('Failed');
//       },
//     });
//   };

//   useEffect(() => {
//     if (isSuccess || isError) {
//       setEnabled(false);
//     }
//   }, [isSuccess, isError]);

//   useEffect(() => {
//     setEnabled(true);
//   }, []);
//   return (
//     <div className='w-full space-y-4'>
//       <div className='grid grid-cols-4 gap-4'>
//         {isSuccess && data?.data?.data?.data?.length === 0
//           ? ''
//           : data?.data?.data?.data?.map((product) => {
//               return (
//                 <div
//                   key={product._id}
//                   className='w-[10rem] rounded-xl overflow-hidden mx-4'
//                 >
//                   <img
//                     className='object-cover rounded-xl w-full h-[10rem]'
//                     src={product?.image}
//                     alt='pdt-img'
//                   />
//                   <div className='flex items-center justify-center gap-4'>
//                     <div>
//                       <p className='text-center text-xl font-semibold'>
//                         {product?.title}
//                       </p>
//                       <p className='text-center font-bold text-blue-600'>{`${product?.price}/-`}</p>
//                     </div>
//                     <Trash2
//                       onClick={() => deletePdt(product._id)}
//                       className='text-red-600'
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//       </div>
//       <div>
//         <form onSubmit={handleUploadDelas}>
//           <div className='flex items-center justify-center w-full gap-10'>
//             <div>
//               <div className='grid w-[20rem] max-w-sm items-center gap-1.5'>
//                 <Label htmlFor='title'>Title of Product</Label>
//                 <Input
//                   onChange={(e) => handleInput(e)}
//                   type='text'
//                   name='title'
//                   id='title'
//                   required
//                   placeholder='Title..'
//                 />
//               </div>
//               <div className='grid w-full max-w-sm items-center gap-1.5'>
//                 <Label htmlFor='price'>Price</Label>
//                 <Input
//                   type='text'
//                   onChange={(e) => handleInput(e)}
//                   name='price'
//                   id='price'
//                   required
//                   placeholder='Set price'
//                 />
//               </div>
//             </div>
//             <Label
//               htmlFor='product'
//               className='w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue '
//             >
//               <svg
//                 className='w-8 h-8'
//                 fill='currentColor'
//                 xmlns='http://www.w3.org/2000/svg'
//                 viewBox='0 0 20 20'
//               >
//                 <path d='M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z' />
//               </svg>
//               <span className='mt-2 text-base leading-normal'>
//                 Select a file
//               </span>
//               <Input
//                 onChange={handleBannerUpload}
//                 id='product'
//                 required
//                 type='file'
//                 className='hidden'
//               />
//             </Label>
//           </div>
//           <Button type='submit'>Save</Button>
//         </form>
//         <div className='w-full h-[1px] my-4 bg-gray-400' />
//       </div>
//     </div>
//   );
// };

export default BestDeals;
