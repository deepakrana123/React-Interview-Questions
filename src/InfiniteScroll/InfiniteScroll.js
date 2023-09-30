import React, { useState, useCallback, useRef } from "react";
import Infinite from "./Infinite";

const InfiniteScroll = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const controllerRef = useRef(null);
  const handleInput = useCallback((e) => {
    setQuery(e.target.value);
  }, []);
  const renderItem=useCallback((title,key,ref )=>(

    <div ref={ref} key={key}>{title.title}</div>
  ),[])
  const getData = useCallback((query, pageNumber) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (controllerRef.current) controllerRef.current.abort()
        controllerRef.current = new AbortController()
        const data = await fetch(
          "https://openlibrary.org/search.json?" +
            new URLSearchParams({
              q: query,
              page: pageNumber,
            }),{signal: controllerRef.current.signal});

        const d = await data.json();
        setData((prev) => [...prev, ...d.docs]);
        resolve()
      } catch(e) {
        // reject()
      }
    });
  }, []);
  return (
    <div>
      <h1>InfiniteScroll</h1>
      <input
        type="text"
        value={query}
        placeholder="enter your query"
        onChange={handleInput}
      />
      <Infinite
        renderListItem={renderItem}
        getData={getData}
        listData={data}
        query={query}
      />
    </div>
  );
};

export default InfiniteScroll;
