import React, { Component } from 'react';
import {Link} from 'react-router-dom';


const Nav = () => (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/signup'>Join</Link>
        <Link to='/login'>Login</Link>
        <Link to='/explore'>explore</Link>
    </div>
)

export default Nav;
