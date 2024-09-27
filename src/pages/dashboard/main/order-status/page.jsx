import { useEffect, useState } from 'react';
import Chart from '@/shared/Dashboard-main/order-status/Chart';

import { TableHeaderName } from '@/utils/const';
import api from '@/api';
import OrderConfirmation from '@/shared/Dashboard-main/popups/OrderConfirmation';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { adminSevice } from '@/api/admin.service';

const OrderStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [selectedPdt, setSelectedPdt] = useState(null);
  const [unSeenOrder, setUnseenOrder] = useState([]);
  const [inProgOrder, setInProgressOrder] = useState(0);
  const [completedOrder, setCompletedOrder] = useState([]);
  const { isSuccess, isError, isFetching, data, refetch } =
    adminSevice.useGetAllOrders(enabled);
  console.log(selectedPdt);
  useEffect(() => {
    if (isSuccess || isError) {
      setEnabled(false);
      if (isSuccess) {
        const productData = data?.data?.data?.data;
        setUnseenOrder(
          productData.filter((data) => data.status === 'In process')
        );
        setCompletedOrder(
          productData.filter((data) => data.status === 'Delivered')
        );
        // setInProgress(productData?.length - );
      }
    }
  }, [isSuccess, isError]);
  useEffect(() => {
    setInProgressOrder(
      data?.data?.data?.data?.length -
        unSeenOrder.length -
        completedOrder.length
    );
  }, [unSeenOrder, completedOrder]);
  useEffect(() => {
    setEnabled(true);
  }, []);

  const fileterProduct = (idx) => {
    setSelectedPdt(
      data?.data?.data?.data?.filter((pdt) => {
        return pdt._id === idx;
      })[0]
    );
  };

  return (
    <div>
      <div>
        <h1 className='text-3xl font-semibold'>You have recieved</h1>
        <h2 className='text-2xl font-semibold text-[#E51F9A]'>
          250 New Orders
        </h2>
      </div>
      <div className='my-6'>
        <Chart
          unSeenOrder={unSeenOrder.length}
          completedOrder={completedOrder.length}
          inProgOrder={inProgOrder}
        />
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow className='bg-[#EBD9FF]'>
              {TableHeaderName.orderStatus.map((name) => {
                return <TableHead key={name}>{name}</TableHead>;
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {!isFetching &&
              data?.data?.data?.data.map((details) => {
                return (
                  <TableRow key={details._id}>
                    <TableCell className='font-medium'>
                      <div className='flex items-center gap-2'>
                        <img
                          className='h-10 w-10 rounded-full'
                          src={details?.user?.avatar}
                          alt='user_image'
                        />
                        <p>{`${details?.user?.firstName} ${details?.user?.lastName}`}</p>
                      </div>
                    </TableCell>
                    <TableCell>{details?.product?.paintingType}</TableCell>
                    <TableCell>{details?.orderId}</TableCell>
                    <TableCell>
                      {new Date(details?.createdAt).toLocaleString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </TableCell>

                    <TableCell>
                      <button className='border border-green-600 text-green-600 flex items-center gap-2 font-semibold px-4 py-2 rounded-full'>
                        {' '}
                        <p className='h-2 w-2 rounded-full bg-green-600'></p>{' '}
                        Succes
                      </button>
                    </TableCell>
                    <TableCell>{details?.status}</TableCell>
                    <TableCell>
                      <button
                        onClick={() => {
                          fileterProduct(details._id);
                          setIsOpen(true);
                        }}
                        className='bg-[#84012B] text-white px-5 py-2 rounded-full font-semibold'
                      >
                        Check
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <OrderConfirmation
          isOpen={isOpen}
          onClickHandler={() => setIsOpen(false)}
          orderDetails={selectedPdt}
          refetch={refetch}
        />
      </div>
      {/* <Dialog open={isOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Details</DialogTitle>
            <DialogDescription>
              <OrderStatusPopUp />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className='sm:justify-start'>
            <DialogClose asChild>
              <Button
                onClick={() => setIsOpen(false)}
                type='button'
                className='bg-[#E51F9A]'
              >
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}

      {/* <OrderStatusPopUp
        isOpen={isOpen}
        isArtistPage={false}
        onClickHandler={() => setIsOpen(false)}
      /> */}
    </div>
  );
};

export default OrderStatus;
