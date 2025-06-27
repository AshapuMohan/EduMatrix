import React from 'react'

const About = () => {
  return (
    <div>
        <div className="flex flex-col items-center bg-gray-100 h-[84vh]">
            <div className="w-full bg-blue-500 text-white p-6 text-center">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="mt-2 text-lg">Empowering your learning journey with expert-led courses.</p>
            </div>
            <div className="w-full max-w-4xl mx-auto p-6">
                <h2 className="text-2xl font-semibold mt-6">Our Mission</h2>
                <p className="mt-2 text-gray-700">
                    We aim to provide high-quality, accessible education that empowers individuals to achieve their career goals.
                </p>
                <h2 className="text-2xl font-semibold mt-6">Our Team</h2>
                <p className="mt-2 text-gray-700">
                    Our team consists of industry experts and educators dedicated to delivering the best learning experience.
                </p>
                <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
                <p className="mt-2 text-gray-700">
                    For inquiries, please reach out to us at <a href="mailto:ashapumohan123@gmail.com" className="text-blue-500"/>
                </p>
            </div>
        </div>
    </div>
  )
}

export default About