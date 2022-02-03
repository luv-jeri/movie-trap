import {
  useState,
  useEffect,
} from 'react';


const useDebounce = (value, time) => {
  const [D_value, D_setValue] =
    useState(value);


  useEffect(() => {
    const timer = setTimeout(() => {
       D_setValue(value);
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return D_value ;
};

export default useDebounce;
