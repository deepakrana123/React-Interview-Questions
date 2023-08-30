import React,{useState,useEffect} from 'react'
import "./Pagination.css"
const Pagination = () => {
    const [data,setData]=useState();
    const fetchData= async()=>{
        const res=await fetch("https://dummyjson.com/products")
        const data= await res.json()
        if(data && data.products){

            setData(data)
        }

    }

    useEffect(()=>{
        fetchData()
    },[])
    console.log(data)
  return (
    <div className='pagination'>
        {data && data.products && data.products.map((item)=>(
            <span key={item.id} className='pagination_products'>
                <img alt={item.title} src={item.thumbnail}/>
                <span>{item.title}</span>
            </span>
        ))}
    </div>
  )
}

export default Pagination