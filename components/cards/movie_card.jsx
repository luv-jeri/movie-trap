/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

export default function MovieCard({
  data,
  key,
}) {
  const { title,poster, genre , director , upVote , downVote , rating ,description} = data;
  return (
    <div className='py-3  w-1/2 sm:max-w-xl sm:mx-auto'>
      <div className='bg-slate-700 shadow-lg border-slate-400 h-80 w-full	border sm:rounded-3xl p-8 flex space-x-2 '>
        <div className='h-48 w-98 overflow-visible '>
          <img
            className='rounded-3xl shadow-lg'
            src={poster}
            alt=''
          />
        </div>
        <div className='flex flex-col w-1/2 space-y-4 justify-around'>
          <div className='flex justify-between items-start'>
            <h2 className='text-3xl font-bold text-slate-900'>
              {title}
            </h2>
            <div className='  bg-yellow-400 font-bold rounded-xl p-2'>
              {rating}
            </div>
          </div>
          <div>
            <div className='text-sm text-gray-400'>
              {genre}
            </div>
            <div className='text-lg text-gray-800'>
              2019
            </div>
          </div>
          <div className=' text-gray-400 max-h-40 scrollbar-hide'>
            {director}
          </div>
          <div className='flex gap-2'>
            <div className='flex text-2xl font-bold text-a text-slate-900'>
              💖
            </div>
            <div className='flex text-2xl font-bold text-a text-slate-900'>
              💔
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
