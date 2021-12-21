import './post.css'
import post1 from '../../Image/post1.jpg'


const Post=()=>{
    return(
        <div className="post">
            <img
            className="postImg"
            src={post1}
            alt="post"
        />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr/>
                <span className="postDate">
                    1 hour ago
                </span>
            </div>
            <p className="postDesc">Create a beautiful blog
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
                design something new.</p>
        </div>

    )
}

export default Post;