// components/Navbar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const savedRole = localStorage.getItem('role');
    setRole(savedRole);
  }, []);

  const renderLinks = () => {
    switch (role) {
      case 'student':
        return (
          <>
            <li><Link to='/stu-home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/stu-home'>Courses</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/'>Logout</Link></li>
          </>
        );
      case 'teacher':
        return (
          <>
            <li><Link to='/teach-home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/teach-home'>Add Courss</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/'>Logout</Link></li>
          </>
        );
      case 'admin':
        return (
          <>
            <li><Link to='/admin-home'>Dashboard</Link></li>
            <li><Link to='/users'>Users</Link></li>
            <li><Link to='/manage-courses'>Manage Courses</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/'>Logout</Link></li>
          </>
        );
      default:
        return (
          <>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/'>Login</Link></li>
          </>
        );
    }
  };

  return (
    <div className='flex justify-between items-center px-10 py-4 bg-gray-800 text-white font-semibold'>
      <img src='/logo-w.png' alt='Logo' className='w-[70px] h-[30px]' />
      <ul className='flex space-x-10'>
        {renderLinks()}
      </ul>
    </div>
  );
};

export default Navbar;
