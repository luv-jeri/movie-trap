import React from 'react';
import { useRouter } from 'next/router';
import logo from '../../public/logo.png';
import Image from 'next/image';
import Input from '../../components/basics/input';
import PostButton from '../../components/basics/post_button';
import { useState } from 'react';
import setAxios from '../../functions/setAxios';
import axios from 'axios';
import Cookies from 'js-cookie';
var ls = require('local-storage');

export default function Login() {
  // ` Router
  const router = useRouter();
  // ` State
  const [email, setEmail] =
    useState('');
  const [password, setPassword] =
    useState('');

  // ` Effect
  const onLogin = (
    response,
    status
  ) => {
    if (status === 'success') {
      Cookies.set(
        'authorization',
        response?.token
      );
      ls.set(
        'authorization',
        response?.token
      );
      axios.defaults.headers.common[
        'authorization'
      ] = response?.token;
      router.push('/');
    }
  };

  return (
    <div className='flex font-josefin  bg-slate-900 w-full h-full justify-center  items-center '>
      <div className=' flex-row xl:flex-col justify-around items-center'>
        <Image
          alt='Mountains'
          src={logo}
          layout=''
          objectFit='fill'
        />
        <h2 className='mt-6 text-center text-3xl font-josefin  font-extrabold text-gray-100'>
          Start sharing your PopCorn
        </h2>
      </div>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='flex max-w-md w-full space-y-8 justify-center items-center'>
          <form
            className='mt-8 space-y-6'
            action='#'
            method='POST'
          >
            <input
              type='hidden'
              name='remember'
              defaultValue='true'
            />
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label
                  htmlFor='email-address'
                  className='sr-only'
                >
                  Email address
                </label>
                <Input
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm 2xl:text-2xl'
                  placeholder='Email address'
                  setter={setEmail}
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='sr-only'
                >
                  Password
                </label>
                <Input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  placeholder='Password'
                  setter={setPassword}
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='text-sm'>
                <a
                  href='#'
                  className='2xl:text-xl text-yellow-600 hover:text-yellow-500'
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <PostButton
              method='POST'
              url='authentication/sign_in'
              body={{
                email,
                password,
              }}
              effect={onLogin}
              text={'Sign In'}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
