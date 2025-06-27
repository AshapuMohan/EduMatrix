import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
    const navigate = useNavigate();
    const [EmailText,setEmailText] = useState("");
    const [PassText,setPassText] = useState("");
    const [RoleText,setRoleText] = useState("student");

    const handleEmailChange = (e) => setEmailText(e.target.value);
    const handlePasswordChange = (e) => setPassText(e.target.value);
    const handleRoleChange = (e) => setRoleText(e.target.value);

    const handleSubmit = async(e) => {
    e.preventDefault();
    if (!EmailText || !PassText) {
        alert("Please fill in all fields");
        return;
    }
    try{
    const response = await axios.post('http://localhost:5000/', {
        email: EmailText,
        password: PassText,
        role: RoleText
    });

    const { token, role, email, name } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('email', email);
    localStorage.setItem('name', name);
    console.log('Login successful:', { token, role, email, name });
    if (role === 'student') navigate('/dashboard');
      else if (role === 'teacher') navigate('/teach-home');
      else if (role === 'admin') navigate('/admin-home');
      else navigate('/');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || 'Login failed');
      } else {
        alert('Network error. Please try again.');
      }
    }
    console.log({ EmailText, PassText, RoleText });
    };
  return (
    <div className='felx flex-col items-center justify-center'>
        <h1 className='text-center text-2xl font-bold mt-10'>Login Page</h1>
        <form className='max-w-md mx-auto mt-5' onSubmit={handleSubmit}>
            <div className='mb-4'>
                <label htmlFor='role' className='block text-sm font-medium mb-2'>Role</label>
                <select id='role' className='w-full px-3 py-2 border border-gray-300 rounded mb-4' onChange={handleRoleChange} value={RoleText}>
                    <option value='student'>Student</option>
                    <option value='teacher'>Teacher</option>
                    <option value='admin'>Admin</option>
                </select>
                <label className='block text-sm font-medium mb-2' htmlFor='email'>Email</label>
                <input type='email' id='email' className='w-full px-3 py-2 border border-gray-300 rounded' onChange={handleEmailChange} value={EmailText} required />
                <label className='block text-sm font-medium mb-2 mt-4' htmlFor='password'>Password</label>
                <input type='password' id='password' className='w-full px-3 py-2 border border-gray-300 rounded' onChange={handlePasswordChange} value={PassText} required />
                <button type='submit' className='w-full bg-blue-500 text-white px-4 py-2 rounded mt-4'>Login</button>
            </div>
            <p className='text-center mt-4'>Don't have an account? <a href='/signup' className='text-blue-500 font-bold'>Signup</a></p>
        </form>
    </div>
  )
}

export default Login