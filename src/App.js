import React from "react";
import { FaBars, FaTh } from "react-icons/fa";
import circle from '../src/Images/download.jpg'
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <div className='App'>
      <div className='flex justify-between p-4 border-b-2 sm:w-full border-gray-300'>
        <div className='flex flex-row m-1'>
          <FaBars className='m-1' />
          <h1 className='font-semibold'>Cleo EMR</h1>
        </div>
        <div className='flex flex-row m-1'>
          <FaTh className='m-1' />
          <img src={circle} alt='' className='w-7 h-auto rounded-3xl m-0.5' />
        </div>
      </div>
      <Dashboard />
    </div>
  );
}

export default App;
