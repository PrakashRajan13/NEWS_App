import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';
import {useSelector,useDispatch } from 'react-redux'
import { setdata} from '../redux/slices/Data'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import {login,register_logout} from '../redux/slices/Data'
import { Link } from 'react-router-dom';


function Login() {

    const navigate=useNavigate()

    const data=useSelector((state)=>state.data)

    const dispatch=useDispatch();

    let loginState=localStorage.getItem("login_status")

    useEffect(()=>{
      dispatch(register_logout())
        if(data.islog || loginState ==='true' ){
            navigate('/Index')
        }
    },[data.islog, dispatch, loginState, navigate])

  return (<>
       <div className='text-center header row m-0 p-3'>
        <h1 className='text-white'>NEWS</h1>
      </div>
    <div className='mt-5'>
        <Form className='login container'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={data.userdata.email} onChange={e=>dispatch(setdata({...data.userdata,email:e.target.value}))} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={data.userdata.password}onChange={e=>dispatch(setdata({...data.userdata,password:e.target.value}))} type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" onClick={()=>dispatch(login(data.userdata))} type="button">
        Login
      </Button>
      <p><Link className='text-decoration-none text-danger' to={'/Register'}>Register</Link></p>
    </Form>
    </div>
    </>
  );
}

export default Login; 