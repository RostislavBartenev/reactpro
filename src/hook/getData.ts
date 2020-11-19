import { useEffect, useState } from 'react';
import req from '../utils/request';

const useData = (endPoint: string, query: object, deps: any[] = []) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await req(endPoint, query);

        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, deps);

  return {
    data,
    isError,
    isLoading,
  };
};

export default useData;
