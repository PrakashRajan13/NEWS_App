import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Index from "./pages/Index";
import View from "./pages/View";
import Catagery from "./pages/Catagery";
import Bookmark from "./pages/Bookmark";
import Login from "./pages/Login";
import Register from "./pages/Register";

  export default function Main_route(){

    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Index" element={<Index/>}/>
                <Route path="/View/:id" element={<View/>}/>
                <Route path="/Catagery/:catagery" element={<Catagery/>}/>
                <Route path="/Bookmark" element={<Bookmark/>}/>
            </Routes>
        </Router>
    )
  }