import React from 'react'
import '../Medicals/medi.css'
import { FaSearch, FaBuffer } from "react-icons/fa";
import {
  BsDot,
  BsFillClockFill,
  BsBarChartFill,
  BsFillFlagFill,
} from "react-icons/bs";
import { IoIosAttach } from "react-icons/io";
import { BiStar,BiCheckboxSquare } from "react-icons/bi";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos,MdOutlineArrowDropUp,MdOutlineArrowDropDown} from "react-icons/md";
import { IconContext } from "react-icons";


const Medicals = () => {
 return (
   <div className="border-l-2 border-gray-200">
     <div className='m-4 flex flex-row justify-between sm:flex-col '>
       <div className='border border-white rounded-lg w-4/5 shadow-xl sm:mt-52'>
         <div className='flex justify-between p-4 border-b-2 border-gray-200 '>
           <h1 className='font-bold'>Maceij Zakoscielny, 39, M</h1>
           <div className='flex flex-row justify-evenly'>
             <h3 className='mr-2'>Status</h3>
             <label className='inline-flex items-center'>
               <input type='radio' />
               <span className='ml-2 mr-2'>Open</span>
             </label>
             <label className='inline-flex items-center'>
               <input type='radio' />
               <span className='ml-2'>Reviewed</span>
             </label>
           </div>
         </div>
         <div className='flex sm:flex-col '>
           <div>
             <div className='border border-gray-500 rounded-md flex flex-row p-2 w-auto m-4'>
               Provider
               <BsDot className='m-2' />
               <FaSearch className='m-2' />
               <label for='cars'></label>
               <select className='w-60'>
                 <option>Elijah Manning</option>
               </select>
             </div>
             <div className='border border-gray-500 rounded-md flex flex-row p-2 w-auto m-4'>
               Facility
               <BsDot className='m-2' />
               <FaSearch className='m-2' />
               <label for='cars'></label>
               <select className='w-60'>
                 <option>New Scot Clinic</option>
               </select>
             </div>
           </div>
           <div>
             <div className='border border-gray-500 rounded-md flex flex-row p-2 w-auto m-4'>
               Assigned
               <BsDot className='m-2' />
               <FaSearch className='m-2' />
               <label for='cars'></label>
               <select className='w-60'>
                 <option>New Scot Clinic</option>
               </select>
             </div>
             <div className='border border-gray-500 rounded-md flex flex-row p-2 w-auto m-4'>
               Laboratory
               <BsDot className='m-2' />
               <FaSearch className='m-2' />
               <label for='cars'></label>
               <select className='w-60'>
                 <option>Lipid Panel</option>
               </select>
             </div>
           </div>
           <BiStar className='mt-8' />
         </div>
         <div className='flex flex-row border-b-2 border-gray-200'>
           <div className='flex items-center ml-4'>
             <input
               id='radio1'
               type='radio'
               name='radio'
               className='hidden'
               checked
             />
             <label for='radio1' className='items-center cursor-pointer'>
               <span className='w-4 h-4 inline-block mr-1 border border-grey '></span>
               High Priority
             </label>
           </div>
           <div className=' items-center ml-4'>
             <input id='radio1' type='radio' name='radio' className='hidden' />
             <label for='radio1' className='items-center cursor-pointer'>
               <span className='w-4 h-4 inline-block mr-1 border border-grey'></span>
               Cancelled
             </label>
           </div>
           <div className=' items-center ml-4'>
             <input id='radio1' type='radio' name='radio' className='hidden' />
             <label for='radio1' className='items-center cursor-pointer'>
               <span className='w-4 h-4 inline-block mr-1 border border-grey'></span>
               Future Order
             </label>
           </div>
           <div className=' items-center ml-4'>
             <input id='radio1' type='radio' name='radio' className='hidden' />
             <label for='radio1' className='items-center cursor-pointer'>
               <span className='w-4 h-4 inline-block mr-1 border border-grey'></span>
               In House
             </label>
           </div>
         </div>
         <div className='bg-blue-50 '>
           <div className=' flex flex-row flex justify-evenly p-4'>
             <h1 className='flex flex-row border border-blue-50 p-2 rounded-md hover:bg-blue-200 hover:text-blue-500'>
               <FaBuffer className='m-1' />
               Order & Collections
             </h1>
             <h1 className='flex flex-row border border-blue-50 p-2 rounded-md hover:bg-blue-200 hover:text-blue-500'>
               <BsFillClockFill className='m-1' />
               Results
             </h1>
             <h1 className='flex flex-row border border-blue-50 p-2 rounded-md hover:bg-blue-200 hover:text-blue-500'>
               <IoIosAttach className='m-1' />
               Attachment
             </h1>
             <h1 className='flex flex-row border border-blue-50 p-2 rounded-md hover:bg-blue-200 hover:text-blue-500'>
               <BsBarChartFill className='m-1' />
               Graph
             </h1>
             <h1 className='flex flex-row border border-blue-50 p-2 rounded-md hover:bg-blue-200 hover:text-blue-500'>
               <BsFillFlagFill className='m-1' />
               Progress Report
             </h1>
           </div>
           <div className='bg-white ml-4 mr-4 rounded-md'>
             <div className='p-4 flex justify-between border-b-2 border-gray-200 ml-8 mr-8'>
               <h1>Order & Collection</h1>
               <h2 className='text-blue-500'>Edit details</h2>
             </div>
             <div className='flex border-b-2 border-gray-200 ml-8 mr-8'>
               <div className='p-4 '>
                 <h1 className='text-gray-400'>
                   Accession ID <span className='pl-2 text-black'>386749</span>
                 </h1>
                 <h1 className='text-gray-400'>
                   Order Date{" "}
                   <span className='pl-2 text-black'>23/02/2020</span>{" "}
                 </h1>
                 <h1 className='text-gray-400'>
                   Requesting Physician{" "}
                   <span className='pl-2 text-black'>Elijah Manning</span>
                 </h1>
               </div>
               <div className='p-4'>
                 <h1 className='text-gray-400'>
                   Reference ID <span className='pl-2 text-black'>XJM23</span>
                 </h1>
                 <h1 className='text-gray-400'>
                   Collection Date{" "}
                   <span className='pl-2 text-black'>01/03/2020</span>{" "}
                 </h1>
               </div>
             </div>
             <div className='p-4 flex justify-between  ml-8 mr-8'>
               <h1>Lipid Panel</h1>
             </div>
           </div>
         </div>
       </div>
       <div className='border border-white rounded-lg w-2/6 shadow-xl ml-4'>
       <div className='  border-b-2 border-gray-200'>
          <div className='grid  grid-cols-5  p-4 font-semibold text-gray-500  cursor-pointer    '>
            <h2 className='hover:text-blue-700 cursor-pointer hover:border-b-2 border-blue-700  '>
              Overview
            </h2>
            <h2 className='hover:text-blue-700 hover:border-b-2 border-blue-700 ml-4 '>
              DRTLM
            </h2>
            <h2 className='hover:text-blue-700 hover:border-b-2 border-blue-700 ml-4 '>
              History
            </h2>
            <div className ="flex justify-end pt-1">
            <MdOutlineArrowBackIosNew className="hover:bg-gray-300 cursor-pointer rounded-2xl" />
            < MdOutlineArrowForwardIos className="hover:bg-gray-300 cursor-pointer rounded-2xl" />
            </div>
            
            
          
          </div>
          
         </div>
         <h1 className="pt-2  pl-6 text-gray-400">Maceij Zakoscielny, 39, M as of 31/02/2020</h1>
         <div className="border border-white bg-blue-50 m-4 rounded-md ">
           <div className="pt-4 pl-4 pb-2  flex justify-between border-b-2 border-gray-300">
             <h1 className="font-bold">Global Alerts</h1>
             <MdOutlineArrowDropUp className="cursor-pointer" size={25}/>
           </div>
           <div className="flex p-4">
           <IconContext.Provider value={{ color: "#0000ff" }}>
           < BiCheckboxSquare className="" size={25} />
           </IconContext.Provider>
           <h1>Fasting</h1>
           </div>
         </div>
         <div className="flex justify-between pr-4">
          <h1 className="pt-2  pl-6 font-bold">CCM</h1>
          <h1 className="text-gray-400 flex pt-2">Time Completed:00:21 </h1>
          <MdOutlineArrowDropDown size={30} className="pt-1 cursor-pointer" />
         </div>
         <div className="border border-white bg-blue-50 m-4 rounded-md ">
           <div className="pt-4 pl-4 pb-2   flex justify-between border-b-2 border-gray-300">
             <h1 className="font-bold">Advanced Directives</h1>
             <MdOutlineArrowDropUp className="cursor-pointer" size={25} />
           </div>
           <div className="flex p-4">
           <IconContext.Provider value={{ color: "#0000ff" }}>
           < BiCheckboxSquare className="" size={25} />
           </IconContext.Provider>
           <h1>LW</h1>
           <h1 className="pl-6 text-gray-400">Living Will</h1>
           </div>
         </div>
         <div className="border border-white bg-blue-50 m-4 rounded-md ">
           <div className="pt-4 pl-4 pb-2   flex justify-between border-b-2 border-gray-300">
             <h1 className="font-bold">Problem List</h1>
             <MdOutlineArrowDropUp className="cursor-pointer" size={25} />
           </div>
           <div className="flex p-4">
           <IconContext.Provider value={{ color: "#0000ff" }}>
           < AiOutlinePlusSquare className="" size={20} />
           </IconContext.Provider>
           <h1 className="text-red-400 pl-4">9</h1>
           <h1 className="pl-4">498.2</h1>
           <h1 className="pl-6 text-gray-400">COPD</h1>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
}

export default Medicals
