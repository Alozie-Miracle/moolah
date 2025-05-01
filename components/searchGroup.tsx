'use client'
import { AdjustmentsHorizontalIcon, BanknotesIcon, BriefcaseIcon, CreditCardIcon, CurrencyDollarIcon, FireIcon, HandThumbUpIcon, MagnifyingGlassIcon, PlusIcon, RectangleStackIcon, RocketLaunchIcon, SparklesIcon, UserIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { motion } from "motion/react"

const SearchGroup = () => {
  return (
    <motion.div 
        initial={{ x: 100 }}
        whileInView={{ x: 0}}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }} 
        className='p-2 lg:p-3 lg:px-5 lg:flex items-center gap-2 lg:gap-5 justify-center text-center text-gray-800 text-xs lg:max-w-fit w-full lg:mx-auto overflow-x-auto scrollbar-hide hidden'>
        <div className='flex flex-col items-center justify-center cursor-pointer bg-white rounded-md p-2 shadow-sm shrink-0 w-fit'>
            <MagnifyingGlassIcon className='h-5 w-5' />
            <p>Search</p>
        </div>
        <div className='flex flex-col items-center justify-center cursor-pointer bg-white rounded-md p-2 shadow-sm shrink-0 w-fit'>
            <PlusIcon className='h-5 w-5' />
            <p>New</p>
        </div>
        <div className='flex flex-col items-center justify-center cursor-pointer bg-white rounded-md p-2 shadow-sm shrink-0 w-fit'>
            <BanknotesIcon className='h-5 w-5' />
            <p>Easter Fieggsta</p>
        </div>
        <div className='flex flex-col items-center justify-center cursor-pointer bg-white rounded-md p-2 shadow-sm shrink-0 w-fit'>
            <RocketLaunchIcon className='h-5 w-5' />
            <p>Crash</p>
        </div>
        <div className='flex flex-col items-center justify-center cursor-pointer bg-white rounded-md p-2 shadow-sm shrink-0 w-fit'>
            <FireIcon className='h-5 w-5' />
            <p>Popular</p>
        </div>
        <div className='flex flex-col items-center justify-center cursor-pointer bg-white rounded-md p-2 shadow-sm shrink-0 w-fit'>
            <AdjustmentsHorizontalIcon className='h-5 w-5' />
            <p>Slot</p>
        </div>
        <div className='flex flex-col items-center justify-center cursor-pointer bg-white rounded-md p-2 shadow-sm shrink-0 w-fit'>
            <BriefcaseIcon className='h-5 w-5' />
            <p>Evolution</p>
        </div>
        <div className='flex flex-col items-center justify-center cursor-pointer bg-white rounded-md p-2 shadow-sm shrink-0 w-fit'>
            <CurrencyDollarIcon className='h-5 w-5' />
            <p>Drops & Wins</p>
        </div>
        <div className='flex flex-col items-center justify-center cursor-pointer bg-white rounded-md p-2 shadow-sm shrink-0 w-fit'>
            <UserIcon className='h-5 w-5' />
            <p>Live</p>
        </div>
        <div className='flex flex-col items-center justify-center cursor-pointer bg-white rounded-md p-2 shadow-sm shrink-0 w-fit'>
            <CreditCardIcon className='h-5 w-5' />
            <p>Fast King</p>
        </div>
        <div className='flex flex-col items-center justify-center cursor-pointer bg-white rounded-md p-2 shadow-sm shrink-0 w-fit'>
            <RectangleStackIcon className='h-5 w-5' />
            <p>Tables</p>
        </div>
        <div className='flex flex-col items-center justify-center cursor-pointer bg-white rounded-md p-2 shadow-sm shrink-0 w-fit'>
            <SparklesIcon className='h-5 w-5' />
            <p>Instant</p>
        </div>
        <div className='flex flex-col items-center justify-center cursor-pointer bg-white rounded-md p-2 shadow-sm shrink-0 w-fit'>
            <HandThumbUpIcon className='h-5 w-5' />
            <p>Lite</p>
        </div>
    </motion.div>
  )
}

export default SearchGroup