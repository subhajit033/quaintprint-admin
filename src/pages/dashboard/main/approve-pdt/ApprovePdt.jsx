import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { adminSevice } from '@/api/admin.service';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const ApprovePdt = () => {
  const [enabled, setEnabled] = useState(false);
  const { isSuccess, isError, isFetching, data, refetch } =
    adminSevice.useGetApprovedPdt(enabled);
  const deletePdt = adminSevice.useDeletePdt();
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
  const handleDeleteArt = async (id) => {
    deletePdt.mutate(id, {
      onSuccess: () => {
        document.getElementById('close_btn').click();
        refetch();
      },
    });
  };
  return (
    <Table>
      <TableHeader>
        <TableRow className='bg-[#EBD9FF]'>
          <TableHead>Product Image</TableHead>
          <TableHead>Product Title</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {!isFetching &&
          data?.data?.data?.data.map((details) => {
            return (
              <TableRow key={details._id}>
                <TableCell className='font-medium'>
                  <img
                    className='w-16 h-16 rounded-lg'
                    src={details?.picture}
                    alt=''
                  />
                </TableCell>
                <TableCell>{details?.title}</TableCell>
                <TableCell>
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button variant='destructive'>Delete</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete this art from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel id='close_btn'>
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDeleteArt(details._id)}
                          className='bg-red-500'
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
                {/*  */}
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
};

export default ApprovePdt;
