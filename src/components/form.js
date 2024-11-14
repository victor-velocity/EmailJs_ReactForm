import React, { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        age: '',
        gender: '',
        bio: '',
        birthdate: '',
        agreeToTerms: false,
        preferences: [],
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox' && name === 'preferences') {
            setFormData({
                ...formData,
                [name]: checked
                    ? [...formData.preferences, value]
                    : formData.preferences.filter((item) => item !== value),
            });
        } else {
            setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted: \n Name: ${formData.name} \n Email: ${formData.email} \n Password: ${formData.password} \n Phone: ${formData.phone} \n Age: ${formData.age} \n Gender: ${formData.gender} \n Preferences: ${formData.preferences.join(", ")} \n Bio: ${formData.bio} \n Birthdate: ${formData.birthdate} \n Agree to Terms: ${formData.agreeToTerms ? "Yes" : "No"}`);
    };

    return (
        <div className='w-auto h-auto bg-blue-500 py-7'>
            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">Registration Form</h2>

                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-800 font-medium">Full Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
                            placeholder="Enter your full name"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-6">
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

                    {/* Password */}
                    <div className="mb-6">
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

                    {/* Phone */}
                    <div className="mb-6">
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

                    {/* Age */}
                    <div className="mb-6">
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

                    {/* Gender */}
                    <div className="mb-6">
                        <label className="block text-gray-800 font-medium">Gender:</label>
                        <div className="flex items-center space-x-6">
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === 'male'}
                                    onChange={handleChange}
                                    className="mr-2 text-indigo-500"
                                />
                                Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === 'female'}
                                    onChange={handleChange}
                                    className="mr-2 text-indigo-500"
                                />
                                Female
                            </label>
                        </div>
                    </div>

                    {/* Multiple Choice Checkbox: Preferences */}
                    <div className="mb-6">
                        <label className="block text-gray-800 font-medium">Preferences:</label>
                        <div className="flex items-center space-x-4">
                            <label>
                                <input
                                    type="checkbox"
                                    name="preferences"
                                    value="emailUpdates"
                                    checked={formData.preferences.includes('emailUpdates')}
                                    onChange={handleChange}
                                    className="mr-2 text-indigo-500"
                                />
                                Email Updates
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="preferences"
                                    value="newsletter"
                                    checked={formData.preferences.includes('newsletter')}
                                    onChange={handleChange}
                                    className="mr-2 text-indigo-500"
                                />
                                Newsletter
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="preferences"
                                    value="specialOffers"
                                    checked={formData.preferences.includes('specialOffers')}
                                    onChange={handleChange}
                                    className="mr-2 text-indigo-500"
                                />
                                Special Offers
                            </label>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="mb-6">
                        <label htmlFor="bio" className="block text-gray-800 font-medium">Bio:</label>
                        <textarea
                            id="bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
                            placeholder="Tell us a bit about yourself"
                        />
                    </div>

                    {/* Birthdate */}
                    <div className="mb-6">
                        <label htmlFor="birthdate" className="block text-gray-800 font-medium">Birthdate:</label>
                        <input
                            type="date"
                            id="birthdate"
                            name="birthdate"
                            value={formData.birthdate}
                            onChange={handleChange}
                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
                        />
                    </div>

                    {/* Terms Agreement */}
                    <div className="mb-6 flex items-center">
                        <input
                            type="checkbox"
                            id="agreeToTerms"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            className="mr-2 text-indigo-500"
                        />
                        <label htmlFor="agreeToTerms" className="text-gray-800">
                            I agree to the <span className="text-blue-500">terms and conditions</span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full p-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;