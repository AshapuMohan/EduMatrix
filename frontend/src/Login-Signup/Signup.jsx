import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [NameText, setNameText] = useState("");
  const [EmailText, setEmailText] = useState("");
  const [PassText, setPassText] = useState("");
  const [ConpassText, setConpassText] = useState("");
  const [RoleText, setRoleText] = useState("student");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (PassText !== ConpassText) {
      alert('Passwords do not match');
      return;
    }
    if (PassText.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    try {
      const response = await axios.post(`https://edu-matrix-back.vercel.app/signup`, {
        name: NameText,
        email: EmailText,
        password: PassText,
        role: RoleText
      });

      if (response.status === 200 || response.status === 201) {
        alert('Signup successful');
        navigate('/');
      }
    } catch (error) {
      alert(error?.response?.data?.message || 'Signup failed. Please try again.');
      console.error('Signup error:', error);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-center text-2xl font-bold mt-10'>Signup Page</h1>
      <form className='max-w-md mx-auto mt-5' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-sm font-medium mb-2' htmlFor='role'>Role</label>
          <select id='role' className='w-full px-3 py-2 border border-gray-300 rounded mb-4' value={RoleText} onChange={(e) => setRoleText(e.target.value)}>
            <option value='student'>Student</option>
            <option value='teacher'>Teacher</option>
            <option value='admin'>Admin</option>
          </select>

          <label className='block text-sm font-medium mb-2' htmlFor='name'>Name</label>
          <input type='text' id='name' className='w-full px-3 py-2 border border-gray-300 rounded mb-4' value={NameText} onChange={(e) => setNameText(e.target.value)} required />

          <label className='block text-sm font-medium mb-2' htmlFor='email'>Email</label>
          <input type='email' id='email' className='w-full px-3 py-2 border border-gray-300 rounded' value={EmailText} onChange={(e) => setEmailText(e.target.value)} required />

          <label className='block text-sm font-medium mb-2 mt-4' htmlFor='password'>Password</label>
          <input type='password' id='password' className='w-full px-3 py-2 border border-gray-300 rounded' value={PassText} onChange={(e) => setPassText(e.target.value)} required />

          <label className='block text-sm font-medium mb-2 mt-4' htmlFor='confirmPassword'>Confirm Password</label>
          <input type='password' id='confirmPassword' className='w-full px-3 py-2 border border-gray-300 rounded' value={ConpassText} onChange={(e) => setConpassText(e.target.value)} required />

          <button type='submit' className='w-full bg-blue-500 text-white px-4 py-2 mt-4 rounded'>Signup</button>
        </div>
        <p className='text-center mt-4'>Already have an account? 
          <button type="button" onClick={() => navigate('/')} className='text-blue-500 font-bold ml-1'>Login</button>
        </p>
      </form>
    </div>
  );
};

export default Signup;
