import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'

const DashBoard = () => {
  const authContext=useAuth()
  const navigate=useNavigate()
  const goToMainDashBoard=()=>{
    if(authContext.isAuthenticated){
      navigate(`/welcome/:username/createQuiz`)
    }else{
      navigate(`/login`)
    }
  }
  return (
   <div>
     <div className='h-96 bg-mainColor'>
        <div className='md:flex justify-center '>
            <h1 className='text-stringColor mt-16 font-semibold md:font-bold text-5xl mt-20 '>Free  Quiz Service</h1>
            <h1 className='text-white mt-16 mx-4 font-semibold md:font-bold text-5xl mt-20 '>For Institutions</h1>
        </div>
        <div className='mt-5'>
            <h5 className='text-white font-semibold'>
            Make a quiz with different question types to engage students in a classroom, train employees at work, or play trivia with friends.
            </h5>
        </div>

        <div className='mt-20'>
        <button class="bg-stringColor hover:bg-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={goToMainDashBoard}>
  <span>Create Quiz</span>
</button>
        </div>

        <div className='mt-12'>
            <h4 className='font-semibold text-base text-white'>Used by most of Institutions across India and World</h4>
        </div>

</div>
<div className='flex justify-center mt-8'>
<h4 className='font-bold text-2xl text-mainColor'>
    Make your own Quiz
</h4>
<h4 className='mx-2 font-bold text-2xl text-hover'>
with CodeSite
</h4>

</div>
<div>
<h6 className='mt-6 font-semibold mx-16'>
Quickly and easily create interactive online quizzes for free! With Quizizz, you can create a quiz that boosts engagement and participation with just a few clicks. Whether you’re looking to create a homework assignment for Math class, or an ice breaker to welcome new faces, there’s something here for everyone.
</h6>
</div>
   </div>
  )
}

export default DashBoard
