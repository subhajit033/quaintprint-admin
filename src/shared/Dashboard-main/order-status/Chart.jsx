import { ArrowUp } from 'lucide-react';

const Chart = () => {
  return (
    <div className='w-full flex items-start border rounded-lg border-gray-300'>
      <div className='h-[150px] flex-1 p-6 flex flex-col justify-between'>
        <h2 className='font-semibold text-gray-500'>Unseen Orders</h2>
        <div>
          <div className='flex items-center gap-8'>
            <p className='font-semibold'>100</p>
            <p className='flex items-center gap-3'>
              <p className='w-5 h-5 bg-green-400 rounded-full'>
                <ArrowUp className='text-green-200 w-5' />
              </p>{' '}
              <span className='text-green-400 text-xs'>15%</span>
            </p>
          </div>
          <p className='text-sm text-gray-400'>compared to last month</p>
        </div>
      </div>
      <div className='h-[150px] flex-1 border-l border-gray-300 p-6 flex flex-col justify-between'>
        <h2 className='font-semibold text-gray-500'>In Progress</h2>
        <div>
          <div className='flex items-center gap-8'>
            <p className='font-semibold'>100</p>
            <p className='flex items-center gap-3'>
              <p className='w-5 h-5 bg-green-400 rounded-full'>
                <ArrowUp className='text-green-200 w-5' />
              </p>{' '}
              <span className='text-green-400 text-xs'>15%</span>
            </p>
          </div>
          <p className='text-sm text-gray-400'>compared to last month</p>
        </div>
      </div>
      <div className='h-[150px] flex-1 border-l border-gray-300 p-6 flex flex-col justify-between'>
        <h2 className='font-semibold text-gray-500'>Completd</h2>
        <div>
          <div className='flex items-center gap-8'>
            <p className='font-semibold'>100</p>
            <p className='flex items-center gap-3'>
              <p className='w-5 h-5 bg-green-400 rounded-full'>
                <ArrowUp className='text-green-200 w-5' />
              </p>{' '}
              <span className='text-green-400 text-xs'>15%</span>
            </p>
          </div>
          <p className='text-sm text-gray-400'>compared to last month</p>
        </div>
      </div>
    </div>
  );
};

export default Chart;
