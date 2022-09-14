import React from "react";
import s from './post.module.css'
import IMG from './100975271-social-media-avatar-user-icon.webp'

const Post = (props) =>{
    return(
        <div className={s.post}>
            <span>
                <img src={IMG} alt="profilePhoto"/>
                {props.postContent}
                <button>Delete</button>
            </span>

        </div>
    )
}
export default Post;
