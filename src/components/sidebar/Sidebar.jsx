import './Sidebar.css'
import sidebarImg from '../../Image/sidebarImg.jpg'


const Sidebar=()=>{
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src={sidebarImg}
                    alt="sidebar"/>
                <p>Create a beautiful blog that fits your style.
                    Choose from a selection of easy-to-use templates
                    – all with flexible layouts and hundreds
                    of background images – or design something new.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                    <li className="sidebarListItem">Sport</li>
                </ul>
                <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW US</span>
                </div>
                <div className="sidebarSocial">
                    <i  className="sidebarIcon fab fa-facebook-square"></i>
                    <i  className="sidebarIcon fab fa-twitter-square"></i>
                    <i  className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;