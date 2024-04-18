
import React, { useState } from 'react';
import { CloseButton } from '@chakra-ui/react';
import Test from './Test';
function LoginForm() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    
  };
  
  return (
    <div className="max-w-md relative flex flex-col top-[112px] p-6 rounded-md text-black bg-white">
      <div className="absolute w-[220px] h-[38px] left-[88px] top-[-119px] bg-gray-950 rounded-full">
      </div>
      <div className='mb-16'>
        <CloseButton onClick={handleClick} />
        {isOpen && <Test />}
      </div>
      <div className="text-2xl font-semibold mb-10 text-[#1e0e4b] text-left font-sans"> Sign in to <span className="text-[#2752E7]">Coinbase</span></div>
      <form className="flex flex-col gap-[48px]">
        <div className="block relative"> 
          <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-sans mb-2">Email</label>
          <input type="text" id="email" className="rounded border border-gray-200 text-sm w-full font-sans leading-[18px] text-black tracking-[0px] appearance-none block h-22 m-0 p-[16px] focus:ring-2 ring-offset-2  ring-[#2752E7] outline-0" />
        </div>
        <div className="block relative"> 
          <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
          <input type="password" id="password" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-22 m-0 p-[16px] focus:ring-2 ring-offset-2 ring-[#2752E7] outline-0" />
        </div>
        <div className='flex justify-between'>
          <a className="text-sm text-[#2752E7] font-sans" href="#">Forgot password?</a>
          <a className="text-sm text-[#2752E7] font-sans" href="#">Privacy Policy</a>
        </div>
        <button type="submit" className="flex justify-center items-center rounded-lg bg-blue-500 p-4 gap-4 w-327 h-58 bg-primary-100 rounded-8 font-sans">Submit</button>
      </form>
      <div className="text-sm text-center mt-[1.6rem] font-sans">Don’t have an account yet? <a className="text-sm text-[#2752E7] font-sans" href="#">Sign up for free!</a></div>
    </div>
  );
}

export default LoginForm;
