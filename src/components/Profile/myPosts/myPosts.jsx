import React from 'react';
import Post from "./post/post";
import s from './MyPosts.module.css'
import NewPost from "./NewPost/NewPost";

const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <NewPost/>
            <h3>My Posts</h3>
            <Post postContent='Post 1'/>
            <Post postContent='Post 2'/>


        </div>
    );
}

export default MyPosts;