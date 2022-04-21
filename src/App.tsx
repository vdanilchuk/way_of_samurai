import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Music} from "./components/Music/Music";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";

import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <NavBar/>
                <div className='app_wrapper_content'>
                    <Route path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
