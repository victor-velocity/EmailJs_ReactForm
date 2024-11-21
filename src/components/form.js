import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const RegistrationForm = () => {
    const form = useRef();

    const sendEmail = (e) => {

    };

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        username: '',
        password: '',
        gender: '',
        note: '',
        dateofbirth: '',
        phone: '',
        age: '',
        maritalstatus: '',
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(`Submitted Data: \n Full Name: ${formData.fullname} \n Email: ${formData.email} \n Username: ${formData.username} \n Password: ${formData.password} \n Gender: ${formData.gender} \n Note: ${formData.note} \n Date of Birth: ${formData.dateofbirth} \n Phone: ${formData.phone} \n Age: ${formData.age} \n Marital Status: ${formData.maritalstatus} \n File: ${formData.file ? formData.file.name : 'No file uploaded'}`);

            emailjs
            .sendForm('service_xc38vm7', 'template_wjch6wr', form.current, {
                publicKey: 'DFwUprHDriXboxdk4',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };



    return (
        <div className='w-auto h-auto bg-green-500 py-7'>
            <div className=" mx-auto w-[70%] bg-white p-8 rounded-3xl shadow-xl">
                <h2 className="text-4xl font-bold font-sans text-center text-green-800 mb-10">Registration Form</h2>

                <form onSubmit={handleSubmit} ref={form} >
                    <div className='flex flex-grow flex-row justify-between flex-wrap w-full gap-4'>
                        <div className="mb-6 w-[48%]">
                            <label htmlFor="fullname" className="block text-gray-800 font-medium">Full Name:</label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="mb-6 w-[48%]">
                            <label htmlFor="email" className="block text-gray-800 font-medium">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    <div className='flex flex-grow flex-row justify-between flex-wrap w-full gap-4'>
                        {/* Username */}
                        <div className="mb-6 w-[48%]">
                            <label htmlFor="username" className="block text-gray-800 font-medium">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
                                placeholder="Enter your username"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-6 w-[48%]">
                            <label htmlFor="password" className="block text-gray-800 font-medium">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>

                    <div className='flex flex-grow flex-row justify-between flex-wrap w-full gap-4'>
                        {/* Gender */}
                        <div className="mb-6 w-[48%]">
                            <label htmlFor="gender" className="block text-gray-800 font-medium">Gender:</label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        {/* Phone Number */}
                        <div className="mb-6 w-[48%]">
                            <label htmlFor="phone" className="block text-gray-800 font-medium">Phone Number:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
                                placeholder="Enter your phone number"
                            />
                        </div>
                    </div>
                    <div className='flex flex-grow flex-row justify-between flex-wrap w-full gap-4'>
                        {/* Date of Birth */}
                        <div className="mb-6 w-[48%]">
                            <label htmlFor="dateofbirth" className="block text-gray-800 font-medium">Date of Birth:</label>
                            <input
                                type="date"
                                id="dateofbirth"
                                name="dateofbirth"
                                value={formData.dateofbirth}
                                onChange={handleChange}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
                            />
                        </div>

                        {/* Age */}
                        <div className="mb-6 w-[48%]">
                            <label htmlFor="age" className="block text-gray-800 font-medium">Age:</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
                                placeholder="Enter your age"
                            />
                        </div>
                    </div>
                    <div className='flex flex-grow flex-row items-center justify-between flex-wrap w-full gap-4'>
                        {/* Marital Status */}
                        <div className=" w-[48%] flex text-xl gap-4">
                            <label className="text-gray-800 font-medium">Marital Status:</label>
                            <div className="space-x-6">
                                <label>
                                    <input
                                        type="radio"
                                        name="maritalstatus"
                                        value="single"
                                        checked={formData.maritalstatus === 'single'}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Single
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="maritalstatus"
                                        value="married"
                                        checked={formData.maritalstatus === 'married'}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Married
                                </label>
                            </div>
                        </div>
                        {/* File Upload */}
                        <div className="mb-6 w-[48%]">
                            <label htmlFor="file" className="block text-gray-800 font-medium">Upload File:</label>
                            <input
                                type="file"
                                id="file"
                                name="file"
                                onChange={handleChange}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
                            />
                        </div>
                    </div>


                    {/* Note */}
                    <div className="mb-6 w-full">
                        <label htmlFor="note" className="block text-gray-800 font-medium">Note:</label>
                        <textarea
                            id="note"
                            name="note"
                            value={formData.note}
                            onChange={handleChange}
                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
                            placeholder="Additional notes"
                        />
                    </div>

                    <div className='flex justify-center mt-20 mb-7'>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="p-4 w-[300px] bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                            value="Send"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;