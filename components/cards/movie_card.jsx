/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  HomeIcon,
  ThumbUpIcon,
  ThumbDownIcon,
  HeartIcon,
  XIcon
} from '@heroicons/react/solid';

export default function MovieCard({
  data,
  key,
}) {
  const {
    title,
    poster,
    genre,
    director,
    upVote,
    downVote,
    rating,
    description,
  } = data;
  return (
    <div className=' relative  flex overflow-hidden items-center text-base h-64 bg-zinc-900 m-5'>
      <span className='absolute top-2 right-0 p-3 w-24 rounded-l-full bg-red-500  text-white font-extrabold font-head text-2xl'>
        {rating}
      </span>
      <div className='h-full w-60'>
        <img
          src={poster}
          className='h-80 w-60 object-cover'
          alt='movie poster'
        />
      </div>
      <div className='p-4 flex-col justify-center h-full '>
        <div className='flex-col font-bitter '>
          <div className='text-md md:text-2xl font-extrabold  tracking-wider'>
            {title}
          </div>
          <div className=''>
            <span className='font-bitter font-bold text-sm md:text-xl'>
              Director
            </span>{' '}
            :{' '}
            <span className='font-bitter font-bold text-sm md:text-xl'>
              {director}
            </span>
          </div>
          <div className=''>
            <span className='font-bitter font-bold text-sm md:text-xl'>
              Genre
            </span>
            {'   '}: {'   '}
            <span className='font-bitter font-bold text-sm md:text-xl'>
              {genre}
            </span>
          </div>
          <div className='text-clip overflow-hidden text-xs md:text-xl'>
            {description}
          </div>
        </div>
        <div className='flex space-x-12'>
          <div className='flex space-x-4 mt-12 justify-start items-center'>
            <ThumbUpIcon
              className={`h-8 text-green-200 transition ease-in-out delay-150  hover:-translate-15 hover:scale-110 hover:text-green-500 duration-200 `}
            />
            <span className=' font-extrabold text-2xl'>
              {upVote}
            </span>
          </div>
          <div className='flex space-x-4 mt-12 justify-start items-center'>
            <ThumbDownIcon
              className={`h-8 text-red-200 transition ease-in-out delay-150  hover:-translate-15 hover:scale-110 hover:text-red-500 duration-200`}
            />
            <span className=' font-extrabold text-2xl'>
              {downVote}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
