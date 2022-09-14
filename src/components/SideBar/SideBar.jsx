import React from 'react';
import s from './SideBar.module.css'
import {Link} from "react-router-dom";

const SideBar = () => {
        return (

                <nav className={s.nav}>
                    <ul className={s.sideBarMenu}>
                        <li><Link  className = {s.sideBarElement} to="/profile">Profile</Link></li>
                        <li><Link className={s.sideBarElement} to="/dialogs">Messages</Link></li>
                        <li><Link className={s.sideBarElement} to="/news">News</Link></li>
                        <li><Link className={s.sideBarElement} to="/music">Music</Link></li>
                        <li><Link className={s.sideBarElement} to="/settings">Settings</Link></li>
                    </ul>
                </nav>

        );
}

export default SideBar;