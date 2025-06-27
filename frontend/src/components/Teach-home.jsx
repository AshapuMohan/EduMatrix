import React, { useState } from 'react';
import axios from 'axios';

const Teachhome = () => {
  const [formData, setFormData] = useState({
    title: '',
    link: '/fullstack',
    videos: [''],
  });

  const courseOptions = [
    { label: 'Fullstack Development', value: '/fullstack' },
    { label: 'Data Science', value: '/data-science' },
    { label: 'Cybersecurity', value: '/cybersecurity' },
    { label: 'Cloud Computing', value: '/cloud-computing' },
  ];

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'videos') {
      const updatedVideos = [...formData.videos];
      updatedVideos[index] = value;
      setFormData({ ...formData, videos: updatedVideos });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addVideoField = () => {
    setFormData({ ...formData, videos: [...formData.videos, ''] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/courses', formData);
      alert('✅ Course added successfully!');
      setFormData({ title: '', link: '/fullstack', videos: [''] });
    } catch (error) {
      console.error('❌ Error:', error);
      alert('Failed to add course.');
    }
  };

  return (
    <div className='max-w-xl mx-auto mt-10'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Add New Course</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <input
          name="title"
          placeholder="Course Title"
          value={formData.title}
          onChange={handleChange}
          className='w-full p-2 border rounded'
          required
        />

        <select
          name="link"
          value={formData.link}
          onChange={handleChange}
          className='w-full p-2 border rounded'
          required
        >
          {courseOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <div>
          <label className='block font-semibold mb-1'>YouTube Videos:</label>
          {formData.videos.map((video, index) => (
            <input
              key={index}
              name="videos"
              placeholder={`Video URL ${index + 1}`}
              value={video}
              onChange={(e) => handleChange(e, index)}
              className='w-full p-2 mb-2 border rounded'
            />
          ))}
          <button
            type="button"
            onClick={addVideoField}
            className='text-blue-600 underline'
          >
            + Add More
          </button>
        </div>

        <button type="submit" className='w-full bg-blue-500 text-white p-2 rounded'>
          Submit Course
        </button>
      </form>
    </div>
  );
};

export default Teachhome;
