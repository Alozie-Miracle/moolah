'use client'
import React from 'react'
import { Button } from './ui/button'
import { motion } from "motion/react"

const Navbar = () => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }} 
        className='flex items-center justify-between py-3 bg-blue-950 text-white px-2 lg:px-10 sticky top-0 z-50'>
        <h2 className='font-extrabold text-xl'>Moolah</h2>

        <div className='lg:flex items-center gap-6 text-gray-400 text-sm font-semibold hidden'>
          <p className='cursor-pointer hover:text-white'>SPORTS</p>
          <p className='cursor-pointer hover:text-white'>VIRTAULS</p>
          <p className='cursor-pointer hover:text-white'>CASINO</p>
          <p className='cursor-pointer hover:text-white'>PROMOS</p>
          <p className='cursor-pointer hover:text-white'>PICK 11</p>
          <p className='cursor-pointer hover:text-white'>APP</p>
          <p className='cursor-pointer hover:text-white'>BLOG</p>
        </div>

        <div className='flex items-center gap-5'>
          <Button className='bg-transparent cursor-pointer hover:bg-transparent'>LOGIN</Button>
          <Button className='cursor-pointer bg-indigo-800'>JOIN</Button>
        </div>
    </motion.div>
  )
}

export default Navbar