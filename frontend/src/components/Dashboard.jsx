import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('name');
    const role = localStorage.getItem('role');

    setUserName(name);
    setUserRole(role || 'Unknown');
  }, []);

  return (
    <div>
      <h1 className='text-2xl font-bold text-center mt-10'>Dashboard</h1>
      <div className='flex justify-center mt-5'>
        <div className='bg-white shadow-lg rounded-lg p-6 w-3/4'>
          <h2 className='text-xl font-semibold mb-4'>Welcome to the Dashboard</h2>
          <p className='text-gray-700 mb-2'>
            Logged in as: <span className='font-medium'>{userName || 'guest'}</span>
          </p>
          <p className='text-gray-700'>
            Role: <span className='font-medium capitalize'>{userRole}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
