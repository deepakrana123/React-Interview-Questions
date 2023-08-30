import React,{useState} from 'react';
import PasswordGenrator from './passwordGenrator';
import PasswordStrength from "./passwordStrength"
import "./Password.css"
const Password = () => {
  const [copied , setCopied]=useState(false)
  const [length , setLength]=useState(4)
  const CopyText=(password)=>{
    navigator.clipboard.writeText(password);
    alert("Copied the text: " + password);
    setCopied(true)
    setTimeout(()=>{
      setCopied(false)
    },2000)
  }
  
  const [checkBoxData,setCheckBoxData]=useState([
    {title:"LowerCase", status:false},
    {title:"UpperCase",status:false},
    {title:"Include Numbers",status:false},
    {title:"Include Symbols",status:false}
  ])
  const setStatus=(i)=>{
    const updatedcheckBoxData=[...checkBoxData]
    updatedcheckBoxData[i].status=!updatedcheckBoxData[i].status
    setCheckBoxData(updatedcheckBoxData)
  }
  const {password , error , generatePassword}=PasswordGenrator();
  console.log(password,"password")
  return (

    <div className='AppPassword'>
           {password && (
       <div className='header'>
        <div className='title'>{password}</div>
        <button className='copyBtn' onClick={()=>CopyText(password)}>{copied?"Copied":"Copy"}</button>
        </div>
        )}
       <div className='charLength'>
        <div className='char'>
        <span>Character Length</span>
        <label>{length}</label>
        </div>
        <input type="range" min="4" max="20" value={length} onChange={(e)=>setLength(e.target.value)}></input>
       </div>
       
       <div className="checkboxData">
          {checkBoxData.map((checkbox,index)=>(
           <div key={index}>
             <input type="checkbox" checked={checkbox.status} onChange={()=>setStatus(index)}></input>
            <span>{checkbox.title}</span>
            </div>
          ))}
       </div>
       <PasswordStrength password={password}/>
        {error && <span>{error}</span>}
       <div className="makePassword">
        <button className="genratePassword" onClick={()=>generatePassword(length, checkBoxData)}>GenratePassword</button>
       </div>
    </div>
  )
}

export default Password