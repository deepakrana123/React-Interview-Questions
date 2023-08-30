import React,{useState} from 'react'
import useFetchPromise from './useFetchPromise';

const Typehead = ({id,name,label,
    placeholder,
    autoComplete,
    maxLimit,
    styles,
    debounceWait,
    listBox,
    noItemMessage,
    errorMessage,transformData,dataPromise
}) => {
    const [query,setQuery]=useState('');
    const handleChange=(event)=>{
           setQuery(event.target.value)
    }

    const [data,setData,error]=useFetchPromise(query,transformData,dataPromise,debounceWait,autoComplete)
    console.log(data)
    const keyUp=(event)=>{

    }
  return (
    <>
    <label className={styles.label} htmlFor={name}>{label}</label>
    <input
     placeholder={placeholder}
     name={name}
     className={styles.input}
     value={query}
     id={id}
     onChange={(event)=>handleChange(event)}
     autoComplete="false"
     keyUp={keyUp}
    />
    {data && data.length > 0 && listBox(data)}
    </>
  )
}

export default Typehead