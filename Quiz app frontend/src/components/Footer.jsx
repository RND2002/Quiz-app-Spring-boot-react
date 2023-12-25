import React from 'react'
import {BsGithub} from 'react-icons/bs'

import {AiFillLinkedin} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
        <div className='h-48 bg-hover mt-48' >
      <div className=''>
        <h3 className=' mt-12 font-bold'><center><a href='mailto:codesite81@gmail.com'>Found an issue with this page? Review here</a></center></h3>
       <center><h3 className='font-bold'>Need any Service?</h3><a href='mailto:codesite81@gmail.com'> <h3 className='font-bold text-wt'>Email me </h3></a></center>
      </div>
      <div className='flex justify-center align-middle'>
        <div className='p-2'><a href='https://github.com/RND2002?tab=repositories'><BsGithub size={40}/></a></div>
      <div className='p-2'><a href='https://www.linkedin.com/in/aryan-dwivedi-33832b229/'><AiFillLinkedin size={40}/></a></div>
      <div className='p-2'><a href='https://www.instagram.com/codesite81'><BsInstagram size={40}/></a></div>


      </div>
      <div className='flex justify-center align-middle'><p className='font-semibold'>&copy; 2023 Codesite. All rights reserved.</p></div>
    </div>
    </div>
  )
}

export default Footer
