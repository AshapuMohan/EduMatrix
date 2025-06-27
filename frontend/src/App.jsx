import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Login from "./Login-Signup/Login";
import Signup from "./Login-Signup/Signup";
import Main from './components/Student-home';
import Fullstack from './components/Fullstack';
import Datascience from './components/Datascience';
import Cybersecurity from './components/Cybersecurity';
import CloudComputing from './components/CloudComputing';
import Teachhome from './components/Teach-home';
import Adminhome from './components/Admin-home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import ManageCourses from './components/ManageCourses';
function AppLayout() {
  const location = useLocation();
  const hideNavbarRoutes = ['/', '/signup'];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!shouldHideNavbar && <Navbar />}
      <div className='flex-grow'>
        <Routes>
        {/* login and signup */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* student home */}
        <Route path="/stu-home" element={<Main />} />
        {/* courses */}
        <Route path="/fullstack" element={<Fullstack/>} />
        <Route path="/data-science" element={<Datascience />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/cloud-computing" element={<CloudComputing />} />
        {/* teacher home  */}
        <Route path="/teach-home" element={<Teachhome />} />
        {/* admin home */}
        <Route path="/admin-home" element={<Adminhome />} />
        <Route path="/users" element={<Users/>} />
         <Route path="/manage-courses" element={<ManageCourses />} />
        {/* common components  */}
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        {/* <Route path="/:courseLink" element={<CourseDetail />} /> */}

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      </div>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
