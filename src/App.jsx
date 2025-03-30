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
              <Route path="events" element={<Event />} />
              <Route path="dojos" element={<Dojo />} />
              <Route path="blogs" element={<Blog />} />
              <Route path="contacts" element={<Contact />} />
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
