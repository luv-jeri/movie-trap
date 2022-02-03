import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';
import useDebounce from '../../hooks/useDebounce';
import {
  useState,
  useEffect,
} from 'react';

export default function Header({
  search,
}) {
  const [name, setName] = useState('');
  const debouncedName = useDebounce(
    name,
    500
  );
 
  useEffect(() => {
    search(debouncedName);
  }, [debouncedName]);

  return (
    <div
      id='Header'
      className='h-12 flex items-center bg-slate-500 rounded-t-md justify-between'
    >
      <div className=' flex items-center'>
        <div className='w-10 h-10 md:w-14 md:h-14'>
          <Image
            alt='Mountains'
            src={logo}
            layout=''
            objectFit='fill'
          />
        </div>
        <h2 className='text-md md:text-2xl  font-extrabold text-gray-100'>
          PopCorn
        </h2>
      </div>

      <input
        className='placeholder-gray-500 px-5 font-extrabold py-0.5 flex-1 text-sm md:text-xl text-black bg-slate-400 mx-2 rounded-full focus:outline-none text-center '
        placeholder='Search.......'
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <div>
        <button className='w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-full m-2 transition ease-in-out delay-150  hover:-translate-15 hover:scale-110 hover:bg-yellow-500 duration-300 '>
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
