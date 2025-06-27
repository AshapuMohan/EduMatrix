import React, { useEffect, useState } from 'react';
import axios from 'axios';

const predefinedVideos = [
  "https://www.youtube.com/embed/EN4fEbcFZ_E?si=P1xoR1vX3inHg4QN",
  "https://www.youtube.com/embed/N4sJj-SxX00?si=bA1YIZH3O1K1g1YY",
  "https://www.youtube.com/embed/5abffC-K40c?si=gKRYFn-nIT_Nayld",
  "https://www.youtube.com/embed/k1RI5locZE4?si=W5D9O98pewNhvZ77",
  "https://www.youtube.com/embed/NhDYbskXRgc?si=cVJsPdJV4GSwCdzg",
  "https://www.youtube.com/embed/RqTEHSBrYFw?si=Hpz6uqEl7GFi6htz",
  "https://www.youtube.com/embed/e01GGTKmtpc?si=AUuD93KnC_2doQ8J",
  "https://www.youtube.com/embed/2LaAJq1lB1Q?si=1rVfp_AGZYevdoCa"
];

const CloudComputing = () => {
  const [extraCourses, setExtraCourses] = useState([]);

  useEffect(() => {
    const fetchExtraCourses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/courses/cloud-computing');
        setExtraCourses(res.data);
      } catch (err) {
        console.error('Error fetching cloud computing videos:', err);
      }
    };
    fetchExtraCourses();
  }, []);

  return (
    <div className='p-5'>
      <h1 className='text-center text-2xl font-bold mt-10'>Cloud Computing Course</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
        {predefinedVideos.map((src, idx) => (
          <iframe
            key={idx}
            width="450"
            height="315"
            className='rounded-2xl'
            src={src}
            title={`Cloud Computing Video ${idx + 1}`}
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
                  title={`Extra Cloud Computing Video ${i + 1}`}
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

export default CloudComputing;
