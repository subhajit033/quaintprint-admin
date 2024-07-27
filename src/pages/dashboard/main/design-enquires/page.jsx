import { useState } from 'react';
import { TableHeaderName } from '@/utils/const';
import Table from '@/shared/tables/Table';
import {
  Dialog,
  
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';

import Popup from '@/shared/Dashboard-main/popups/Popup';

const DesignEnquires = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Table {...TableHeaderName.designInquires} height={'650'} onClickHandler={() => setIsOpen(true)} />
      <Dialog className='w-[40rem]' open={isOpen} onOpenChange={setIsOpen}>     
        
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Details</DialogTitle>
            <DialogDescription>
              <Popup />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
          
        </DialogFooter>
        </DialogContent>
      </Dialog>
      
    </>
  );
};

export default DesignEnquires;
