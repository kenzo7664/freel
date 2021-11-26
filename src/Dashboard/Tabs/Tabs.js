import React from 'react'

const Tabs = () => {
 return (
   <div className='grid grid-cols-11 sm:gap-y-4 sm:grid-cols-2 ms:grid-cols-4 ms:gap-y-2 ms:mt-4 mx:mt-44 sm:mt-12 sm:p-10 p-4 md:grid-cols-5 mx:grid-cols-6 md:mt-48 lg:grid-cols-11 font-semibold text-gray-500  cursor-pointer h-16 border-b-2   border-gray-200 sm:border-b-0 ms:border-b-0 md:border-b-0 mx:border-b-0 shadow-lg sm:shadow-none ms:shadow-none md:shadow-none mx:shadow-none '>
     <h2 className='hover:text-blue-700 cursor-pointer hover:border-b-4 sm:w-20 border-blue-700'>
       Medical Summary
     </h2>
     <h2 className='hover:text-blue-700 hover:border-b-4  sm:w-20 border-blue-700'>
       CDSS
     </h2>
     <h2 className='hover:text-blue-700 hover:border-b-4 sm:w-20 border-blue-700'>
       Labs
     </h2>
     <h2 className='hover:text-blue-700 hover:border-b-4 sm:w-20 border-blue-700'>
       DI
     </h2>
     <h2 className='hover:text-blue-700 hover:border-b-4 sm:w-20 border-blue-700'>
       Growth Lab
     </h2>
     <h2 className='hover:text-blue-700 hover:border-b-4 sm:w-20 border-blue-700'>
       Imm
     </h2>
     <h2 className='hover:text-blue-700 hover:border-b-4 sm:w-20 border-blue-700'>
       T.inj
     </h2>
     <h2 className='hover:text-blue-700 hover:border-b-4 sm:w-20 border-blue-700'>
       Encounters
     </h2>
     <h2 className='hover:text-blue-700 hover:border-b-4 sm:w-20 border-blue-700'>
       Patients Docs
     </h2>
     <h2 className='hover:text-blue-700 hover:border-b-4  sm:w-20border-blue-700'>
       Flow sheets
     </h2>
     <h2 className='hover:text-blue-700 hover:border-b-4 sm:w-20 border-blue-700'>
       Notes
     </h2>
   </div>
 );
}

export default Tabs
