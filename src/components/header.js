import React from 'react'
import '../App.css';
import {Link} from "react-router-dom";
import {logout,register_logout} from '../redux/slices/Data'
import {useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function Header() {

  const navigate=useNavigate()

  const data=useSelector((state)=>state.data)
  let loginState=localStorage.getItem("login_status")
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(register_logout())
      if(!data.islog && loginState==='false' ){
        navigate('/')
      }
  },[data.islog, dispatch, loginState, navigate])
  

  const logOut=()=>{
    localStorage.setItem("login_status",false)
    dispatch(logout())
  }

  return (
    <div>
       <div className='text-center header row m-0 p-3'>
        <Link className='header col-11 ' to={"/Index"}><h1 className='text-white'>NEWS</h1></Link>  
        <button className='col-1 border-0 logout_btn mt-3'  onClick={()=>logOut()}>Logout</button> 
      </div>
    </div>
  )
}

export default Header