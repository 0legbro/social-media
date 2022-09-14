import React from 'react';
import MyPosts from "./myPosts/myPosts";
import ProfileHeader from "./profileHeader/profileHeader";

const Profile = () => {
        return (
            <div>
                <ProfileHeader />
                <MyPosts />
            </div>
        );
}

export default Profile;