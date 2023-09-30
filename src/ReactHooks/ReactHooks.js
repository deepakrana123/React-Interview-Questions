import React ,{createContext, useContext, useEffect, useReducer, useState} from 'react'
import Login from './Login'
import Logout from './Logout'
export const AppContext=createContext(null)

const ReactHooks = () => {  
//     const [hello,setHello]=useState("helo")
//     const [hello1,setHello1]=useState("helo1")
//   useEffect(()=>{
//       console.log(hello)
//       console.log(hello1)
//   },[hello])
//   const reducerFunction=(state,action)=>{
//         switch(action.type){
//             case "Increae":
//                 return {counter:state.counter+1,showText:state.showText}
//                 case "ShowText":
//                     return {counter:state.counter,showText:!state.showText}
//                     default:
//                         return state
//                     }
                    
//                 }
//   const [state,dispatch]=useReducer(reducerFunction,{counter:0,showText:false})
//   const OnClicks=()=>{
//     dispatch({type:"Increae"})
//     setHello("hiii")
//     setHello1("hii1")
//   }
const [username,setUsername]=useState("")
  return (
        // <div>
        //     {/* <p>{state.counter}</p>
        //    { state.showText?<p>hi</p>:<p>bi</p>}
        //     <button onClick={()=>OnClicks()}/> */}
        // </div>
        <AppContext.Provider value={{username,setUsername}}>
            <Login/>
            <Logout/>
        </AppContext.Provider>
  )
}

export default ReactHooks