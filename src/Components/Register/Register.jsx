import React from 'react'

import logo from '../../assets/karatelogo.png'
import './Register.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {


    function SubmitRegister() {

        toast.success('Thank you for registering!')
    }
    return (
        <div className="custom-gradient min-h-screen pt-10">

            <div className="p-8 max-w-4xl mx-auto bg-white rounded-lg shadow-lg  bg-no-repeat bg-center" style={{ backgroundImage: `url(${logo})` }}>


                <div className="text-center pb-6 backdrop:blur-3xl bg-white/60  ">
                    <h2 className="h2 font-bold text-gray-800 mb-4 text-logo_red">Tournament Registration</h2>
                    <p className="text-logo_blue">Please fill out the form below to register for the tournament.</p>
                </div>
                <form action="#" className='bg-white/60'>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full border-b-2 border-logo_blue   px-4 py-2 bg-white/0 focus:outline-none focus:ring-none focus:ring-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="w-full border-b-2 border-logo_blue   px-4 py-2 bg-white/0 focus:outline-none focus:ring-none focus:ring-none"
                                />

                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
                                <input
                                    type="date"
                                    className="w-full border-b-2 border-logo_blue   px-4 py-2 bg-white/0 focus:outline-none focus:ring-none focus:ring-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                                <select
                                    className="w-full border-b-2 border-logo_blue   px-4 py-2 bg-white/0 focus:outline-none focus:ring-none focus:ring-none"
                                >
                                    <option value="" disabled selected>Select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">State</label>
                                <input
                                    type="text"
                                    placeholder="Enter your state"
                                    className="w-full border-b-2 border-logo_blue   px-4 py-2 bg-white/0 focus:outline-none focus:ring-none focus:ring-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Academy Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your academy name"
                                    className="w-full border-b-2 border-logo_blue   px-4 py-2 bg-white/0 focus:outline-none focus:ring-none focus:ring-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Belt Rank</label>
                                <select
                                    className="w-full border-b-2 border-logo_blue   px-4 py-2 bg-white/0 focus:outline-none focus:ring-none focus:ring-none"
                                >
                                    <option value="" disabled selected>Select your belt rank</option>
                                    <option value="white">White</option>
                                    <option value="yellow">Yellow</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                    <option value="purple">Purple</option>
                                    <option value="brown">Brown</option>
                                    <option value="black">Black</option>
                                </select>
                            </div>
                        </div>


                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full bg-blue text-white font-semibold py-3 rounded-lg transition duration-300 hover:bg-blue-700"
                                onClick={SubmitRegister}
                            >
                                Register Now
                            </button>
                        </div>
                    </div>
                </form>

            </div>
            <ToastContainer />
        </div>
    )
}

export default Register