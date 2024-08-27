import Table from '@/shared/tables/Table';
import { TableHeaderName } from '@/utils/const';
import OrderStatusPopUp from '@/shared/Dashboard-main/popups/OrderStatusPopUp';
import { useState } from 'react';
import { adminSevice } from '@/api/admin.service';
import { useEffect } from 'react';
import { formatPdtDetails, formatTableRowData } from '@/utils/helper';
import { formatAddress, formatUserDeatils } from '@/utils/helper';
import api from '@/api';
const ArtistSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formattedData, setFormattedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pdtId, setPdtId] = useState('');
  const [address, setAddress] = useState(null);
  const [pdtDetails, setPdtDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

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
        '_id',
      ]);
      setFormattedData(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getSinglePdtDetails = async () => {
    try {
      const res = await api.get('/admin/product/' + pdtId);
      console.log(res);
      if (res.statusText === 'OK') {
        const pdt = res?.data?.data?.data;
        setAddress(formatAddress(pdt?.artist?.address || null));
        setPdtDetails(
          formatPdtDetails(['paintingType', 'paintingSize', 'picture'], pdt)
        );
        setUserDetails(formatUserDeatils(pdt?.artist));

        setTimeout(() => {
          setIsOpen(true);
        }, 700);
      } else {
        throw new Error('Failed to load data');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPdt();
  }, []);

  useEffect(() => {
    if (pdtId !== '') {
      getSinglePdtDetails();
    }
    console.log(pdtId);
  }, [pdtId]);

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
          onClickHandler={(id) => {
            //setIsOpen(true);
            setPdtId(id);
          }}
          height={'550'}
        />
      )}
      <OrderStatusPopUp
        isOpen={isOpen}
        address={address}
        pdtDetails={pdtDetails}
        userDetails={userDetails}
        pdtId={pdtId}
        isArtistPage={true}
        onClickHandler={() => {
          // setArtistId(id);
          setIsOpen(false);
        }}
      />
    </div>
  );
};

export default ArtistSupport;
