import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Contact() {

  function SubmitRegister(){

    toast.success('Thank you for contact us!')
  }
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[100%] lg:w-[1024px] mx-auto">
        <div className="flex justify-center relative">
          <img
            src="https://images.pexels.com/photos/7045675/pexels-photo-7045675.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Contact"
            className="rounded-md shadow-lg w-[100%] h-[500px] object-cover"
          />
          <div className='absolute '>
            <div className='flex flex-col justify-around h-[500px]'>
              <div className='text-white h2'>
                All Ways Welcome
              </div>

              <div className='w-[260px] mx-auto py-5 shadow-2xl bg-white p-3 rounded-lg'>
                <div className='h3  underline'>
                  Contact
                </div>

                <div className='flex  items-center pl-5 mt-3'>
                  <div className='h6 text-logo_blue font-bold'>
                    Phone : <span className='text-blue font-semibold'> 9575664087 </span>
                  </div>
                </div>
                <div className='flex justify-between items-center pl-5 '>
                  <div className='h6 text-logo_blue font-bold'>
                    Email <span className='text-blue font-semibold pl-2'> : Karate@gmail.com </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        <div className=" p-6 rounded-md shadow-custom-skyblue">
          <div className="font-medium text-black text-lg mb-4 h2">
            Contact Form
          </div>
          <form action="#">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                  <label className=" mb-2 block text-sm font-medium text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full focus:border-blue rounded border-[1.5px] border-stroke px-5 py-3 text-black outline-none focus:border-primary transition"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="mb-2 block text-sm font-medium text-black">
                    Phone number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className=" focus:border-blue w-full rounded border-[1.5px] border-stroke px-5 py-3 text-black outline-none focus:border-primary transition"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-black">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full focus:border-blue rounded border-[1.5px] border-stroke px-5 py-3 text-black outline-none focus:border-primary transition"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-black">
                  Message
                </label>
                <textarea

                  rows="6"
                  placeholder="Type your message"
                  className="w-full focus:border-blue rounded border-[1.5px] border-stroke px-5 py-3 focus:border-primary text-black outline-none focus:border-primary transition"
                ></textarea>
              </div>

              <button
                  onClick={SubmitRegister}
                type="submit"
                className="w-full bg-primary bg-logo_blue text-white   font-medium py-3 rounded transition hover:bg-opacity-90"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      
  <ToastContainer />
    </div>
  );
}

export default Contact;
