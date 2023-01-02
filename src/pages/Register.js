import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate } from "react-router-dom";
import '../App.css';
import Form from 'react-bootstrap/Form';
import {useSelector,useDispatch } from 'react-redux'
import {registering,register} from '../redux/slices/Data'
import { useEffect } from "react";

export default function Register(){

    const navigate=useNavigate()
    const data=useSelector((state)=>state.data)
    const dispatch=useDispatch();

    useEffect(()=>{
        if(data.register){
            navigate('/')
        }
    },[data.register, navigate])

    return(<>
    <div className='text-center header row m-0 p-3'>
        <h1 className='text-white'>NEWS</h1>
    </div>
    <div className='container register_form mt-5'>
            <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
        >
            <Form.Control onChange={(e)=>dispatch(registering({...data.registerdata,name:e.target.value}))} type="text" placeholder="Name"/>
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="floatingInput" label="Email">
            <Form.Control type="email" onChange={(e)=>dispatch(registering({...data.registerdata,email:e.target.value}))} placeholder="Email ID"/>
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="floatingPassword" label="Password">
            <Form.Control type="password" onChange={(e)=>dispatch(registering({...data.registerdata,password:e.target.value}))} placeholder="Password"/>
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="floatingInput" label="Adhaar Number">
            <Form.Control type="number" onChange={(e)=>dispatch(registering({...data.registerdata,aadhar:e.target.value}))} placeholder="Adhaar Number"/>
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="floatingInput" label="Address">
            <Form.Control type="text" onChange={(e)=>dispatch(registering({...data.registerdata,address:e.target.value}))} placeholder="Address"/>
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="floatingInput" label="Phone Number">
            <Form.Control type="number" onChange={(e)=>dispatch(registering({...data.registerdata,phone:e.target.value}))} placeholder="Phone Number"/>
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="floatingInput" label="City">
            <Form.Control type="text" onChange={(e)=>dispatch(registering({...data.registerdata,city:e.target.value}))} placeholder="City"/>
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="floatingInput" label="Area">
            <Form.Control type="text" onChange={(e)=>dispatch(registering({...data.registerdata,area:e.target.value}))} placeholder="Area"/>
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="floatingInput" label="PinCode">
            <Form.Control type="text" onChange={(e)=>dispatch(registering({...data.registerdata,pin:e.target.value}))} placeholder="PinCode"/>
        </FloatingLabel>
            <div className='submit'>
                <button className='btn register_btn bg-primary text-light m-3' onClick={()=>dispatch(register(data.registerdata))}>Register</button>
            </div>
        </div>
    </>)
}