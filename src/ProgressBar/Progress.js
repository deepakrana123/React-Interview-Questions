import React,{useState,useEffect} from 'react'
const Progress = ({value,onCompleted}) => {
    const [progress,setProgress]=useState(value)
    useEffect(()=>{
        setProgress(Math.min(100,Math.max(value,0)))
        if(value===100){
            onCompleted();
        }
    },[value,onCompleted])
  return (
    <>
    <div className='progress'>
   <span
   style={{color:progress>49?"white":"black"}}
   >{progress.toFixed()}%</span>
   <div
   role="progressbar"
   aria-valuemin={0}
   aria-valuemax={100}
   aria-valuenow={progress} style={{
       width:`${progress}%`
    }}/></div>
     <div className='progress'>
   <span
   style={{color:parseInt(progress/4)>49?"white":"black"}}
   >{parseInt(progress/4).toFixed()}%</span>
   <div style={{
       width:`${parseInt(progress/4)}%`
    }}/></div>
    <div className='progress'>
   <span
   style={{color:parseInt(progress/2)>49?"white":"black"}}
   >{parseInt(progress/2).toFixed()}%</span>
   <div style={{
       width:`${parseInt(progress/2)}%`
    }}/></div>
    </>
  )
}

export default Progress