import '../styles/index.css';
import axios from 'axios';
import { useRouter } from 'next/router';
import Header from '../components/layout/header';
import {
  useState,
  useLayoutEffect,
} from 'react';
import Cookies from 'js-cookie';
import ls from 'local-storage';
axios.defaults.baseURL =
  process.env.SERVER_URL;
axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;

function MyApp({
  Component,
  pageProps,
}) {
  const router = useRouter();
  let authorization =
    Cookies.get('authorization') ||
    ls.get('authorization');

  // ` Authorization Check
  useLayoutEffect(() => {
    const {pathname} =  router
      if (authorization && pathname.startsWith("/auth")){
        router.push('/');
      }
      if (
        !authorization &&
        router.pathname === '/'
      ) {
        router.push('/auth/login');
      }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className=' bg-slate-50 h-screen w-screen  p-1 scrollbar-hide  '>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
