import './header.css'

import headerBg from '../Image/headerBg.jpg'

const Header=()=>{
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React &  Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img
                className="headerImg"
                src={headerBg}
                alt="headerImg" />
        </div>
    )
}

export default Header;