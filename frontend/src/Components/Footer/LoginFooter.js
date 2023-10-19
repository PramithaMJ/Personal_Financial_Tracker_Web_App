import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaInstagram, FaGit } from 'react-icons/fa';

const About = () => {
  const location = useLocation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  const isDashboard = location.pathname === '/';

  return (
    <section className="bg-blue-100 py-16 ">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">About Personal Finance Tracker</h1>
        <p className="text-lg text-blue-800 mb-8">
          Welcome to our Personal Finance Tracker application. We are here to help you manage your finances effectively and reach your financial goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">Our Mission</h2>
            <p className="text-blue-800">
              Our mission is to empower individuals to take control of their financial future by providing easy-to-use tools for tracking expenses, setting budgets, and saving for what matters most.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">Why Choose Us?</h2>
            <p className="text-blue-800">
              We believe in simplicity and convenience. Our application is designed to be user-friendly, with powerful features to assist you in making informed financial decisions.
            </p>
          </div>
        </div>
        <div className="mt-4">
          {isDashboard ? (
            <button
              className="bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded inline-block"
              onClick={scrollToTop}
            >
              Return to Top
            </button>
          ) : (
            <Link to="/" className="bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded inline-block">
              Return to Dashboard
            </Link>
          )}
        </div>
        <div className="mt-4">
          <Link to="/GettingStarted" className="bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded inline-block">
            getting started
          </Link>
        </div>

        <div className="mt-8 flex items-center">
          <a href="pramitha-app-store-link" target="_blank" rel="noopener noreferrer">
            <img
              src="https://sony.scene7.com/is/image/sonyglobalsolutions/feature8-2-2?$ColumnStatic$&fmt=png-alpha"
              alt="App Store"
              className="w-50 h-10 mr-4"
            />
          </a>
          <a href="pramitha-play-store-link" target="_blank" rel="noopener noreferrer">
            <img
              src="https://miro.medium.com/v2/resize:fit:646/1*25shocQfPc2XMeHnrP27Vw.png"
              alt="Play Store"
              className="w-50 h-20 mr-4"
            />
          </a>
          <a href="https://web.facebook.com/Pramitha.ayasooriya/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-500 text-2xl mr-4" />
          </a>
          <a href="https://github.com/PramithaMJ/">
            <FaGit className="text-blue-500 text-2xl mr-4" />
          </a>
          <a href="pramitha-instagram-link" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-blue-500 text-2xl mr-4" />
          </a>
          <a href="https://www.linkedin.com/in/pramitha-jayasooriya-8b710b1b0/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-500 text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
