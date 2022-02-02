import React from 'react';
import { useState } from 'react';
import Notification from '../misc/notification.jsx';
import axios from 'axios';

export default function PostButton({
  text,
  method,
  url,
  body,
  effect,
}) {
  const [status, setStatus] =
    useState(null);
  const [loading, setLoading] =
    useState(false);

  const onSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    let data, error, loading;
    try {
      const response = await axios({
        method,
        url,
        data: body,
      });
      typeof effect === 'function' &&
        effect(response, 'success');
      loading = false;
      data = response.data;
      setStatus('success');
    } catch (e) {
      console.log(e);
      error = e.message;
      typeof effect === 'function' &&
        effect(e, 'fail');
    } finally {
      loading = false;
    }
    console.log(data);
    setLoading(loading);
  };

  return (
    <div>
      <button
        onClick={onSave}
        className='group p-10 relative w-full flex justify-center py-2 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      >
        <div className='flex justify-center items-center h-11'>
          {loading ? (
            <div
              className='spinner-border animate-spin inline-block w-9 h-8 border-4 rounded-full'
              role='status'
            ></div>
          ) : (
            <div role='status'>
              {text}
            </div>
          )}
        </div>
      </button>
      <Notification type={status} />
    </div>
  );
}
