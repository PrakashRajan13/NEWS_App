import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from "react-router-dom";
import Header from '../components/header';
import Navbar from '../components/navbar';
import {useSelector,useDispatch } from 'react-redux'
import { deletenews,bookmark_filter} from '../redux/slices/Data'
import Footer from '../components/footer';


function Bookmark() {

  const value=useSelector((state)=>state.data.bookmark)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(bookmark_filter())
  },[dispatch])
    
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className='row m-0'>
        {
          value && value.map((value,index)=>{
                        return(
                                <CardGroup  key={index} className='col-4 card border-0 my-3 '>
                                    <Card className='border-0'>
                                        <Link className=' content_link' key={index} to={`/View/${value.id}`}>
                                                  <Card.Img className='content_image' variant="top" src={value.img_url} />
                                                  <Card.Body className='row'>
                                                  <Card.Title className='content_title col-10'>{value.Title}</Card.Title>
                                                  </Card.Body>
                                      </Link>  
                                      <button onClick={()=>dispatch(deletenews(index))}>Delete</button>
                                    </Card>
                                </CardGroup>
                                )}
              )}
    <Footer/>
    </div>  
      </div>
  )
}

export default Bookmark