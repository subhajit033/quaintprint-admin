import { useState } from 'react';
import Chart from '@/shared/Dashboard-main/order-status/Chart';
import Table from '@/shared/tables/Table';
import { TableHeaderName } from '@/utils/const';
import api from '@/api';
import OrderStatusPopUp from '@/shared/Dashboard-main/popups/OrderStatusPopUp';

const OrderStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        <Table
          {...TableHeaderName.orderStatus}
          height={'250'}
          onClickHandler={() => setIsOpen(true)}
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

      <OrderStatusPopUp
        isOpen={isOpen}
        isArtistPage={false}
        onClickHandler={() => setIsOpen(false)}
      />
    </div>
  );
};

export default OrderStatus;
