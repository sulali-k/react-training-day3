import React from 'react';
import logo from './logo.svg';
import Header from "./components/Header";
import Composer from "./components/Composer";
import Post from "./components/Post";
import Footer from "./components/Footer";
// import './App.css';

function App() {
    return (
        <div className="compenet">
            <Header />
            <div className="content">
                <Composer />
                <div className="posts">
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
            <hr/>
            <Footer />
        </div>
    );
}



export default App;