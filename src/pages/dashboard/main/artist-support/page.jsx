import Table from '@/shared/tables/Table';
import { TableHeaderName } from '@/utils/const';
import OrderStatusPopUp from '@/shared/Dashboard-main/popups/OrderStatusPopUp';
import { useState } from 'react';
import { adminSevice } from '@/api/admin.service';
import { useEffect } from 'react';
import { formatTableRowData } from '@/utils/helper';
const ArtistSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formattedData, setFormattedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchPdt = async () => {
    try {
      const res = await adminSevice.useGetUnapprovedPdt();
      console.log(res.data.data.data);
      const data = formatTableRowData(res.data.data.data, [
        'artist.firstName',
        'artist.lastName',
        'artist.avatar',
        'title',
        'paintingType',
        'status',
      ]);
      setFormattedData(data)
      setLoading(false);
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPdt();
  }, []);

  return (
    <div>
      <div className='pb-5 border-b border-gray-300'>
        <h1 className='text-2xl font-semibold'>
          Welcome to the{' '}
          <span className='text-[#F71873]'>Artist support panel</span>
        </h1>
      </div>
      {loading ? (
        <h1 className='text-xl font-semibold'>Loading data....</h1>
      ) : (
        <Table
          {...TableHeaderName.artistSupport}
          formattedData={formattedData}
          onClickHandler={() => setIsOpen(true)}
          
          height={'550'}
        />
      )}
      <OrderStatusPopUp
        isOpen={isOpen}
        onClickHandler={() => setIsOpen(false)}
      />
    </div>
  );
};

export default ArtistSupport;
