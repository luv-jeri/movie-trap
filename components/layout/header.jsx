import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';

export default function Header() {
  return (
    <div
      id='Header'
      className='h-12 flex items-center bg-slate-500 rounded-t-md justify-between'
    >
      <div className=' flex items-center'>
        <div className='w-14 h-14'>
          <Image
            alt='Mountains'
            src={logo}
            layout=''
            objectFit='fill'
          />
        </div>
        <h2 className='text-2xl  font-extrabold text-gray-100'>
          PopCorn
        </h2>
      </div>

      <input
        className='placeholder-gray-500 text-xl flex-1 text-black bg-slate-400 mx-12 px-6 py-0.5 rounded-2xl focus:outline-none '
        placeholder='Search.......'
      />

      <div>
        <button className='w-10 h-10 bg-red-600 rounded-full m-2 transition ease-in-out delay-150  hover:-translate-15 hover:scale-110 hover:bg-yellow-500 duration-300 '>
          <Image
            alt='Mountains'
            src={logo}
            layout=''
            objectFit='fill'
          />
        </button>
      </div>
    </div>
  );
}
