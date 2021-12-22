import './singlePost.css'

import PostImg from '../../Image/post1.jpg'

const SinglePost=()=>{
    return(
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    src={PostImg}
                    alt="singlepost"
                    className="singlePostImg"/>
                <h1 className="singlePostTitle">
                    Lorem Ipsum dolor sit amet
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Abilash</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Create a beautiful blog
                    that fits your style. Choose from a selection
                    of easy-to-use templates – all with flexible
                    layouts and hundreds of background images – or
                    design something new.
                    Create a beautiful blog
                    that fits your style. Choose from a selection
                    of easy-to-use templates – all with flexible
                    layouts and hundreds of background images – or
                    design something new.
                    Create a beautiful blog
                    that fits your style. Choose from a selection
                    of easy-to-use templates – all with flexible
                    layouts and hundreds of background images – or
                    design something new.
                </p>
            </div>
        </div>
    )
}

export default SinglePost;