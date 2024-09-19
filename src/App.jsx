import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
const Navbar = React.lazy(() => import('./Components/Navbar/Navbar'));
const Home = React.lazy(() => import('./Components/Home/Home'));
const Blog = React.lazy(() => import('./Components/Blog/Blog'));
const Dojo = React.lazy(() => import('./Components/Dojo/Dojo'));
const Event = React.lazy(() => import('./Components/Event/Event'));
const Contact = React.lazy(() => import('./Components/Contact/Contact'));
const MaterDetails = React.lazy(() => import('./Components/Home/MaterDetails'));
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Triangle } from 'react-loader-spinner';
import Register from './Components/Register/Register';
import logo from '../src/assets/karatelogo.png';
import { IoMdClose } from "react-icons/io";
import { useGetAllTournamentsQuery } from './features/api/userapi';
import { format } from 'date-fns';

function App() {
  const { data: getalltournaments, isLoading } = useGetAllTournamentsQuery();
  const popupdata = getalltournaments && getalltournaments[0];

  const [adver, setAdver] = useState(false);

  useEffect(() => {
    if (isLoading || !popupdata) return; // Ensure data is loaded
    const adShown = sessionStorage.getItem('adShown');
    if (!adShown) {
      setAdver(true);
      sessionStorage.setItem('adShown', 'true');
    }
  }, [popupdata, isLoading]);

  const closeAd = () => {
    setAdver(false);
  };

  return (
    <>
      {adver && popupdata && (
        <div className='h-screen w-screen flex justify-center items-center fixed z-50'>
          <div className='w-[350px] h-[350px] rounded-md relative bg-logo_blue'>
            <img className='w-[350px] h-[350px]' src={logo} alt="" />
            <div className='absolute top-0 bg-logo_blue/80 w-[350px] h-[350px] rounded-lg'>
              <div className='absolute right-0 top-0 rounded-full'>
                <IoMdClose onClick={closeAd} className='text-logo_yellow m-2' size={20} />
              </div>
              <div className='h3 text-center mt-5 text-white'>
                {popupdata.tournamentName}
              </div>
              <div className='pt-1 px-[10px] mt-5 text-white'>
                <span> Announcement Date:
                  <span>{format(new Date(popupdata.startDate), 'dd/MM/yyyy')} </span> 
                </span>
              </div>
              <div className='px-4 mt-5 text-justify h5 text-white'>
                {popupdata.About}
              </div>
              <div className='mt-3 px-4 flex justify-between text-white'>
                <div>
                  <span> Eligible Students: </span>
                  <span className='text-logo_yellow'> {popupdata.category}</span>
                </div>
                <div>
                  <span> Enquiry: </span>
                  <span className='text-logo_yellow'>{popupdata.enquiry}</span>
                </div>
              </div>
              <div className='flex justify-center mt-7 px-5'>
                <a href="/register">
                  <div className='h-10 bg-logo_yellow flex justify-center items-center w-[130px] border border-logo_yellow rounded-lg font-semibold text-white'>
                    Register
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <BrowserRouter>
        <Suspense fallback={
          <div className='h-screen w-screen flex justify-center items-center'>
            <Triangle
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Navbar getmydata={getalltournaments} />}>
              <Route index element={<Home />} />
              <Route path="event" element={<Event />} />
              <Route path="dojo" element={<Dojo />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
              <Route path="founder" element={<MaterDetails />} />
            </Route>
            <Route path="/register" element={<Register />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
