import React from "react";
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link className='navElem' to="/">Home</Link>
            <Link className='navElem' to="/contact">Contact</Link>
            <p>More links coming soon!</p>
        </div>
    )
}

export default Navbar;

//            <Link className='navElem' to="/projects">Projects</Link>
//            <Link className='navElem' to="/blog">Blog</Link>
