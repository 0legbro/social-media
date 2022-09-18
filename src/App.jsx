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

    let dialogs = [
        {id:1, name:"Sasha"},
        {id:2, name:"Oleh"},
        {id:3, name:"Yuriy"},
        {id:4, name:"Alina"},
        {id:5, name:"Dasha"}
    ]

    let messages = [
        {id:1, message:"Hello"},
        {id:2, message:"How are you?"},
        {id:3, message:"Do you want to walk?"},
        {id:4, message:"Yes, we can!"},
        {id:5, message:"I love you..."}
    ]
    let posts = [
        {post: "I like this."},
        {post: "I dislike this."}
    ]

    return (
            <div className="app-wrapper">
                <Header/>
                <SideBar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/Dialogs" element={<Dialogs dialogs={dialogs} messages={messages}/>} />
                        <Route path="/Profile" element={<Profile posts ={posts} />} />
                        <Route path="/News" element={<News/>}/>
                        <Route path="/Music" element={<Music/>}/>
                        <Route path="/Settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        );
}

export default App;