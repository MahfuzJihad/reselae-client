import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
              <div className="navbar bg-primary text-primary-content bg-base-120 pb-4">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
           <p>HomeHut</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 p-0">
            <li className="font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold">
              <Link to="/servicepage">Service</Link>
            </li>
            <li className="font-semibold">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="font-semibold">
              <Link to="/login">Login</Link>
            </li>
            </ul>
        </div>
        </div>
        {/* <img src={} alt="" />  */}
        </div>
    );
};

export default Navbar;