import React from 'react';
import s from './SideBar.module.css'

const SideBar = () => {
        return (

                <nav className={s.nav}>
                    <ul className={s.sideBarMenu}>
                        <li><a className = {`${s.sideBarElement} ${s.sideBarElementActive}`} href="src/components/SideBar/SideBar">Profile</a></li>
                        <li><a className={s.sideBarElement} href="src/components/SideBar/SideBar">Messages</a></li>
                        <li><a className={s.sideBarElement} href="src/components/SideBar/SideBar">News</a></li>
                        <li><a className={s.sideBarElement} href="src/components/SideBar/SideBar">Music</a></li>
                        <li><a className={s.sideBarElement} href="src/components/SideBar/SideBar">Settings</a></li>
                    </ul>
                </nav>

        );
}

export default SideBar;