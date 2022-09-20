import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import { Routes , Route} from "react-router-dom";
import News from "./components/News/News";


const App = (props) => {


    return (
            <div className="app-wrapper">
                <Header/>
                <SideBar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/Dialogs" element={<Dialogs state={props.state.dialogsPage} />} />
                        <Route path="/Profile" element={<Profile state ={props.state.profilePage} addPost={props.addPost}/>} />
                        <Route path="/News" element={<News/>}/>
                        <Route path="/Music" element={<Music/>}/>
                        <Route path="/Settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        );
}

export default App;