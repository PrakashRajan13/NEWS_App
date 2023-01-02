import React, { useEffect } from 'react'
import {useParams } from 'react-router-dom';
import Header from '../components/header';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from "react-router-dom";
import Navbar from '../components/navbar';
import {useSelector } from 'react-redux'
import Footer from '../components/footer';


function Catagery() {

    const data=useSelector((state)=>state.data.data)
    const params=useParams();

    useEffect(()=>{
        window.scrollTo(0,0)
    })

  return (
    <>
        <Header/>
        <Navbar/>
        <div>
            <h2 className='text-danger ms-3'>{params.catagery.toUpperCase()}</h2>
        </div>
        <div className='row m-0'>
        {
            // eslint-disable-next-line array-callback-return
            data.map((item,index) => {
                if(item.catagery===params.catagery){
                        return(
                        <Link className='col-4 content_link p-0' key={index} to={`/View/${item.id}`}>
                            <CardGroup className='card border-0'>
                                <Card className='border-0'>
                                    <Card.Img className='content_image' variant="top" src={item.img_url} />
                                    <Card.Body >
                                    <Card.Title className='content_title'>{item.Title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Link>  
                                )
            }
    })
        }
    <Footer/>
    </div>  
    </>
  )
}

export default Catagery