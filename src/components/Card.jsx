import React from 'react'

const Card = () => {

  const data = [
    {image: 'https://plus.unsplash.com/premium_photo-1661630837719-86816b076cb0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,name :'Chemistry Teacher' ,description : 'Visit Me'},
    {image: 'https://plus.unsplash.com/premium_photo-1683134169138-9037062cba51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHx0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D' , name :'English Teacher' , description :'Visit Me'},
    {image : 'https://images.unsplash.com/photo-1691607596037-5c6597b1d99a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUyfHx0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D' , name :'Hindi Teacher', description :'Visit Me'},
    {image: 'https://plus.unsplash.com/premium_photo-1661630441144-ed00f4e667f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHx0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D' ,name :'Chemistry Teacher' ,description : 'Visit Me'},
    {image: 'https://plus.unsplash.com/premium_photo-1682089789852-e3023ff6df24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHx0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D' , name :'English Teacher' , description :'Visit Me'},
    {image : 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA4fHx0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D' , name :'Biology Teacher', description :'Visit Me'},
    {image: 'https://images.unsplash.com/photo-1696603865152-74514c198a07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEwfHx0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D' ,name :'Physics Teacher' ,description : 'Visit Me'},
    {image: 'https://plus.unsplash.com/premium_photo-1661964144407-2a1a9cfbbaf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA5fHx0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D' , name :'Chemistry Teacher' , description :'Visit Me'},
    {image : 'https://plus.unsplash.com/premium_photo-1661963502826-a0ccb55196fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM3fHx0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D' , name :'Maths Teacher', description :'Visit Me'},
    {image: 'https://images.unsplash.com/photo-1543430720-fa600c67e423?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU2fHx0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D' ,name :'Maths Teacher' ,description : 'Visit Me'},
    {image: 'https://images.unsplash.com/photo-1631203928493-a4e4eb2b8da1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY4fHx0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D' , name :'English Teacher' , description :'Visit Me'},
    {image : 'https://images.unsplash.com/photo-1565598469107-2bd14ae7e7e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjYzfHx0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D' , name :'Maths Teacher', description :'Visit Me'}
  ]
    return (
    <div className='gap-8 grid grid-cols-4 w-full bg-violet-400 flex-1 justify-center items-center  p-14'> 
        {data.map((elem , index) =>(<div className='w-65 bg-zinc-100 rounded-md  overflow-hidden'>
            <div key={index} className='w-full h-32 bg-zinc-400'>
              <img className='w-full h-full object-center' src={elem.image} />
            </div>
                <div className='w-full px-3 py-4'>
                    <h1 className='font-semibold'>{elem.name}</h1>
                    <button className='text-black mt-2 px-4 py-1 bg-blue-100 rounded-full text-sm'>
                    {elem.description}</button>
                </div>
        </div>))}
      
    </div>
  )
}

export default Card
