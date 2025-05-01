'use client'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    GlobeAltIcon,
} from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { motion } from 'motion/react'

const Footer = () => {
    const [toggle, setToggle] = useState(false)
    const [toggle1, setToggle1] = useState(false)
  return (
    <div className=' flex flex-col gap-5'>
        <div className='p-2 lg:p-10 flex flex-col gap-5'>
            <h2>Casino</h2>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                transition={{ duration: 1, delay: 0.5 }}  
                viewport={{ once: true }}  
                className='bg-white shadow-md rounded-md p-5 transition-all ease-in-out duration-300 flex flex-col gap-16'>
                <div onClick={() => setToggle(prev => !prev)} className='flex justify-between items-center cursor-pointer'>
                    <h3>What is Moolah Casino</h3>
                    <ChevronDownIcon className='h-4 w-4' />
                </div>
                {toggle && (
                    <p className='text-sm  transition-all ease-in-out duration-300'>
                        Moolah Casino is a leading online casino platform, giving you access to a whole host of games and online gambling opportunities. We offer a range of excellent slot games, classic table games, and immersive live dealer experiences from the leading software developers.
                        <br /> <br />
                        When you create an account at Moolah, you’ll get excellent entertainment value as you enjoy our extensive library of games. And because we like to look after our players, there is extensive customer support available should you ever have any questions. Create your account today.
                    </p>
                )}
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                transition={{ duration: 1, delay: 0.5 }}  
                viewport={{ once: true }}  
                className='bg-white shadow-md rounded-md p-5 transition-all ease-in-out duration-300 flex flex-col gap-16'>
                <div onClick={() => setToggle1(prev => !prev)} className='flex justify-between items-center cursor-pointer'>
                    <h3>Do Moolah Casino gaes use RNG?</h3>
                    <ChevronDownIcon className='h-4 w-4' />
                </div>
                {toggle1 && (
                    <p className='text-sm  transition-all ease-in-out duration-300'>
                    Yes, all of the games available on our platform use random number generators (RNG) to ensure you have a fair chance of winning when playing our leading slot titles, classic table games, and live dealer experiences. Like the look of our slot game jackpots? Someone’s got to win them, and you have a fair chance, thanks to our random number generators.

                        <br /> <br />
                        The random nature of so many games is what makes them, so exciting – you never quite know what’s going to happen!
                    </p>
                )}
            </motion.div>


            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                transition={{ duration: 1, delay: 0.5 }}  
                viewport={{ once: true }} 
                className='bg-white shadow-md rounded-md p-5 transition-all ease-in-out duration-300 flex flex-col gap-16'>
                <div onClick={() => setToggle1(prev => !prev)} className='flex justify-between items-center cursor-pointer'>
                    <h3>Does the casino work on mobile?</h3>
                    <ChevronDownIcon className='h-4 w-4' />
                </div>
                {toggle1 && (
                    <p className='text-sm  transition-all ease-in-out duration-300'>
                    You can play BetKing Casino games on the go because they are all made for mobile gameplay. Our extensive list of games has been optimised for all devices, meaning you can enjoy an immersive and enjoyable online casino experience no matter where you are.

                        <br /> <br />
                        To play on mobile, you need to connect to a stable internet connection. If you don’t want the games to use much data, consider playing our Lite and Extra Lite game titles when you’re using your mobile.
                    </p>
                )}
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                transition={{ duration: 1, delay: 0.5 }}  
                viewport={{ once: true }}  
                className='bg-white shadow-md rounded-md p-5 transition-all ease-in-out duration-300 flex flex-col gap-16'>
                <div onClick={() => setToggle1(prev => !prev)} className='flex justify-between items-center cursor-pointer'>
                    <h3>How do i add funds to y Moolah Casion account?</h3>
                    <ChevronDownIcon className='h-4 w-4' />
                </div>
                {toggle1 && (
                    <p className='text-sm  transition-all ease-in-out duration-300'>
                    We make it extremely easy to get started at BetKing Casino, offering you multiple deposit options to add funds to your account. Once you have created an account, go to the “Deposit” option on our platform and decide how much money you wish to deposit.

                        <br /> <br />
                        We accept various deposit methods, including bank transfers, debit cards, and several e-wallets, depending on the best method for you.
                    </p>
                )}
            </motion.div>
        </div>

        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                
                {/* Company Info */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">Moolah</h2>
                    <p className="text-sm leading-6">
                    Building modern solutions for real-world problems. We're focused on speed, simplicity, and value.
                    </p>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-medium text-white mb-4">Contact</h3>
                    <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                        <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                        support@oolah.com
                    </li>
                    <li className="flex items-center gap-2">
                        <PhoneIcon className="h-5 w-5 text-gray-400" />
                        +1 (234) 567-8901
                    </li>
                    <li className="flex items-center gap-2">
                        <MapPinIcon className="h-5 w-5 text-gray-400" />
                        123 Innovation Street, NY
                    </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                    <li className="hover:text-white cursor-pointer">About Us</li>
                    <li className="hover:text-white cursor-pointer">Services</li>
                    <li className="hover:text-white cursor-pointer">Careers</li>
                    <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                    </ul>
                </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
                <span>&copy; {new Date().getFullYear()} Moolah. All rights reserved.</span>
                <span className="flex items-center gap-2 mt-4 md:mt-0">
                    <GlobeAltIcon className="h-5 w-5 text-gray-400" />
                    www.moolah.com
                </span>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer