import { useState, useEffect } from "react";

function useFetch(fetchFn) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!fetchFn) return;

    setIsLoading(true);

    fetchFn()
      .then((data) => {
        setData(data);
        setIsLoading(false);
        console.log(123123)
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [fetchFn]);

  return { data, isLoading, error };
}

export default useFetch;