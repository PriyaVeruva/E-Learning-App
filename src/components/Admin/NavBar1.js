import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { IconContext } from 'react-icons';
import { withRouter } from "react-router-dom"
import { useDispatch } from "react-redux"
import { clearData } from '../../actions/registerformActions';
import swal from 'sweetalert'
const NavBar1 = (props) => {
    const { handleAuth, userLoggedIn } = props
    const dispatch = useDispatch()
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const SidebarData = [
        {
            title: 'Account',
            path: '/account',
            icon: <FaIcons.FaUserCircle />,
            cName: 'nav-text'
        },
        {
            title: 'AllStudents',
            path: '/allstudents',
            icon: <IoIcons.IoMdPeople />,
            cName: 'nav-text'
        },
        {
            title: 'My Courses',
            path: '/allcourses',
            icon: <IoIcons.IoIosPaper />,
            cName: 'nav-text'
        },
    ];
    const SidebarData2 = [
        {
            titles: 'StudentAccount',
            paths: '/studentaccount',
            icons: <AccountCircleIcon />,
            cName: 'nav-text'
        },
        {
            titles: 'AllCourses',
            paths: '/allcourses',
            icons: <IoIcons.IoIosPaper />,
            cName: 'nav-text'
        },
        {
            titles: 'Enrolled Courses',
            paths: '/enrolledcourses',
            icons: <FaIcons.FaGraduationCap />,
            cName: 'nav-text'
        }
    ]

    return (
        <>
            {localStorage.getItem('role') === "admin" ?
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
                                        {userLoggedIn && localStorage.getItem('role') === "admin" &&
                                            <Link to={item.path}>
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        }
                                    </li>
                                );
                            })}
                            <li className='navbar-toggle'>  <Link to="/logout" className="menu-bars" onClick={() => {
                                localStorage.removeItem('token')
                                swal("Admin Successfully Logged Out")
                                dispatch(clearData())
                                handleAuth()
                                props.history.push("/")
                            }}>Logout</Link>
                            </li>
                        </ul>
                    </nav>
                </IconContext.Provider>
                :
                <IconContext.Provider value={{ color: '#fff' }} >
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
                            {
                                SidebarData2.map((item, index) => {
                                    return (
                                        <li key={index} className={item.cName}>
                                            {userLoggedIn && localStorage.getItem('role') === "student" &&
                                                <Link to={item.paths}>
                                                    {item.icons}
                                                    <span>{item.titles}</span>
                                                </Link>
                                            }
                                        </li>
                                    )
                                })
                            }
                            <li className='navbar-toggle'>  <Link to="/logout" className="menu-bars" onClick={() => {
                                localStorage.removeItem('token')
                                swal("Student Successfully Logged Out")
                                dispatch(clearData())
                                handleAuth()
                                props.history.push("/")
                            }}>Logout</Link>
                            </li>
                        </ul>
                    </nav>
                </IconContext.Provider>
            }
        </>
    );
}
export default withRouter(NavBar1);