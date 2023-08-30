import React from 'react';
import { useEffect,useRef } from 'react';

const InfiniteScroll = ({  renderListItem,
getData,
listData,
query}) => {
    const pageNumber=useRef(1)

    useEffect(()=>{
         getData(query,pageNumber.current)
    },[query])
  return (
    <div>InfiniteScroll</div>
  )
}

export default InfiniteScroll