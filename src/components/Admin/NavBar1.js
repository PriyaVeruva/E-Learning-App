import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css'
import { IconContext } from 'react-icons';
import {withRouter} from "react-router-dom"

function NavBar1(props) {
    const [sidebar, setSidebar] = useState(false);
const{handleAuth}=props
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                
                <div className='navbar'>
                    
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                        
                    </Link>
                </div>
              
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    
                    <ul className='nav-menu-items' onClick={showSidebar}>
                       
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        
                       
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                       <li className='navbar-toggle'>  <Link  to="/logout" className="menu-bars" onClick={() => {
                                    //removing token from local storage
                                    localStorage.removeItem('token')
                                    alert("Admin Successfully Logged Out")
                                   // dispatch(clearData())
                                    handleAuth()
                                    props.history.push("/")
                                }}>Logout</Link>
                                </li>
                       
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default withRouter(NavBar1);