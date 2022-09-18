import React from 'react';
import MyPosts from "./myPosts/myPosts";
import ProfileHeader from "./profileHeader/profileHeader";

const Profile = (props) => {
        return (
            <div>
                <ProfileHeader />
                <MyPosts posts={props.posts} />
                {console.log(props)}
            </div>
        );
}

export default Profile;