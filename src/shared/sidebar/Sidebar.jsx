import { DashBoardLowerNavItem, DashBoardUpperNavItem } from '@/utils/const';
import { Link } from 'react-router-dom';
import NavItem from './components/NavItem';

const Sidebar = () => {
  return (
    <nav className='bg-white shadow-lg h-screen min-w-[250px]  font-[sans-serif] overflow-auto'>
      <div className='flex items-center justify-around bg-[#e51f9910] py-10'>
        <img
          src='logo.png'
          alt='logo'
          className='w-14 h-9'
        />
        <img
          src='collapse.png'
          alt='img'
          className='w-5 h-5'
        />
        
      </div>

      <div className='h-[80%] flex flex-col justify-between px-4'>
        <ul className='mt-3'>
          {DashBoardUpperNavItem.map((item, i) => {
            return <NavItem key={i} {...item} />;
          })}
        </ul>
        <ul className='mt-3'>
          {DashBoardLowerNavItem.map((item, i) => {
            return <NavItem key={i} {...item} />;
          })}

          <li>
            <a
              href={``}
              className='text-black hover:text-[#E51F9A] text-sm flex items-center hover:bg-[#e51f991d] rounded px-4 py-3 transition-all'
            >
              <div className='flex items-center gap-2'>
                <img
                  className='w-5 h-5'
                  src={`https://s3-alpha-sig.figma.com/img/3800/3f44/1a3cf642c500dce7a0ba82141fcaded1?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p1paQa6NrqaP9i02fB~4OyIqpy1KsgbqMwYsyfSZOyZdfIj5~kkGp~jR9x44W1yfE0RwOG63jIauy1Ay4EWh~NQyUqbPQiA0wn33MGSIgST00gTFPRsS6Q3lgr9wRTpZQe~kde8XOitqVRgXCXmJeQPwtJReC5BSiLu3HA6f0Y5RwXN7xw3Xgo6-hG48wdEfikpk3Fw9UC6ldd9iYd~ZPlD4kalYuW5upXIsbFTnYLoB40bqzhyRY1ZOO8a9zOVcd5nHHnEvCSUpHNq7QlaCR~ZAtMNHcJ6tF89EcL0INGtc7Sn9e7hl3FtrfSJDYKlkamKx6jwGttQOtcKsjvCi7w__`}
                  alt='image'
                />
                <p className='text-[#DC3545]'>Logout</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
