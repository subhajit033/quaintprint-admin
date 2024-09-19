import { adminSevice } from '@/api/admin.service';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '@/utils/auth.context';
import { Loader2 } from 'lucide-react';

const Login = () => {
  const login = adminSevice.useAdminLogin();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { isAuthenticated, setIsauthenticated } = useContext(AuthContext);
  const hanldeLogin = (e) => {
    e.preventDefault();
    login.mutate(formData, {
      onSuccess: () => {
        toast('Login Succesful');
        navigate('/dashboard');
        setIsauthenticated(true);
      },
      onError: () => {
        toast.error('Incorrect email or password');
        setIsauthenticated(false);
      },
    });
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[url('https://s3-alpha-sig.figma.com/img/6a35/7b72/b9541e6885fa65958ca22a4ac0be069d?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ul8VrzjWAhCD4ilFxk6tItn3LppTC~gNcEJPrUb~EvpUL49KN4WpbTTwYdcg9BNffkUOqBlyG4iJPK2OKFVFSDyUqqxfyATJlX7r9vVAHwd6MsQkLthkI-Aoia71sIaOIXH3V8cLSEECRA11iO~986U9KGbGYmvk23CLK6VViDNnDxrgbfIn6vy9ZlC5nzL74eJ-n5iEnhkI8q~YCJ2rju2SE~12GEcfyRjEDbM1dujEHW9e6XQ0eTSWKIi-K8paseXMYAWIECMwAobUdFWCfCfCUqhjdAw1K-lKb7qH-U5mPhbDZt7f8zjm6b6KVrMGM7eoktcYp1JX~p61zkPQqA__')] object-cover">
      <div className='p-6 w-[26rem] bg-white rounded-3xl'>
        <div className='my-2'>
          <p className='text-2xl font-semibold text-center'>
            Sign In into your
          </p>
          <p className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF237D] to-[#C9110A] text-center'>
            Super Admin Account
          </p>
        </div>

        <div className='my-4 flex items-center gap-4'>
          <hr className='w-full border-gray-300' />
          <p className='text-sm text-gray-800 text-center'>or</p>
          <hr className='w-full border-gray-300' />
        </div>
        <form onSubmit={hanldeLogin}>
          <div>
            <label className='text-gray-800 text-[15px] mb-2 block'>
              Email
            </label>
            <div className='relative flex items-center'>
              <input
                name='email'
                type='text'
                required
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className='w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600'
                placeholder='Enter email'
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='#bbb'
                stroke='#bbb'
                className='w-[18px] h-[18px] absolute right-4'
                viewBox='0 0 682.667 682.667'
              >
                <defs>
                  <clipPath id='a' clipPathUnits='userSpaceOnUse'>
                    <path d='M0 512h512V0H0Z' data-original='#000000'></path>
                  </clipPath>
                </defs>
                <g
                  clipPath='url(#a)'
                  transform='matrix(1.33 0 0 -1.33 0 682.667)'
                >
                  <path
                    fill='none'
                    strokeMiterlimit='10'
                    strokeWidth='40'
                    d='M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z'
                    data-original='#000000'
                  ></path>
                  <path
                    d='M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z'
                    data-original='#000000'
                  ></path>
                </g>
              </svg>
            </div>
          </div>

          <div className='mt-4'>
            <label className='text-gray-800 text-[15px] mb-2 block'>
              Password
            </label>
            <div className='relative flex items-center'>
              <input
                name='password'
                type='password'
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                className='w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600'
                placeholder='Enter password'
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='#bbb'
                stroke='#bbb'
                className='w-[18px] h-[18px] absolute right-4 cursor-pointer'
                viewBox='0 0 128 128'
              >
                <path
                  d='M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z'
                  data-original='#000000'
                ></path>
              </svg>
            </div>
          </div>

          {/* <div className='flex flex-wrap items-center justify-between gap-4 mt-4'>
            <div className='flex items-center'>
              <input
                id='remember-me'
                name='remember-me'
                type='checkbox'
                className='h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md'
              />
              <label htmlFor='remember-me' className='ml-3 block text-sm'>
                Remember me
              </label>
            </div>
            <div>
              <a
                href='jajvascript:void(0);'
                className='text-blue-600 font-semibold text-sm hover:underline'
              >
                Forgot Password?
              </a>
            </div>
          </div> */}
          <div className='mt-8'>
            <button
              type='submit'
              className='w-full py-3 px-6  flex justify-center text-sm tracking-wide rounded-md text-white bg-[#84142E] hover:opacity-65 focus:outline-none'
            >
              {login.isPending ? <Loader2 className='animate-spin' /> : 'Login'}
            </button>
          </div>
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default Login;
