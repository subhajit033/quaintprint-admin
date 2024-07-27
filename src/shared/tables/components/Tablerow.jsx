

const Tablerow = ({buttonLevel}) => {
  return (
    <tr>
      <td className='px-5 py-3 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0 w-10 h-10'>
            <img
              className='w-full h-full rounded-full'
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
              alt=''
            />
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap font-semibold'>
              Vera Carpenter
            </p>
            <p className='text-sm text-gray-400'>Nashik, Maharastra</p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>Admin</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>Jan 21, 2020</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>43</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button className="bg-[#84012B] text-white px-5 py-2 rounded-full font-semibold">{buttonLevel}</button>
      </td>
    </tr>
  );
};

export default Tablerow;
