import { useState } from 'react'
import './App.css'
import Register from './Components/Register';
import React from 'react';

const App = () => {
    return (
        <div>
            <h2 style = {{color: 'red'}}>프로필</h2>
            <Register/>
        </div>
    );
};

export default App;
