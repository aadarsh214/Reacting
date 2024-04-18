import React from 'react'
import Quiz from './Quiz'

function Foreground() {
  return (
    <div className='fixed z-[3] top-0 left-0 w-full h-full bg-zinc-700/50'>
        <Quiz />
    </div>
  )
}

export default Foreground
