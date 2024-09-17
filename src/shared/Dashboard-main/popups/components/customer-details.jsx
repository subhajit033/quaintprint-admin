const CustomerDetails = ({ address, contactNo, altContactNo, email }) => {
  return (
    <div className='space-y-4 my-4 border-b border-gray-400 pb-4'>
      {/* <p className='text-gray-500 max-w-[32rem]'><span className='text-black font-semibold'>Delivery Address: </span>{address}</p> */}
      <div className='flex items-center gap-10'>
        {contactNo && <p>Mobile No: {contactNo}</p>}
        {altContactNo && <p>Altername Contact No - {altContactNo}</p>}
      </div>
      <p>Email: {email}</p>
    </div>
  );
};

export default CustomerDetails;
