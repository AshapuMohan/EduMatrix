import React, { useEffect, useState } from 'react';
import axios from 'axios';

const predefinedVideos = [
  "https://www.youtube.com/embed/zHVHhkVGqvY?si=oCVay2fGpeLDL9o7",
  "https://www.youtube.com/embed/K-WLfzXmX3U?si=hHqCy5cSLjyhxeDP",
  "https://www.youtube.com/embed/hXSFdwIOfnE?si=cBwnkJ_r_rxCs1rz",
  "https://www.youtube.com/embed/v3iUx2SNspY?si=Ja4NZKFo41kaImJq",
  "https://www.youtube.com/embed/s19BxFpoSd0?si=DYY5dlFmKEZAZwyY",
  "https://www.youtube.com/embed/lpa8uy4DyMo?si=m6zrNN0oZUEw4ktS",
  "https://www.youtube.com/embed/-n7iaQVF88A?si=oD1dgGO3N1bKUwYp",
  "https://www.youtube.com/embed/fNzpcB7ODxQ?si=yv6PeqML1gsxxerM",
  "https://www.youtube.com/embed/TTXtdi9aegc?si=ErxsSGo99zE5QgSL",
  "https://www.youtube.com/embed/3Kq1MIfTWCE?si=X_rM9FFOaD6NQah-"
];

const Cybersecurity = () => {
  const [extraCourses, setExtraCourses] = useState([]);

  useEffect(() => {
    const fetchExtraCourses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/courses/cybersecurity');
        setExtraCourses(res.data);
      } catch (err) {
        console.error('Error fetching cybersecurity videos:', err);
      }
    };
    fetchExtraCourses();
  }, []);

  return (
    <div className='p-5'>
      <h1 className='text-center text-2xl font-bold mt-10'>Cybersecurity Course</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
        {predefinedVideos.map((src, idx) => (
          <iframe
            key={idx}
            width="450"
            height="315"
            className='rounded-2xl'
            src={src}
            title={`Cybersecurity Video ${idx + 1}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ))}
      </div>

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
                  title={`Extra Cybersecurity Video ${i + 1}`}
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

export default Cybersecurity;
