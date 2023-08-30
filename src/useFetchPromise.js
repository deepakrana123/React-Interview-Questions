import { useEffect, useState, useCallback } from "react";
import  debounce  from "lodash/debounce";

const useFetchPromise = (query, transformData, dataPromise, debounceWait,autoComplete) => {
  console.log(debounceWait,"DebounceWait")
  const [data, setData] = useState();
  const [error, setError] = useState();
  const fetchData = useCallback(debounce(async (query, transformData,signal) => {
      try {
        const response = await dataPromise(query,signal);
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        setData(transformData(data));
      } catch (e) {
        console.log(e);
        if(!signal.aborted) setError(e);
      }
    }, debounceWait),[]);
  useEffect(() => {
    if (!query || !autoComplete) {
      setData(null);
      setError(null);
      return;
    }
    const controlId = new AbortController();
    const signal = controlId.signal;
    fetchData(query, transformData,signal);
    return () => {
      controlId.abort();
    };
  }, [query, transformData, fetchData,autoComplete]);
  return [data, setData, error];
};

export default useFetchPromise;
