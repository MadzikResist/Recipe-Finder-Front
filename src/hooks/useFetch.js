import { useEffect, useState } from 'react';

export const useFetch = () => {
  const [data, setData] = useState();
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    return () => {
      setData(null);
      setFetching(false);
      setError(null);
    };
  }, []);
  const fetchData = async ({ url, onSuccess, onError, body }) => {
    try {
      const secureStorage = localStorage.getItem('secure_token');
      const { tokens: { access } = {} } = JSON.parse(secureStorage || '{}');
      setFetching(true);
      const response = await fetch(`http://localhost:4000/v1/${url}`, {
        method: 'POST',
        headers: access
          ? {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: `Bearer ${access}`,
            }
          : { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });
      const resData = await response.json();

      if (resData?.code) {
        console.log('ResDataWithCode', resData);
        setError(resData?.message);
        setFetching(false);
        if (onError) {
          onError(resData?.message);
        }
        console.log('Error', resData?.message);
        return;
      }
      setData(resData);
      if (onSuccess) {
        onSuccess(resData);
      }
      setFetching(false);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Error', e);
      setData(null);
      setFetching(false);
    }
  };
  return { data, fetchData, error, fetching };
};
