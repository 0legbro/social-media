import React from 'react';
import IMG from './100975271-social-media-avatar-user-icon.webp'
import s from "./UserAvatarDescr.module.css"

const UserAvatarDescr =(props)=> {
        return (
            <div>
                    <img className={s.image} src={IMG} alt="ProfileImage"/> {props.description}</div>

);
}

export default UserAvatarDescr;