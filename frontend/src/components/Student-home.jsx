const Main = () => {

  const precourses = [
  {
    title: 'FullStack Development Course',
    image: '/fullstack.png',
    link: '/fullstack',
    description: 'Learn to build modern web applications with React, Node.js, and more.',
  },
  {
    title: 'Data Science Course',
    image: '/datascience.png',
    link: '/data-science',
    description: 'Master data analysis, machine learning, and AI with our comprehensive course.',
  },
  {
    title: 'Cybersecurity Course',
    image: '/cybersecurity.png',
    link: '/cybersecurity',
    description: 'Protect systems and networks with our in-depth cybersecurity training.',
  },
  {
    title: 'Cloud Computing Course',
    image: '/cloudcomputing.png',
    link: '/cloud-computing',
    description: 'Learn to deploy and manage applications in the cloud with our expert-led course.',
  },
];

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <div className="w-full bg-blue-500 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to Our Learning Platform</h1>
        <p className="mt-2 text-lg">Empower your career with our expert-led courses.</p>
      </div>

      <h1 className="text-center text-3xl font-bold mt-10 text-blue-700">Explore Our Courses</h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {precourses.map((course, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4 hover:scale-105 transform transition">
            <img src={course.image} alt={course.title} className="w-full h-60 object-cover rounded-md" />
            <h2 className="mt-4 text-lg font-semibold text-center">{course.title}</h2>
            <p className="mt-2 text-gray-600 text-center text-sm">{course.description}</p>
            <a href={course.link} className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow text-center">
              Enroll Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
