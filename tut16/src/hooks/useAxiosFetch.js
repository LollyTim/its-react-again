import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (detaUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();
    const fetchData = async (url) => {
      try {
        const responce = await axios.get(url, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setData(responce.data);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setData([]);
        }
      } finally {
        isMounted && setTimeout(() => setIsLoading(false), 2000);
      }
    };
    fetchData(detaUrl);

    const cleanUp = () => {
      console.log("clean up function");
      isMounted = false;
      source.cancel();
    };
    return cleanUp;
  }, [detaUrl]);

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
