import React from 'react'
import Sidebar  from './Sidebar/Sidebar'
import Profile from './Profilepage/Profile'
import Tabs from './Tabs/Tabs'
import Medicals from './Medicals/Medicals'

const Dashboard = () => {
 return (
   <>
     <div className='flex flex-row'>
       <Sidebar />
       <div>
         <Profile />
         <Tabs  />
         <Medicals />
       </div>
     </div>
   </>
 );
}

export default Dashboard
