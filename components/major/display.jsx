import React from 'react';
import MovieCard from '../cards/movie_card';

export default function Display({
  data,
  updates,
}) {
  return (
    <div className='flex flex-col overflow-scroll scrollbar-hide flex-wrap p-6 text-2xl bg-slate-900 '>
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
