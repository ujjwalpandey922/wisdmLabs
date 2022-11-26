import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {FaUserCircle} from "react-icons/fa";
import {FaShoppingBag} from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <div className='app__header'>
      <div className='app__header-img'>
        <span>Logo</span>
      </div>
      <div className='app__header-nav'>
        <div className="app__header-nav_logos">
          <div className="app__header-nav_logos-search">
            <AiOutlineSearch/>
            <p>Search</p>
          </div>
          <div className="app__header-nav_logos-search">
            <FaUserCircle/>
            <p>Sign In</p>
          </div>
          <div className="app__header-nav_logos-search">
            <FaShoppingBag/>
            <p>(0)</p>
          </div>
        </div>
        <div className="app__header-nav_list">
          <ul>
            <li>Classes</li>
            <li>Programs & Events</li>
            <li>Blogs</li>
            <li>About</li>
            <li>Get Involed</li>
          </ul>
          <button>Find a Class</button>
        </div>
      </div>
    </div>
  )
}

export default Header
