import { DashBoardLowerNavItem, DashBoardUpperNavItem } from '@/utils/const';
import { Link } from 'react-router-dom';
import NavItem from './components/NavItem';

const Sidebar = () => {
  const handleLogout = () => {
    document.cookie = `admin_access_token=abcd`;
    window.location.href = '/';
  };
  return (
    <nav className='bg-white shadow-lg h-screen min-w-[250px]  font-[sans-serif] overflow-auto'>
      <div className='flex items-center justify-around bg-[#e51f9910] py-10'>
        <img src='logo.png' alt='logo' className='w-14 h-9' />
        <img src='collapse.png' alt='img' className='w-5 h-5' />
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

          <li onClick={handleLogout}>
            <p className='text-black hover:text-[#E51F9A] text-sm flex items-center hover:bg-[#e51f991d] rounded px-4 py-3 transition-all cursor-pointer'>
              <div className='flex items-center gap-2'>
                <img className='w-5 h-5' src='logout.png' alt='image' />
                <p className='text-[#DC3545]'>Logout</p>
              </div>
            </p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
