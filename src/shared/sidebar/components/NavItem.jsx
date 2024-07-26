/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const NavItem = ({title, url, image}) => {
  return (
    <li>
      <Link
        to={`${url}`}
        className='text-black hover:text-[#E51F9A] text-sm flex items-center hover:bg-[#e51f991d] rounded px-4 py-3 transition-all'
      >
        <div className='flex items-center gap-2'>
          <img
            className='w-5 h-5'
            src={image}
            alt='image'
          />
          <p>{title}</p>
        </div>
      </Link>
    </li>
  );
};

export default NavItem;
