import React, { useCallback, useEffect, useRef, useState } from "react";

const Infinite = (props) => {
  const { getData, query, listData, renderListItem } = props;
  const pageNumber = useRef(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef(null);
  const fetchData=useCallback(()=>{
    setLoading(true);
    getData(query, pageNumber.current)
    .finally(() => {
      setLoading(false);
    });
  },[query,getData])
  const lastElementObserver=useCallback(node=>{
    if(loading) return;
    if(observer.current) observer.current.disconnect();
    observer.current=new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting){
        pageNumber.current+=1
        fetchData()
      }
    })
    if (node) observer.current.observe(node)
  },[loading,fetchData])
  const renderList = useCallback(() => {
    return listData.map((item, index) => {
      console.log(index,item.length-1,"last")
      if(index===listData.length-1) return renderListItem(item,index,lastElementObserver)
      return renderListItem(item, index, null);
    });
  },[lastElementObserver,listData,renderListItem]);
  useEffect(() => {
   fetchData()
  }, [fetchData]);
  // console.log(listData,"listData")
  return (
    <>
      {renderList()}
      {loading && 'Loading'}
    </>
  );
};

export default Infinite;
