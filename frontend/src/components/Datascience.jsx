import React, { useEffect, useState } from 'react';
import axios from 'axios';

const predefinedVideos = [
  "https://www.youtube.com/embed/4DlsTsqpY84?si=zF4u6D8kfje-O5aa",
  "https://www.youtube.com/embed/ua-CiDNNj30?si=TLXKV6TMlMHHhQQl",
  "https://www.youtube.com/embed/e_s_RiI766g?si=wn1_bHBjdIHq74qJ",
  "https://www.youtube.com/embed/-ETQ97mXXF0?si=jxMiQ5OZ29t_gK25",
  "https://www.youtube.com/embed/XU5pw3QRYjQ?si=gQgS1yXpvf6ipqwp",
  "https://www.youtube.com/embed/a5KmkeQ714k?si=uBqifqmnXPFBri98",
  "https://www.youtube.com/embed/gDZ6czwuQ18?si=GBMv6tzg_2dfRP7d",
  "https://www.youtube.com/embed/xxpc-HPKN28?si=vfeOjXCh-CiIP-vd",
  "https://www.youtube.com/embed/CMEWVn1uZpQ?si=hS0IRJKvR3gRBZ9k",
  "https://www.youtube.com/embed/GPVsHOlRBBI?si=b9kOE9u5-hX0cf1r"
];

const Datascience = () => {
  const [extraCourses, setExtraCourses] = useState([]);

  useEffect(() => {
    const fetchExtraCourses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/courses/data-science');
        setExtraCourses(res.data);
      } catch (err) {
        console.error('Error fetching data science videos:', err);
      }
    };
    fetchExtraCourses();
  }, []);

  return (
    <div className='p-5'>
      <h1 className='text-center text-2xl font-bold mt-10'>Data Science Course</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
        {predefinedVideos.map((src, idx) => (
          <iframe
            key={idx}
            width="450"
            height="315"
            className='rounded-2xl'
            src={src}
            title={`Data Science Video ${idx + 1}`}
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
                  title={`Extra Data Science Video ${i + 1}`}
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

export default Datascience;
