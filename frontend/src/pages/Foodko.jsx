import React from 'react'
import Sidebar from '../Component/Sidebar'
import OrderList from '../Component/OrderList'



function Foodko() {
  return (
    <div className='flex space-x-5 bg-gray-200'>
      <Sidebar/>
      <div className=''>
      <OrderList/>
     
      </div>
      
    </div>
  )
}

export default Foodko
