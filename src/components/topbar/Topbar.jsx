import './topbar.css'
import {Link} from "react-router-dom";

import profilePic from '../../Image/profilePic.jpg'

const Topbar=()=>{
    const user=false;
    return(
        <div className="top">
            <div className="topLeft">
                <i  className="topIcon fab fa-facebook-square"></i>
                <i  className="topIcon fab fa-twitter-square"></i>
                <i  className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link className="link" to="/" >HOME</Link></li>
                <li className="topListItem"><Link className="link" to="/about" >ABOUT</Link></li>
                <li className="topListItem"><Link className="link" to="/contact" >CONTACT</Link></li>
                <li className="topListItem"><Link className="link" to="/write" >WRITE</Link></li>
                <li className="topListItem">{ user && "LOGOUT"}</li>
            </ul>
            </div>
            <div className="topRight">
                {user?(
                    <img className="topImg" src={profilePic} alt="profilePic"/>
                ):(
                    <ul className="topList">

                        <li className="topListItem"><Link className="link" to="/login" >LOGIN</Link></li>
                        <li className="topListItem"><Link className="link" to="/register" >REGISTER</Link></li>
                    </ul>
                )}

                <i  className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default Topbar;