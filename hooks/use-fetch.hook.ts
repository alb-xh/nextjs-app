import {
  useState,
  useEffect,
} from 'react';

export function useFetch<T> (url: string, options?: RequestInit) : [boolean, T | null ] {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [ url, options ]);

  return [ isLoading, data ];
};
