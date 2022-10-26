import React from 'react';
import {useNavigate} from "react-router-dom";
import Header from './Header'
import Footer from './Footer'

function Home() {
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `invite`;
        navigate(path);
    }

    return (
        <div>
            <Header/>
            <h1 className="home-main-text">A better way<br />to enjoy every day.</h1>
            <h6 className="home-small-text">Be the first to know when we launch. </h6>
            <button className="home-invite-button" onClick={routeChange}> Request an invite </button>
            <Footer/>
        </div>
    );
}

export default Home;