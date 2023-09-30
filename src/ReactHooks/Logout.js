import React, { useContext } from 'react'
import {AppContext} from "./ReactHooks"
const Logout = () => {
    const {username}=useContext(AppContext)
  return (
    <div>{username}</div>
  )
}

export default Logout