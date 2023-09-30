import React, { useContext, useState } from 'react'
import {AppContext} from "./ReactHooks"
const Login = () => {
    const [length,setLength]=useState(50)
    const [show,setShowText]=useState(false)
    const {setUsername}=useContext(AppContext)
    function limitInput(event){
        const l=event.target.value.length;
        const new1=length-l
        if(new1>0){

            setLength(new1)
            setUsername(event.target.value)
        }
        else{
            setShowText(true)
        }
        console.log(length)
    }
  return (
    <div>
        <p>Login</p>
        <input placeholder="type something" onChange={(event)=>limitInput(event)}/>
        <span>{length}</span>
        {show?<span>word limit exceed</span>:<span></span>}
        </div>
  )
}

export default Login