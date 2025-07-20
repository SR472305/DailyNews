import React from 'react';
import Homeslider from '../Component/Homeslider';
import News from './News';
import About from './About';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="bg-white text-gray-800">

      
      <section className=" flex flex-col items-center justify-center text-center py-40 bg-gray-100 ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to <span className="text-blue-600">Newsly</span></h1>
        <p className="text-lg md:text-xl text-gray-600">Your trusted source for daily news updates</p>
      </section>

     
      <div className="flex justify-center py-10">
        <img 
          src="./src/photo/home page.avif" 
          alt="Newsly Home" 
          className="w-full max-w-4xl rounded-xl shadow-md object-cover md"
        />
      </div>

    
      <div className="px-4 md:px-10 lg:px-20 space-y-20">
        <News />
        <About />
        <Contact />
      </div>
      
    </div>
  );
};

export default Home;
