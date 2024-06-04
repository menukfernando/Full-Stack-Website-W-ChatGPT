// src/App.js

import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Tutorials from './components/Tutorials/Tutorials';
import Contact from './components/Contact/Contact';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Tutorials />
            <Contact />
        </div>
    );
};

export default App;
