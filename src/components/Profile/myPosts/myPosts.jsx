import React from 'react';
import Post from "./post/post";
import s from './MyPosts.module.css'
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {
    let postElement = props.posts.map(post => <Post post = {post.post}/>)
    return (
        <div className={s.myPosts}>
            <NewPost addPost={props.addPost}/>
            <h3>My Posts</h3>
            {postElement}



        </div>
    );
}

export default MyPosts;