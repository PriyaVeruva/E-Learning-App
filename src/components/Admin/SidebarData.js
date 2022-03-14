import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';




export const SidebarData = [
  {
    title: 'Account',
    path: '/account',
    icon: <FaIcons.FaUserCircle/>,
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
 
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
  
];