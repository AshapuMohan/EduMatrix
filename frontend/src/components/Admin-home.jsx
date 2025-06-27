import React from 'react'

const Adminhome = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center mt-10'>Admin Dashboard</h1>
      <div className='flex justify-center mt-5'>
        <div className='bg-white shadow-lg rounded-lg p-6 w-3/4'>
          <h2 className='text-xl font-semibold mb-4'>Welcome to the Admin Dashboard</h2>
          <p className='text-gray-700 mb-2'>Here you can manage users, courses, and view reports.</p>
          <p className='text-gray-700'>Use the navigation links to access different sections.</p>
        </div>
      </div>
    </div>
  )
}

export default Adminhome