import React from 'react';
import Post from "./post/post";
import s from './MyPosts.module.css'

const MyPosts = () => {
        return (
            <div className={s.myPosts}>
                <Post postName = 'Post 1'/>
                <Post postName = 'Post 2'/>


            </div>
        );
}

export default MyPosts;