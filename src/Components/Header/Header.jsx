import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = ()=>{
    return(
        <>
        <Link to='/home'>Home</Link>
        <Link to='/store'>Store</Link>
        <Link to='/about'>About</Link>
        </>
    );
};

export default Header;