import React from "react";

import heart from "../../Images/heart.png";
import drive from "../../Images/Drive.png";
import map from "../../Images/Map.png";
import Calendar from "../../Images/calender.png";
import Mail from "../../Images/mail.png";

const Sidebar = () => {
  return (
    <div className='w-28 border-r-2 h-full border-gray-200 rounded-t-md'>
      <div className=' border-2 border-white w-24 rounded-sm hover:bg-gray-100 cursor-pointer p-2 sm:mb-12 sm:mt-12 ms:mt-12 ms:mb-12 md:mt-12 md:mb-12'>
        <img src={heart} alt='' className='ml-5 w-7' />
        <h1 className='text-gray-500 text-center '>CleoEMR</h1>
      </div>
      <div className=' border-2 border-white w-24 rounded-md hover:bg-gray-100 cursor-pointer p-2 sm:mb-12 ms:mb-12 md:mb-12'>
        <img src={drive} alt='' className='ml-6 w-7' />
        <h1 className='text-gray-500 text-center'>Drive</h1>
      </div>
      <div className=' border-2 border-white w-24 rounded-md hover:bg-gray-100         cursor-pointer p-2 sm:mb-12 ms:mb-12 md:mb-12 '>
        <img src={map} alt='' className='ml-5 w-7' />
        <h1 className='text-gray-500 text-center'>Maps</h1>
      </div>
      <div className=' border-2 border-white w-24 rounded-md hover:bg-gray-100         cursor-pointer p-2 sm:mb-12 ms:mb-12 md:mb-12'>
        <img src={Calendar} alt='' className='ml-5 w-7' />
        <h1 className='text-gray-500 text-center'>Calendar</h1>
      </div>
      <div className=' border-2 border-white w-24 rounded-md hover:bg-gray-100         cursor-pointer p-2'>
        <img src={Mail} alt='' className='ml-6 w-7' />
        <h1 className='text-gray-500 text-center'>Mail</h1>
      </div>
    </div>
  );
};

export default Sidebar;
