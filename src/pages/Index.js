import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../App.css';
import {Link} from "react-router-dom";
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import {useSelector } from 'react-redux'




function Index() {

  const data=useSelector((state)=>state.data)
  return (
    <>
    <Header/>
    <Navbar/>
    <div className='row m-0'>
        {
          data.data.map((item,index) => {
    return(
<Link className='col-4 content_link p-0' key={index} to={`/view/${item.id}`}>
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
    })
        }
    <Footer/>
    </div>  
    </>
  )
}

export default Index