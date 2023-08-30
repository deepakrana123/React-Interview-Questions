import React ,{useState,useEffect } from 'react'
import Progress from './Progress';
import "./ProgressBar.css"

const ProgressBar = () => {
    const [value,setValue]=useState(0);
    const [success,setSuccess]=useState(false)

    useEffect(()=>{
          setInterval(()=>{
              setValue((val)=>val+1)
          },100)
    },[])
    const onCompleted=()=>{
        setSuccess(true)
    }
  return (
    <div className='progressBar'>
        <span>ProgressBar</span>
        <Progress value={value} onCompleted={onCompleted} />
        <span>{success?"Completed":"Loading..."}</span>
    </div>
  )
}

export default ProgressBar