import Tablerow from "./components/Tablerow";

const Table = ({first, second, third, fourth, fifth, buttonLevel}) => {
  return (
    <div className='rounded-md w-full'>
      
      <div>
        <div className='py-4 overflow-auto max-h-[550px] '>
          <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            <table className='min-w-full leading-normal border-2 border-gray-300'>
              <thead>
                <tr>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-[#EBD9FF] text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                    {first}
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-[#EBD9FF] text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                    {second}
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-[#EBD9FF] text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                    {third}
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-[#EBD9FF] text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                    {fourth}
                  </th>
                  
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-[#EBD9FF] text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                    {fifth}
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  Array(10).fill('-').map((_, i)=>{
                    return <Tablerow key={i} buttonLevel={buttonLevel}/>
                  })
                }
                
              </tbody>
            </table>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
