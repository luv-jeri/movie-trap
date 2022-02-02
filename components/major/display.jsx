import React from 'react';
import MovieCard from '../cards/movie_card';

export default function Display({
  data,
  updates,
}) {
  return (
    <div className='flex scrollbar-hide gap-5 justify-around w-full h-full flex-wrap p-4 overflow-scroll text-2xl '>
      {data.map((item, index) => {
        return (
          <MovieCard
            key={index}
            data={item}
          />
        );
      })}
    </div>
  );
}
