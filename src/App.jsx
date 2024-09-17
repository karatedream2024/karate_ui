import React, { Suspense } from 'react'
import './App.css'
const Navbar = React.lazy(() => import('./Components/Navbar/Navbar'));
const Home = React.lazy(() => import('./Components/Home/Home'));
const Blog = React.lazy(() => import('./Components/Blog/Blog'));
const Dojo = React.lazy(() => import('./Components/Dojo/Dojo'));
const Event = React.lazy(() => import('./Components/Event/Event'));
const Contact = React.lazy(() => import('./Components/Contact/Contact'));
const MaterDetails = React.lazy(() => import('./Components/Home/MaterDetails'));
import { BrowserRouter, Routes, Route, useLocation, } from "react-router-dom";
import { Triangle } from 'react-loader-spinner';
import Register from './Components/Register/Register';

function App() {

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div className='h-screen w-screen flex justify-center items-center'>
          <Triangle
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>}>
          <Routes>
            <>
              <Route path="/" element={<Navbar />}>
                <Route index element={<Home />} />
                <Route path="event" element={<Event />} />
                <Route path="dojo" element={<Dojo />} />
                <Route path="blog" element={<Blog />} />
                <Route path="contact" element={<Contact />} />
                <Route path="founder" element={<MaterDetails />} />

              </Route>

              <Route path="/register" element={<Register />} />
            </>
            {/* {       
            login ? (
              <>
              <Route path="/cms" element={<Sidebar getlogin={access} />}>
                <Route path="/cms" element={<StudentDetails />} />
                <Route path="/cms/addstudent" element={<AddStudent />} />
                <Route path="/cms/Student_Attendence" element={<Student_Attendence />} />
                <Route path="/cms/view_student/:spl_id" element={<ViewStudent />} />
                <Route path="/cms/pay_fee/:spl_id" element={<PayFees />} />
                <Route path="/cms/cmsblog" element={<Cmsblogs />} />
                <Route path="/cms/cmsdojo" element={<Cmsdojos />} />
                <Route path="/cms/cmsoldevent" element={<Cmsoldevents />} />
                <Route path="/cms/cmsstudentmaster" element={<Cmsstudentmaster />} />
                <Route path="/cms/cmstopfix" element={<Cmstopfix />} />
                <Route path="/cms/cmsupcomingevent" element={<Cmsupcomingevent />} />
                <Route path="/cms/cmsregister" element={<Cmsregister />} />
                
              </Route> 
            </>
            ) : (
              <Route path="/cms" element={<LoginForm  getlogin={access} />} />
            )
          }  */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
