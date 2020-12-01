/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { RiBarChartFill, RiUserSettingsLine } from 'react-icons/ri';
import { BiEnvelope } from 'react-icons/bi';
//import { HiOutlineUserAdd } from 'react-icons/hi';
//import { CgUserList } from 'react-icons/cg';
import {AiOutlineHome} from 'react-icons/ai';
import {IoIosSettings} from 'react-icons/io';

export default [
  {title: 'Home', href: './', icon: <AiOutlineHome className="icon" /> },
  { title: 'Dashboard', href: '/admin-portal', icon: <RiBarChartFill className="icon" /> },
  
  { title: 'Performance', 
  icon: <BiEnvelope className="icon" />,
  children: [
    { title: 'Performance Planning', href: '/admin-portal/perform-planning', icon: "cp"},
    
    { title: 'Mid year Review', icon: <RiUserSettingsLine className="icon" />},
  { title: 'Annual Appraisal', icon: <RiUserSettingsLine className="icon" />},
  {title: 'Performance Review',  href: '/admin-portal/employee-profile'},
  {title: 'Appraisal Review',  href: ''},
     
  
  ]
  },
  
 

 
  {
    title: 'Setup', 
    
   icon:  <IoIosSettings className="icon" />,
  
     
    children: [
     { title: 'Activate Perif.Planning', href: '/admin-portal/supervisor-organogram'},
     { title: 'Performance Approval', href: '/admin-portal/roles-setup'},
     { title: 'Development Need Approver', href: '/admin-portal/dev-approver'},
     { title: 'Create Competency', href: '/admin-portal/create-competency'},
     { title: 'Qualitative Assessment', href: '/admin-portal/Qual-assessment'},
     { title: 'Appraisal Approver', href: '/admin-portal/appraisal-approval'},
    ]


 },
 

  
];
