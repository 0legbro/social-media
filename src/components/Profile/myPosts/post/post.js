import React from "react";
import s from './post.module.css'

const Post = (props) =>{
    return(
        <div className={s.post}>
            {props.postName}
            {<textarea name="" id="" cols="25" rows="2"></textarea>}
        </div>
    )
}
export default Post;
