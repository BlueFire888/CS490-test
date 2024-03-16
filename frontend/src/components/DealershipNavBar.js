
import React, {useState} from 'react';
import '../styles/navbar.css';
import { SideNav } from './SideNav';
import { HiBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { Container, Row, Col} from "react-bootstrap";

function DealershipNavBar() {
const [sidebar, setSidebar] = useState(false)

const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
          <link href='https://fonts.googleapis.com/css?family=Abel' rel='stylesheet'></link>
          <div className='navbar' onClick={showSidebar}>
            <div className='container-fluid' >
                <Row>
              <Col >{sidebar ? <IoCloseOutline className='toggleSideNav'/> :  <HiBars3 className='toggleSideNav'/> }</Col>
              <Col><h5 className='logo'>Welcome</h5></Col>
               </Row>
               <button className='signup'>Sign up</button>
              </div>
          </div>
          <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
            
            <ul className='nav-menu-items' onClick={showSidebar}>
                {SideNav.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                                <div className='nav-icons'>{item.icon}</div> <div>{item.title}</div>
                        </li>
                    )
                })}
            </ul>
          </nav>
          </>    )
}

export default DealershipNavBar;