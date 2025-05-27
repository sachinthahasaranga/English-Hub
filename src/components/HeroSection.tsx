import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Text */}
      <div className="md:w-1/2 text-center md:text-left animate-fade-in relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Empowering Kids with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            English Hub
          </span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl">
          An AI-driven LMS feature for grades 10–12 — blending interactive listening exercises with a smart chatbot to boost comprehension and personalized learning
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#objectives"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore Features
            <FaArrowRight className="ml-2" />
          </a>
          {/* <button
            className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-blue-600"
          >
            <FaPlay className="mr-2" />
            Watch Demo
          </button> */}
        </div>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex justify-center animate-fade-in relative z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
          <img
            src="https://cdn.firstcry.com/education/2022/12/11101254/Parts-Of-A-Computer-For-Kids.jpg"
            alt="ArticuLearn illustration"
            className="max-h-[28rem] w-auto rounded-2xl shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
