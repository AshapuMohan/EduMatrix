import React, { useEffect, useState } from 'react';
import axios from 'axios';

const fakeCourses = [
  {
    title: 'Full Stack Web Development',
    link: '/fullstack',
    videos: ['HTML Intro', 'CSS Basics', 'React Fundamentals'],
  },
  {
    title: 'Data Science Fundamentals',
    link: '/data-science',
    videos: ['Python Basics', 'Data Analysis with Pandas', 'Machine Learning Intro'],
  },
  {
    title: 'Cybersecurity Essentials',
    link: '/cybersecurity',
    videos: ['Network Security Basics', 'Ethical Hacking Intro', 'Web Application Security'],
  },
];

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/courses');
        setCourses(res.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
        // fallback to fake data
        setCourses(fakeCourses);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Courses</h1>
      <table className="min-w-full table-auto border border-gray-300 mt-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Link</th>
            <th className="px-4 py-2 border">Videos Count</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index} className="text-center">
              <td className="px-4 py-2 border">{course.title}</td>
              <td className="px-4 py-2 border">{course.link}</td>
              <td className="px-4 py-2 border">{course.videos.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCourses;
