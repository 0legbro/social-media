import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./myPosts/myPosts";
import ProfileHeader from "./profileHeader/profileHeader";

const Profile = () => {
        return (
            <div className={s.content}>
                <ProfileHeader />
                <MyPosts />
            </div>
        );
}

export default Profile;