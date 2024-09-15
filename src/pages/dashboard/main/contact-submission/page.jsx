import { TableHeaderName } from '@/utils/const';
// import Table from '@/shared/tables/Table';
import { adminSevice } from '@/api/admin.service';
import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const ContactSubmission = () => {
  const [enabled, setEnabled] = useState(false);
  const { isSuccess, isError, isFetching, data } =
    adminSevice.useGetQueries(enabled);
  useEffect(() => {
    if (isSuccess || isError) {
      setEnabled(false);
    }
  }, [isSuccess, isError]);
  useEffect(() => {
    setEnabled(true);
  }, []);
  if (isFetching) {
    return <h1>Loading...</h1>;
  }
  return (
    <Table>
      <TableHeader>
        <TableRow className='bg-[#EBD9FF]'>
          {TableHeaderName.queryDetails.map((name) => {
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
                  {details?.firstName + ' ' + details.lastName}
                </TableCell>
                <TableCell>{details.email}</TableCell>
                <TableCell>{details.contactNo}</TableCell>
                <TableCell>{details.message}</TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
};

export default ContactSubmission;
