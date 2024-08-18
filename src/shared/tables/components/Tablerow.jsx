/* eslint-disable react/prop-types */
const Tablerow = ({ buttonLevel, onClickHandler, tableData }) => {
  const { first: firstName, second: lastName, third: avatar, fourth: title, fifth: paintingType, sixth: status } = tableData;
  return (
    <tr>
      <td className='px-5 py-3 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0 w-10 h-10'>
            <img
              className='w-full h-full rounded-full'
              src={avatar}
              alt=''
            />
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap font-semibold'>
              {firstName+" "+lastName}
            </p>
            {/* <p className='text-sm text-gray-400'>Nashik, Maharastra</p> */}
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{title}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{paintingType}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{status}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
          onClick={onClickHandler}
          className='bg-[#84012B] text-white px-5 py-2 rounded-full font-semibold'
        >
          {buttonLevel}
        </button>
      </td>
    </tr>
  );
};

export default Tablerow;
