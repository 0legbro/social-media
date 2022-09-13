import React from 'react';
import './App.css';
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Content from "./Content/Content";
/*import Content from "./Content/Content";
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer/Footer";*/

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <SideBar/>
            <Content/>
        </div>

    );
}

export default App;