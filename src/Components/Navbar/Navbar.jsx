import React, { useEffect, useState } from 'react'
import logo from '../../assets/karatelogo.png'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Marquee from 'react-fast-marquee'


function Navbar() {

  const locate = useLocation()

  // console.log(locate, 'this is location')

  const navigate = useNavigate();


  function RegisterNaviation(){
    navigate('/register')
  }


  const [nav, setnav] = useState(locate.pathname)

  const [toggle, setToggle] = useState(false)

  const navbarchange = (value) => {
    console.log(value, 'this is value')
    setnav(locate)
    setnav(value)
  }

  const navToggle = () => {
    setToggle(!toggle)
  }

  return ( 

    <div>
      {/* <div className='bg-logo_red'>
        <div className='grid grid-cols-2 md:flex md:flex-wrap justify-around items-center  '>
          <div className='text-white flex items-center h3'>
         Tournment Name-22.08.1999</div>
       
          <div  className='flex justify-center items-center space-x-3'>
          <div className='text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg>
         </div>
          <div onClick={() => RegisterNaviation()}  className='border-2 p-2 px-4 my-2 h5 cursor-pointer text-black border-white hover:bg-black hover:text-white hover:border-black bg-white rounded-md' >REGISTER </div>
          </div>
        </div>
      </div> */}

      {/* mobile navbar */}
      <div className='lg:hidden '>
        <div className={`${toggle ? 'w-[80%] sm:w-[50%] duration-700' : 'w-0'} bg-white h-[100vh] fixed top-0 right-0 z-40 `}>
          <div className='flex justify-between px-5 items-center'>
            <div className='absolute h-16 w-16 z-50 top-0 left-0 '>
              <img src={logo} alt="" />
            </div>
            <div className={`absolute right-0 top-5 ${toggle ? "" : "hidden"}`} onClick={() => navToggle()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z" /></g></svg>
            </div>


          </div>
          <div>
            <div className={`${toggle ? '' : 'hidden'} relative w-[80%] mx-auto mt-5 mb-5 pt-16 `} >
              <input type="text" className="outline-none border-none bg-background  h-12  w-[100%]   px-3 rounded-lg " />
              <div className="absolute top-0 right-3 hover:text-blue-400   flex items-center justify-center h-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M8.195 0c4.527 0 8.196 3.62 8.196 8.084a7.989 7.989 0 0 1-1.977 5.267l5.388 5.473a.686.686 0 0 1-.015.98a.71.71 0 0 1-.993-.014l-5.383-5.47a8.23 8.23 0 0 1-5.216 1.849C3.67 16.169 0 12.549 0 8.084C0 3.62 3.67 0 8.195 0m0 1.386c-3.75 0-6.79 2.999-6.79 6.698c0 3.7 3.04 6.699 6.79 6.699s6.791-3 6.791-6.699c0-3.7-3.04-6.698-6.79-6.698" /></svg>
              </div>

            </div>
          </div>
          <Link to='/'>
            <div onClick={() => navbarchange('/')} className={`${nav === '/' ? 'border-l-4 rounded-full text-blue' : ''} `}>
              <hr className='text-line' />

              <div className={` ${nav === '/' ? 'text-blue' : ''} my-3 pl-10 h5s`} >
                Home
              </div>
              <hr className='text-line' />
            </div>
          </Link>
          <Link to='/event'>
            <div onClick={() => navbarchange('/event')} className={`${nav === '/event' ? 'border-l-4 rounded-full text-blue' : ''} `}>
              <hr className='text-line' />

              <div className={` ${nav === '/event' ? 'text-blue' : ''} my-3 pl-10 h5`} >
                Event
              </div>
              <hr className='text-line' />
            </div>
          </Link>
          <Link to='/dojo'>
            <div onClick={() => navbarchange('/dojo')} className={`${nav === '/dojo' ? 'border-l-4 rounded-full text-blue' : ''} `}>
              <hr className='text-line' />

              <div className={` ${nav === '/Dojo' ? 'text-blue' : ''} my-3 pl-10 h5`} >
                Dojo
              </div>
              <hr className='text-line' />
            </div>
          </Link>
          <Link to='/blog'>
            <div onClick={() => navbarchange('/blog')} className={`${nav === '/blog' ? 'border-l-4 rounded-full text-blue' : ''} `}>
              <hr className='text-line' />

              <div className={` ${nav === '/blog' ? 'text-blue' : ''} my-3 pl-10 h5`} >
                Blog
              </div>
              <hr className='text-line' />
            </div>
          </Link>
          <Link to='/contact'>
            <div onClick={() => navbarchange('/contact')} className={`${nav === '/contact' ? 'border-l-4 rounded-full text-blue' : ''} `}>
              <hr className='text-line' />

              <div className={` ${nav === '/contact' ? 'text-blue' : ''} my-3 pl-10 h5`} >
                Contact
              </div>
              <hr className='text-line' />
            </div>
          </Link>
          <div className={`${toggle ? '' : 'hidden'} flex  justify-around my-5`}>
            <div className='border-x-2 border-y-2 p-2  text-letter-black cursor-pointer border-line'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" /></svg>
            </div>

            <div className='border-x-2 border-y-2 p-2  text-letter-black cursor-pointer border-line'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M14.2 2.875A4.625 4.625 0 0 0 9.575 7.5v2.575H7.1c-.124 0-.225.1-.225.225v3.4c0 .124.1.225.225.225h2.475V20.9c0 .124.1.225.225.225h3.4c.124 0 .225-.1.225-.225v-6.975h2.497c.103 0 .193-.07.218-.17l.85-3.4a.225.225 0 0 0-.218-.28h-3.347V7.5a.775.775 0 0 1 .775-.775h2.6c.124 0 .225-.1.225-.225V3.1c0-.124-.1-.225-.225-.225z" /></svg>
            </div>


            <div className='border-x-2 border-y-2 p-2  text-letter-black cursor-pointer border-line'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M16 12a4 4 0 1 0-1.172 2.829A3.843 3.843 0 0 0 16 12.06l-.001-.063zm2.16 0a6.135 6.135 0 1 1-1.797-4.359a5.922 5.922 0 0 1 1.798 4.256l-.001.109zm1.687-6.406v.002a1.44 1.44 0 1 1-.422-1.018c.256.251.415.601.415.988v.029v-.001zm-7.84-3.44l-1.195-.008q-1.086-.008-1.649 0t-1.508.047c-.585.02-1.14.078-1.683.17l.073-.01c-.425.07-.802.17-1.163.303l.043-.014a4.117 4.117 0 0 0-2.272 2.254l-.01.027a5.975 5.975 0 0 0-.284 1.083l-.005.037a11.76 11.76 0 0 0-.159 1.589l-.001.021q-.039.946-.047 1.508t0 1.649t.008 1.195t-.008 1.195t0 1.649t.047 1.508c.02.585.078 1.14.17 1.683l-.01-.073c.07.425.17.802.303 1.163l-.014-.043a4.117 4.117 0 0 0 2.254 2.272l.027.01c.318.119.695.219 1.083.284l.037.005c.469.082 1.024.14 1.588.159l.021.001q.946.039 1.508.047t1.649 0l1.188-.024l1.195.008q1.086.008 1.649 0t1.508-.047c.585-.02 1.14-.078 1.683-.17l-.073.01c.425-.07.802-.17 1.163-.303l-.043.014a4.117 4.117 0 0 0 2.272-2.254l.01-.027c.119-.318.219-.695.284-1.083l.005-.037c.082-.469.14-1.024.159-1.588l.001-.021q.039-.946.047-1.508t0-1.649t-.008-1.195t.008-1.195t0-1.649t-.047-1.508c-.02-.585-.078-1.14-.17-1.683l.01.073a6.254 6.254 0 0 0-.303-1.163l.014.043a4.117 4.117 0 0 0-2.254-2.272l-.027-.01a5.975 5.975 0 0 0-1.083-.284l-.037-.005a11.76 11.76 0 0 0-1.588-.159l-.021-.001q-.946-.039-1.508-.047t-1.649 0zM24 12q0 3.578-.08 4.953a6.64 6.64 0 0 1-6.985 6.968l.016.001q-1.375.08-4.953.08t-4.953-.08a6.64 6.64 0 0 1-6.968-6.985l-.001.016q-.08-1.375-.08-4.953t.08-4.953A6.64 6.64 0 0 1 7.061.079L7.045.078q1.375-.08 4.953-.08t4.953.08a6.64 6.64 0 0 1 6.968 6.985l.001-.016Q24 8.421 24 12" /></svg>
            </div>



            <div className='border-x-2 border-y-2 p-2 text-letter-black cursor-pointer border-line'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16"><path fill="currentColor" d="M3.44 4.89c.8 0 1.44-.65 1.44-1.44s-.65-1.44-1.44-1.44S2 2.66 2 3.45s.65 1.44 1.44 1.44m2.81 1.09V14h2.48v-3.96c0-1.05.2-2.06 1.49-2.06s1.29 1.2 1.29 2.12V14H14V9.6c0-2.16-.46-3.82-2.98-3.82c-1.21 0-2.02.66-2.35 1.29h-.03v-1.1H6.26Zm-4.05 0h2.49V14H2.2z" /></svg>
            </div>


          </div>





        </div>
      </div>



      {/* desktop navbar */}
      <div className='sticky top-0  w-[100%]  bg-logo_blue text-white py-1 z-20'>
        <div>
        <div className='bg-logo_yellow'>
         <Marquee autoFill={true} pauseOnHover={true} style={{padding: '2px'}} > <div className='px-10'>Tournment AnnounceMent title</div>    </Marquee>
        </div>
          
        </div>
        <div className="flex justify-between pl-[10%] lg:pl-[0] lg:justify-around items-center  mx-3  ">
          <div className="flex  items-center justify-center">
            <div className=' w-16 ml-3 md:w-24 '>
              <img src={logo} alt="" />
            </div>

          </div>
          <div onClick={() => navToggle()} className='lg:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.17em" height="1em" viewBox="0 0 28 24"><path fill="currentColor" d="M2.61 0h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22m0 9.39h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22m0 9.391h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22" /></svg>
          </div>
          <div className='hidden lg:block'>
            <div className="flex space-x-10 ">
              <Link to='/'>
                <div onClick={() => navbarchange('/')} className={`${nav === '/' ? 'h3 !text-logo_yellow ' : 'h3 '}`}>
                  Home
                </div>
              </Link>

              <Link to='/Event'>
                <div onClick={() => navbarchange('/Event')} className={`${nav === '/Event' ? 'h3 !text-logo_yellow ' : 'h3'}`}>
                  Event
                </div>
              </Link>
              <Link to='/Dojo'>
                <div onClick={() => navbarchange('/Dojo')} className={`${nav === '/Dojo' ? 'h3 !text-logo_yellow ' : 'h3'}`}>
                  Dojo's
                </div>
              </Link>
     
              <Link to='/blog'>

                <div onClick={() => navbarchange('/blog')} className={`${nav === '/blog' ? 'h3 !text-logo_yellow ' : 'h3 '}`}>
                 Blog
                </div>
              </Link>


              <Link to='/Contact'>

                <div onClick={() => navbarchange('/Contact')} className={`${nav === '/Contact' ? 'h3 !text-logo_yellow ' : 'h3 '}`}>
                  Contact us
                </div>
              </Link>
            </div>
          </div>
          <div className='hidden lg:block'>
            <div className="flex space-x-8 items-center">
              <div>

              </div>
              <div className="border border-logo_red hover:bg-logo_red cursor-pointer text-white h-10 flex items-center rounded-md justify-center px-10">
                Call Now
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Navbar