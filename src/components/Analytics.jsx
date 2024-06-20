import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="text-center flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYITCS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl py-2">
            Manage Data Analyitcs Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore et
            tempora deserunt dolore eveniet? Nesciunt quibusdam ducimus corrupti
            molestiae aspernatur. Quibusdam eius assumenda, nam ipsum quisquam
            aliquam autem illo asperiores?
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
