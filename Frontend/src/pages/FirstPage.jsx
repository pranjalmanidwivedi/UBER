import React from 'react'
import { Link } from 'react-router-dom'

const firstPage = () => {
  return (
    <div>
      <div className='bg-cover bg-cdnter bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 w-full flex justify-between flex-col bg-red-400'>
      <img className='w-16 ml-8' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" /> 
      <div className='bg-white pb-7 py-4 px-4'>
        <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
        <Link to={'/user-login'} className='flex justify-center items-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
      </div>
    </div>
    </div>
  )
}

export default firstPage