import React from 'react'
import Facebook from '../images/facebook.png'
import Twitter from '../images/twitter.png'
import Youtube from '../images/youtube.png'
import Instagram from '../images/instagram.png'
import '../App.css';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

function Footer() {
  const data=useSelector((state)=>state.data)

  const catagery=data.data.map(item=>item.catagery)
  const details=catagery.filter((items,index)=>index===catagery.indexOf(items))
  return (
    <>
    <div className='container-fluid footer'>
        <div className='container my-5'>
            <div className='row'>
                <h1 className='col-2 mt-3 text-white'>NEWS</h1>
                <div className='col-6'>
                <nav className="navbar navbar-expand">
                        <div className=" navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                        {
                          details.map((items,index)=>{
                            return(<li key={index} className="">
                        <Link to={`/Catagery/${items}`} className='footer_navigation p-2 ms-3 text-white'>{items.toUpperCase()}</Link>
                    </li>)
                          })
                        }
                        </ul>
                        </div>
                    </nav>
                </div>
                <div className='col-4'>
                  <h3 className='mb-3 text-white'>Follow US</h3>
                  <a className='me-3' href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img className='social_media' src={Facebook} alt=""/></a>
                  <a className='me-3' href="https://twitter.com/home" target="_blank" rel="noreferrer"><img className='social_media' src={Twitter} alt=""/></a>
                  <a className='me-3' href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img className='social_media' src={Instagram} alt=""/></a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><img className='social_media' src={Youtube} alt=""/></a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer