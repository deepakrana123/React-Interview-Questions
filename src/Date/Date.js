import React ,{useEffect, useState} from 'react'
import "./Date.css"
const CountDown = () => {  
  const time = new Date("2023-12-31T23:59:59")
  const getTimeLeft=()=>{
    const total = time - new Date()
    const day= Math.floor(total/(1000*60*60*24));
    const hour= Math.floor(total/((1000*60*60))%24);
    const mintue= Math.floor(total/((1000*60))%60);
    const second=Math.floor(total/(1000)%60)
    return {day,hour,mintue,second}
  }
  const [timeLeft,SetTimeLeft]=useState(()=>getTimeLeft());

    useEffect(()=>{
      const timer = setInterval(()=>{
        SetTimeLeft(getTimeLeft())
      },1000)
      
      return ()=>clearInterval(timer)
    },[])
  return (
    <div className='container'>
      <h2>CountDown</h2>
             <div className='content'>
              {Object.entries(timeLeft).map((item)=>{
                    const value=item[1];
                    const label=item[0]
                    return (
                      <div className='box' key={label}>
                <div className='value'>
                 <span>{value}</span> 
                </div>
                  <span className='label'>{label}</span>
              </div>
                    )
              })}
             </div>
    </div>
  )
}

export default CountDown