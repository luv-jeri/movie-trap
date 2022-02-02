import React from 'react';

export default function Input({
  name,
  type,
  autoComplete,
  required,
  placeholder,
  id,
  setter,
}) {
  return (
    <input
      id={id}
      name={name} 
      type={type}
      autoComplete={autoComplete}
      required={required}
      className='appearance-none w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 m-2 rounded-lg focus:z-10 sm:text-sm 2xl:text-2xl'
      placeholder={placeholder}
      onChange={(e) =>
        setter(e.target.value)
      }
    />
  );
}
