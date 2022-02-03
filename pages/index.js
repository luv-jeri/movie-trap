import Display from './../components/major/display';
import useAxios from './../hooks/useAxios';
import Header from '../components/layout/header';
import { useState } from 'react';
export default function Home() {
  const [name, setName] = useState('');
  const [genre , setGenre ] = useState('');
  const { data, error, isLoading } =
    useAxios(
      `movie?title[regex]=${name}&${
        genre
          ? 'genre[eq]=' + genre
          : 'genre[ne]=null'
      }&sort=-rating&limit=3&page=1`
    );

  return (
    <div className=' w-full h-full scrollbar-hide flex-col scrollbar-hide font-josefin text-white  bg-slate-900  justify-center  items-center '>
      <Header search={setName} />
      {data && <Display data={data} />}
    </div>
  );
}
