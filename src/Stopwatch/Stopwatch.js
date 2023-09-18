import React ,{useEffect, useState,useRef} from 'react'
import "./Stopwatch.css"
const Stopwatch = () => { 
    const [value,setValue]=useState(60) 
    const id=useRef()
    const getTime=()=>{
        id.current=setInterval(()=>{
            if(value<0){
               setValue(60)
            }
            else setValue((value)=>value-1)
        },1000)
    }
    useEffect(()=>{
             getTime();
             return ()=>clearInterval(id.current)
    })
  return (
    <div className='container'>
      <div>
         <span className="container__title">{value}</span>
        <div className='container__btn'>
            <button className='btn start' onClick={()=>getTime()}>Start</button>
            <button className='btn stop' onClick={()=>clearInterval(id.current)}>Stop</button>
            <button className='btn reset' onClick={()=>setValue(60)} >Reset</button>
        </div>
        </div>
    </div>
  )
}

export default Stopwatch;