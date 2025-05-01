'use client'
import React from 'react'
import Image from 'next/image'

import game from '@/assets/game1.avif'
import game2 from '@/assets/game2.webp'
import game3 from '@/assets/game3.avif'
import game4 from '@/assets/game4.webp'
import game5 from '@/assets/game5.webp'
import game6 from '@/assets/game6.jpg'
import game7 from '@/assets/game7.jpeg'
import game8 from '@/assets/game8.avif'
import game9 from '@/assets/game9.avif'
import game10 from '@/assets/game10.avif'
import game11 from '@/assets/game11.avif'
import game12 from '@/assets/game12.avif'
import game13 from '@/assets/game13.avif'
import game14 from '@/assets/game14.avif'
import game15 from '@/assets/game15.avif'
import game16 from '@/assets/game16.avif'
import game17 from '@/assets/game17.avif'
import game18 from '@/assets/game18.avif'


import d from '@/assets/d.avif'
import e from '@/assets/e.jpg'
import a from '@/assets/a.jpg'
import g from '@/assets/g.avif'
import h from '@/assets/h.avif'
import k from '@/assets/k.avif'
import m from '@/assets/m.avif'
import m2 from '@/assets/m2.avif'
import p from '@/assets/p.avif'
import s from '@/assets/s.webp'
import t from '@/assets/t.webp'

import { motion } from 'motion/react'

const AutoScroll = () => {
  return (
    <div
        className='px-2 lg:px-10 flex flex-col gap-5 lg:gap-10'>
        
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1, delay: 0.5 }}  
            viewport={{ once: true }} 
            
            className='flex items-center gap-5 overflow-x-auto scrollbar-hide'>
            <Image src={game} alt='game' className='rounded-md shrink-0 h-[100px] w-fit cursor-pointer hover:scale-105 transition-all ease-in-out duration-300' />
            <Image src={game2} alt='game' className='rounded-md shrink-0 h-[100px] w-fit cursor-pointer hover:scale-105 transition-all ease-in-out duration-300' />
            <Image src={game3} alt='game' className='rounded-md shrink-0 h-[100px] w-fit cursor-pointer hover:scale-105 transition-all ease-in-out duration-300' />
            <Image src={game4} alt='game' className='rounded-md shrink-0 h-[100px] w-fit cursor-pointer hover:scale-105 transition-all ease-in-out duration-300' />
            <Image src={game5} alt='game' className='rounded-md shrink-0 h-[100px] w-fit cursor-pointer hover:scale-105 transition-all ease-in-out duration-300' />
            <Image src={game6} alt='game' className='rounded-md shrink-0 h-[100px] w-fit cursor-pointer hover:scale-105 transition-all ease-in-out duration-300' />
            <Image src={game7} alt='game' className='rounded-md shrink-0 h-[100px] w-fit cursor-pointer hover:scale-105 transition-all ease-in-out duration-300' />
            <Image src={game8} alt='game' className='rounded-md shrink-0 h-[100px] w-fit cursor-pointer hover:scale-105 transition-all ease-in-out duration-300' />
            <Image src={game9} alt='game' className='rounded-md shrink-0 h-[100px] w-fit cursor-pointer hover:scale-105 transition-all ease-in-out duration-300' />
            <Image src={game10} alt='game' className='rounded-md shrink-0 h-[100px] w-fit cursor-pointer hover:scale-105 transition-all ease-in-out duration-300' />
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1, delay: 0.5 }}  
            viewport={{ once: true }} 
            className='flex flex-col gap-5'>
            <h2 className='text-xl'>Lite</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 items-center gap-5 flex-wrap'>
                <Image src={d} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={g} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={h} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={k} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={m} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={m2} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={p} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={t} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={a} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={e} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={s} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
            </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1, delay: 0.5 }}  
            viewport={{ once: true }} 
            className='flex flex-col gap-5'>
            <h2 className='text-xl'>Easter Fieggsta</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 items-center gap-5 flex-wrap'>
                <Image src={game} alt='game'  className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={game2} alt='game'  className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={game3} alt='game'  className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={game4} alt='game'  className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={game5} alt='game'  className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={game6} alt='game'  className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
            </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1, delay: 0.5 }}  
            viewport={{ once: true }} 
            className='flex flex-col gap-5'>
            <h2 className='text-xl'>Crash</h2>
            <div className='flex items-center gap-5 overflow-x-auto scrollbar-hide'>
                <Image src={game7} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={game8} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={game9} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={game10} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={game11} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={game12} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
            </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1, delay: 0.5 }}  
            viewport={{ once: true }} 
            className='flex flex-col gap-5'>
            <h2 className='text-xl'>Evolution</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 items-center gap-5 flex-wrap'>
                <Image src={game13} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={game14} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={game15} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={game16} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={game17} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
                <Image src={game18} alt='game' className='rounded-md shrink-0 h-[100px] lg:h-[150px]  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 flex-1' />
            </div>
        </motion.div>
    </div>
  )
}

export default AutoScroll