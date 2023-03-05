import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import FinderLayout from './FinderLayout';
import Discover from './Discover';
import Profile from './Profile';
import Matches from './Matches';
import Login from './Login';


function FinderApp(props) {
    
    const [loggedIn, setLoggedIn] = useState(false);

    const updateStatus = () => {
        setLoggedIn(!loggedIn);
    }

    const conditionalRoute = () => {
        if(loggedIn){
            return <Routes>
                <Route path="/" element={<FinderLayout />}>
                    <Route index element={<Profile />}></Route>
                    <Route path="/discover" element={<Discover />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="/matches" element={<Matches />}></Route>
                </Route>
            </Routes>
        }
        else{
            return <Routes>
                <Route path="/*" element={<Login change={updateStatus}/>}></Route>
            </Routes>
        }
    }
    
    return( 
    <>
        <BrowserRouter>
            {conditionalRoute()}
        </BrowserRouter>
    </>);
}

export default FinderApp;