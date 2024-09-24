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
  const { isSuccess, isError, isFetching, data } =
    adminSevice.useGetAllOrders(enabled);
  console.log(data);
  useEffect(() => {
    if (isSuccess || isError) {
      setEnabled(false);
    }
  }, [isSuccess, isError]);
  useEffect(() => {
    setEnabled(true);
  }, []);
  return (
    <div>
      <div>
        <h1 className='text-3xl font-semibold'>You have recieved</h1>
        <h2 className='text-2xl font-semibold text-[#E51F9A]'>
          250 New Orders
        </h2>
      </div>
      <div className='my-6'>
        <Chart />
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
                    <TableCell>Canvas Print</TableCell>
                    <TableCell>12345678</TableCell>
                    <TableCell>
                      <button className='border border-green-600 text-green-600 flex items-center gap-2 font-semibold px-4 py-2 rounded-full'>
                        {' '}
                        <p className='h-2 w-2 rounded-full bg-green-600'></p>{' '}
                        Succes
                      </button>
                    </TableCell>
                    <TableCell>in Process</TableCell>
                    <TableCell>
                      <button className='bg-[#84012B] text-white px-5 py-2 rounded-full font-semibold'>
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
