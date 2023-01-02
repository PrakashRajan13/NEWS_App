/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React, { useEffect } from 'react'
import {useSelector,useDispatch } from 'react-redux'
import {useParams } from 'react-router-dom';
import Header from '../components/header';
import Navbar from '../components/navbar'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import '../App.css';
import {bookmark} from '../redux/slices/Data'

function View() {


    const params=useParams();
    const data=useSelector((state)=>state.data)
    const dispatch=useDispatch();

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    
  return (
    <>
         <Header/>
         <Navbar/>  
        {
             data.data.map((value,index)=>{
                if(value.id == params.id){
                    return(
                        <div key={index} className='container mt-3'>
                        <div className='row'>
                            <h2 className='text-center col-11'>{value.Title}</h2>
                            <FontAwesomeIcon onClick={()=>dispatch(bookmark(value))}  className='col-2 icon fa-2x mt-3' icon={faBookmark}/>
                        </div>
                            <div className='text-center'>
                            <img  src={value.img_url} alt=""/>
                            </div>
                            <p className='mt-4 text-bold fs-3 text-center'>{value.content}</p>
                            <div className='text-end'>
                                <p>{value.date}</p>
                                <p>{value.author}</p>
                            </div>
                        </div>
                    )
                }
            })
        }
    </>
  )
}

export default View