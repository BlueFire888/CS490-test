import React from 'react';
import '../styles/DealershipNavbar.css';
import { FaCartPlus} from 'react-icons/fa'
import { AiFillHome} from 'react-icons/ai'
import * as IoIcons from 'react-icons/io';

export const SideNav = [{
    title: 'Home',
    path : '/',
    icon : <AiFillHome/>,
    cName: 'nav-text'
},
{
    title: 'Reports',
    path : '/reports',
    icon : <IoIcons.IoIosPaper/>,
    cName: 'nav-text'
},
{
    title: 'Products',
    path : '/products',
    icon : <FaCartPlus />,
    cName: 'nav-text'
}]