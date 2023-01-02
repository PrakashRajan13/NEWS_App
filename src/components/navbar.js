import React from 'react'
import {Link} from "react-router-dom";
import '../App.css';
import {useSelector,useDispatch} from 'react-redux'
import {search} from '../redux/slices/Data'


function Navbar() {

    const data=useSelector((state)=>state.data)

    const catagery=data.data.map(item=>item.catagery)
    const details=catagery.filter((items,index)=>index===catagery.indexOf(items))
    const dispatch=useDispatch()
  return (
    <div className='my-4'>
       <ul className="nav ms-2 px-3">
            <li className="nav-item">
                        <Link to={`/Index`} className='navigation'>HOME</Link>
            </li>
            {
                details.map((items,index)=>{
                    return(<li key={index} className="">
                        <Link to={`/Catagery/${items}`} className='navigation'>{items.toUpperCase()}</Link>
                    </li>)
                })
                    
            }
            <li className="nav-item">
                        <Link to={`/Bookmark`} className='navigation'>BOOKMARK</Link>
            </li>
            <li className="nav-item search_bar">
                  <input  value={data.search} onChange={e=>dispatch(search(e.target.value))} type="text"/><Link className='ms-1 text-decoration-none text-white search_btn p-2 rounded-pill' to={`/Catagery/${data.search}`} onClick={()=>dispatch(search(""))}>search</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar