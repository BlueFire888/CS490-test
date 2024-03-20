
import React, {useState} from 'react';
import '../styles/DealershipNavbar.css';
import { SideNav } from './SideNav';
import { HiBars3 } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { Button} from "react-bootstrap";
// Added by me
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  Link,
  Route
} from "react-router-dom";
// End added by me

function DealershipNavBar() {
const [sidebar, setSidebar] = useState(false)

const showSidebar = () => setSidebar(!sidebar)

    return (
        <div>
          <link href='https://fonts.googleapis.com/css?family=Abel' rel='stylesheet'></link>
            <div fluid className='navbar'>
            <div  className='user-logo'>{sidebar ? <IoCloseOutline className='toggleSideNav' onClick={showSidebar}/> :  <HiBars3 className='toggleSideNav'  onClick={showSidebar}/> }
              Welcome <FaRegUser className='user-logo'/></div>
              <div  className='button-div'><Button size='sm' href="/Login">Login</Button></div>
            </div>
          <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
            
            <ul className='nav-menu-items' onClick={showSidebar}>
                {SideNav.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                                <div className='nav-icons'>{item.icon}</div>
                                <Button  className="sidenavButtons" href={item.path}>{item.title}</Button>
                        </li>
                    )
                })}
            </ul>
          </nav>
          </div>
    )
}

export default DealershipNavBar;