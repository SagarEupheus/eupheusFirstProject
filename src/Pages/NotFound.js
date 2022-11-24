import React from 'react'
import './notfound.css'
import notfound from "../Assets/404.png"
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";


const NotFound = () => {
  return (
    <>
        <div class="img pt-10">
        <img src={notfound} alt="img..." className='w-100 h-100'/>
        <Link to="/" className='lg:top-[-100px] relative block text-[blue]'>  <AiOutlineArrowLeft className='inline-block mr-2 mb-[3px]'/>Back to Home</Link>
    </div>
    </>
  )
}

export default NotFound