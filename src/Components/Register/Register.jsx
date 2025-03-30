import React, { useState } from 'react';
import logo from '../../assets/karatelogo.png';
import './Register.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAddRegistrationMutation } from '../../features/api/userapi';
import { useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
// import { useAddRegistrationMutation } from './apiSlice'; // Adjust the import path

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    dob: '',
    gender: '',
    Address: '',
    academyName: '',
    beltRank: '',
  });

  const navigate = useNavigate()

  const [addRegistration, { isLoading, isError, isSuccess }] = useAddRegistrationMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addRegistration(formData).unwrap();
      toast.success('Thank you for registering!');
      setFormData({
        fullName: '',
        phone: '',
        dob: '',
        gender: '',
        Address: '',
        academyName: '',
        beltRank: '',
      });
      setTimeout(() => {
         navigate("/")
      },2000)
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <div className="custom-gradient min-h-screen  backdrop-blur-2xl pt-10">
      <div className=" max-w-4xl mx-auto bg-white/60 w-[90%] md:w-auto    backdrop-blur-2xl rounded-lg shadow-lg bg-no-repeat bg-center" 
      style={{ backgroundImage: `url(${logo})` }}
      >
        <div className="bg-white/60  backdrop-blur-2xl py-10 rounded-lg  relative">
        <div onClick={() => navigate("/")} className='absolute top-5 right-5 cursor-pointer' >
        <IoMdClose  size={25} className='text-logo_blue' />
        </div>
        <div className='w-[90%] mx-auto' >
        <div className='text-center' >
          <h2 className="h2 font-bold text-gray-800 mb-4 text-logo_red">Tournament Registration</h2>
          <p className="text-logo_blue">Please fill out the form below to register for the tournament.</p>
          </div>
        <form onSubmit={handleSubmit} className=''>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full border-b-2 border-logo_blue px-4 py-2 bg-white/0 focus:outline-none focus:ring-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border-b-2 border-logo_blue px-4 py-2 bg-white/0 focus:outline-none focus:ring-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
                <input
                  type="date"
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  className="w-full border-b-2 border-logo_blue px-4 py-2 bg-white/0 focus:outline-none focus:ring-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full border-b-2 border-logo_blue px-4 py-2 bg-white/0 focus:outline-none focus:ring-none"
                  required
                >
                  <option value="" disabled>Select your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  placeholder="Enter your Address"
                  value={formData.Address}
                  onChange={(e) => setFormData({ ...formData, Address: e.target.value })}
                  className="w-full border-b-2 border-logo_blue px-4 py-2 bg-white/0 focus:outline-none focus:ring-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Academy Name</label>
                <input
                  type="text"
                  placeholder="Enter your academy name"
                  value={formData.academyName}
                  onChange={(e) => setFormData({ ...formData, academyName: e.target.value })}
                  className="w-full border-b-2 border-logo_blue px-4 py-2 bg-white/0 focus:outline-none focus:ring-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Belt Rank</label>
                <input
                  type="text"
                  placeholder="Enter your academy name"
                  value={formData.beltRank}
                  onChange={(e) => setFormData({ ...formData, beltRank: e.target.value })}
                  className="w-full border-b-2 border-logo_blue px-4 py-2 bg-white/0 focus:outline-none focus:ring-none"
                  required
                />
         
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="mt-4 w-[300px] bg-blue text-white font-semibold py-3 rounded-lg transition duration-300 hover:bg-blue-700"
                disabled={isLoading}
              >
                {isLoading ? 'Registering...' : 'Register Now'}
              </button>
            </div>
          </div>
        </form>
        </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
