import React from 'react';
import SearchBar from './Search'; // Assuming 'Search' is the correct path to your SearchBar component
import Nigga from './nigga';
import Card from './Card';

const Tutor = () => {
  return (
    <div className='relative w-full h-screen bg-violet-400 ' >
      <h1 className='mt-2 px-4 text-2xl font-semibold font-sans text-zinc-800 '>Teachers.com</h1>
      <div className='mr-20 flex justify-end pr-20 text-md font-serif tracking-wider text-zinc-900'>
      <h1 className='mr-5'>Signup</h1>
      <h1>Login</h1>
      </div>
      <div className=" flex flex-col items-center justify-center h-screen">
        <p className="mt-2 px-4 text-center text-7xl font-sans text-zinc-600">
          Find the best teachers near you or online
        </p>
        <div className="mt-4">
          <SearchBar />
        </div>
        <div className="mt-4" >
          {/* Your buttons go here */}
          <button className="bg-blue-500 text-black  text-sm px-2 py-1 rounded-full focus:outline-none ">Maths</button>
          <button className="bg-blue-500 text-black  text-sm px-2 py-1 rounded-full focus:outline-none ml-5">Physics</button>
          <button className="bg-blue-500 text-black text-sm px-2 py-1 rounded-full focus:outline-none ml-5">Chemistry</button>
          <button className="bg-blue-500 text-black  text-sm px-2 py-1 rounded-full focus:outline-none ml-5">Writing</button>
          <button className="bg-blue-500 text-black  text-sm px-2 py-1 rounded-full focus:outline-none ml-5">English</button><button className="bg-blue-500 text-black  text-sm px-2 py-1 rounded-full focus:outline-none ml-4">Reading</button>
          {/* Add more buttons as needed */}
        </div>
      </div>
      <div className='bg-violet-400'>
        <h2 className='p-10 font-semibold text-2xl font-sans text-zinc-700'>Teachers near you</h2>
      </div >
      <Card />
    </div>
  );
};

export default Tutor;
