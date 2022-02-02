import {
  useState,
  useEffect,
} from 'react';
import axios from 'axios';

const useAxios = (dataUrl) => {
  const [data, setData] = useState([]);
  const [error, setError] =
    useState(null);
  const [isLoading, setIsLoading] =
    useState(false);

  useEffect(() => {
    let isMounted = true;
    const source =
      axios.CancelToken.source();

    const fetchData = async (
      type,
      url,
      body,
      params
    ) => {
      setIsLoading(true);
      try {
        const method = method || 'get';
        const response = await axios({
          method: type,
          url: url,
          params,
          data: body,
          cancelToken: source.token,
        });
        if (isMounted) {
          setData(response.data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setData([]);
        }
      } finally {
        isMounted &&
          setIsLoading(false);
      }
    };

    fetchData(dataUrl);

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [dataUrl]);

  return {
    data,
    error,
    isLoading,
  };
};

export default useAxios;
