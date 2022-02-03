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
        className='placeholder-gray-500 px-5 font-extrabold py-0.5 flex-1 text-sm md:text-xl text-black   mx-2 rounded-full focus:outline-none text-center '
        placeholder='Search.......'
        onChange={(e) =>
          setName(e.target.value)
        }
      />

    <select className='px-5 font-extrabold py-1 text-sm md:text-xl text-black   mx-2 rounded-full focus:outline-none text-center  '>
        <option disabled='' selected=''>
            All
        </option>
        <option>Horror</option>
        <option>Drama</option>
      </select>
    </div>
  );
}
