import React from 'react';
import logo from '../../public/logo.png';
import Image from 'next/image';
import Input from '../../components/basics/input';
import {
  useState,
  useEffect,
} from 'react';
import axios from 'axios';

export default function Join() {
  const [name, setName] = useState('');
  const [email, setEmail] =
    useState('');
  const [password, setPassword] =
    useState('');
  const [
    passwordConfirm,
    setPasswordConfirm,
  ] = useState('');

  const onClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'authentication/sign_up',
        {
          name,
          email,
          password,
          passwordConfirm,
        }
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='flex font-josefin  bg-slate-900 w-full h-full justify-center  items-center '>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <h2 className='mt-6 text-center text-3xl font-josefin  font-extrabold text-gray-100'>
              Start sharing your PopCorn
            </h2>
          </div>
          <form
            className='mt-8 space-y-6'
            action='#'
          >
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label
                  htmlFor='email-address'
                  className='sr-only'
                >
                  Email address
                </label>
              </div>
              <div>
                <label
                  htmlFor='name'
                  className='sr-only'
                >
                  Email address
                </label>
                <Input
                  id='name'
                  name='name'
                  type='text'
                  required={true}
                  placeholder='Name'
                  setter={setName}
                />
              </div>
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
                  required={true}
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
                  required={true}
                  placeholder='Password'
                  setter={setPassword}
                />
                <Input
                  id='confirmPassword'
                  name='confirmPassword'
                  type='password'
                  required={true}
                  placeholder='Confirm Password'
                  setter={
                    setPasswordConfirm
                  }
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                onClick={onClick}
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                <span className='absolute left-0 inset-y-0 flex items-center pl-3'></span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
