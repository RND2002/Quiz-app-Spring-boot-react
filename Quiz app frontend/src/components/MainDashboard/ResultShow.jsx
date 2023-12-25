
import React from 'react'
import { Link } from 'react-router-dom'

const ResultShow = ({marks}) => {
  
  return (
    <div className='mt-12'>
     {/* <div className='mt-12 h-48 w-48 bg-mainColor'>
     <div className=''>
      <h2>Your Quiz has been submitted successfully</h2>
        <p>Your Score is {marks}</p>
    </div>
    </div> */}
    <div class="max-w-md mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 bg-stringColor">
    <div class="md:flex">
        <div class="md:flex-shrink-0">
        
        </div>
        <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">You got {marks} marks</div>
        <p class="block mt-1 text-lg leading-tight font-medium text-black">Event Description</p>
        <button
        className="bg-mainColor hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8"
        
      >
        
        <Link to='/welcome/:username'>Dashboard</Link>
      </button>
        </div>
    </div>
    </div>
     </div>
  )
}

export default ResultShow

