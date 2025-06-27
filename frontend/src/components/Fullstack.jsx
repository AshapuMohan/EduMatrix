import React, { useEffect, useState } from 'react';
import axios from 'axios';

const predefinedVideos = [
  "https://www.youtube.com/embed/jgfq8OybWZQ?si=u9uhFTOkPanahPKy",
  "https://www.youtube.com/embed/nu_pCVPKzTk?si=2vUi68wWfmQnRRZU",
  "https://www.youtube.com/embed/ZxKM3DCV2kE?si=6H_Kps2qlBD9fpQF",
  "https://www.youtube.com/embed/M9O5AjEFzKw?si=797-zxEvJApNc9Nt",
  "https://www.youtube.com/embed/HVjjoMvutj4?si=-iQB4EuyFd7308n0",
  "https://www.youtube.com/embed/rOpEN1JDaD0?si=v1-gWndVpyPhNN2D",
  "https://www.youtube.com/embed/5nUxK4QrUE4?si=ucWTUIKte9kPFTnX",
  "https://www.youtube.com/embed/MDZC8VDZnV8?si=Nl2AzL6Mbz4Erkcq",
  "https://www.youtube.com/embed/ZxKM3DCV2kE?si=HUNayrrfSMC4VYX-",
  "https://www.youtube.com/embed/F9gB5b4jgOI?si=Y7Iwg5e3hCN3hQU5"
];

const Fullstack = () => {
  const [extraCourses, setExtraCourses] = useState([]);

  useEffect(() => {
    const fetchExtraCourses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/courses/fullstack');
        setExtraCourses(res.data);
      } catch (err) {
        console.error('Error fetching user-added courses:', err);
      }
    };
    fetchExtraCourses();
  }, []);

  return (
    <div className='p-5'>
      <h1 className='text-center text-2xl font-bold mt-10'>Fullstack Development Course</h1>

      {/* Predefined Videos */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
        {predefinedVideos.map((src, idx) => (
          <iframe
            key={idx}
            width="450"
            height="315"
            className='rounded-2xl'
            src={src}
            title={`Predefined Video ${idx + 1}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ))}
      </div>

      {/* User-Added Courses */}
      <h2 className='text-xl font-semibold mt-10 mb-4 text-center text-blue-700'>Additional Videos Added by Teachers</h2>
      {extraCourses.length === 0 ? (
        <p className='text-center text-gray-600'>No extra videos added yet.</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {extraCourses.map((course, idx) => (
            <React.Fragment key={idx}>
              {course.videos.map((videoUrl, i) => (
                <iframe
                  key={i}
                  width="450"
                  height="315"
                  className='rounded-2xl'
                  src={videoUrl}
                  title={`Extra Video ${i + 1}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              ))}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Fullstack;
