import React from 'react'
import Man from '../../Images/man.jpg'

const Profile = () => {
 return (
   <div className='xl:flex lg:flex xl:justify-between h-56 lg:h-auto border-b-2 sm:border-b-0 ms:border-b-0 mx:border-b-0 md:border-b-0  border-gray-200'>
     <div className='flex p-4'>
       <div>
         <img src={Man} alt='' className=' h-36 rounded-full' />
       </div>
       <div className='p-4 text-gray-500 sm:p-2'>
         <h1 className='font-bold text-black'>Maciej Zackoscheiny, 39 , M</h1>
         <h2>Pomorska, 55/9, Wroclaw</h2>
         <h2>Poland</h2>
         <div className='flex flex-row sm:flex-col ms:flex-col lg:flex-col'>
           <h2>03/06/1956</h2>
           <h2 className='ml-2 sm:m-0 ms:m-0 lg:m-0'>+49 7736 7898</h2>
           <h2 className='ml-2 sm:m-0 ms:m-0 lg:m-0'>maciejz@gmail.com</h2>
         </div>
         <div className='flex flex-row'>
           <h1 className='text-blue-600 border-white rounded-md p-1 w-auto hover:bg-blue-200 cursor-pointer'>
             Allergies
           </h1>
           <h1 className='text-blue-600 border-white rounded-md p-1 w-auto hover:bg-blue-200 cursor-pointer'>
             Billing
           </h1>
         </div>
       </div>
     </div>
     <div className='pt-4 flex flex-row sm:hidden ms:hidden  '>
       <div className='border border-yellow-500 w-36 mx:w-32 p-2 m-2 rounded-md bg-yellow-300'>
         <h2>-wt: 22/02/2020</h2>
         <h2>140lbs</h2>
         <h2>-PCP: Elijah Manning</h2>
         <h2>-Lang: English</h2>
         <h2>-Trans: No</h2>
       </div>
       <div className='border border-green-500 w-36 mx:w-32 p-2 m-2 rounded-md bg-green-400'>
         <h2>Ins: Medical B</h2>
         <h2>Account: $3332</h2>

         <h2>Ref Barret Movig</h2>
       </div>
       <div className='border border-blue-500 w-36 mx:w-32 p-2 m-2 rounded-md bg-blue-500'>
         <h2>Very Talkative</h2>
       </div>
       <div className='border border-pink-500 w-36  mx:w-32 p-2 m-2 rounded-md bg-pink-400'>
         <h2>Had a panic attack reently</h2>
       </div>
     </div>
   </div>
 );
}

export default Profile
