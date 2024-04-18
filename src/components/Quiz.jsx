import React from 'react'
import { motion, useDragControls } from "framer-motion"

function Quiz() {
  return (
    <motion.div drag  className='relative ml-3 mt-5 w-60 h-72 bg-zinc-900 rounded-[50px] text-white overflow-hidden '>
        <p className=' text-center text-lg bg-purple-600'>Excel</p>
        <img className='w-full h-fit' src='https://img.freepik.com/free-vector/purple-background-with-quiz-word-colorful-people_52683-126.jpg?w=740'></img>
        <div className='absolute bottom-0 h-12 bg-purple-700 w-full text-center'> 
        <button className='px-4 py-1 mt-2 rounded-full bg-zinc-100/50'>Quiz Time</button></div>
        
    </motion.div>   
  )
}

export default Quiz
