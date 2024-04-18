
import { IconArrowLeft } from '@tabler/icons-react'
import React from 'react'

function Group2() {
  return (
    <div className='w-[375px] h-[812px]'>
        
        <div>
            <IconArrowLeft />
            <p className='flex justify-center font-sans text-sm mb-2'>Order preview</p>
        </div>
        <div>
        <p className="font-abel font-normal flex justify-center text-center py-12">
            <span className='text-[#2752E7] text-[28px]'>8.52889997 MATIC</span></p>
        </div>
        
        <div className="absolute left-6 top-[180px] w-[327px] h-[358px] gap-48 bg-white text-[#1f1f1f] flex justify-stretch">
            <p className="px-4 font-sans mt-1 label text-sm ">Matic price</p>
            <p className=" mt-1 value font-sans text-[#707070] ">SGD 2.17</p>
            <p className="label text-sm py-16 font-sans -translate-x-[880%]" >Payment method</p>
            <p className="value text-sm font-sans py-16 -translate-x-[1560%] text-[#707070]">Dbs Bank Ltd</p>
            <p className="label text-sm font-sans py-32 -translate-x-[1690%]">Purchase</p>
            <p className="value text-sm font-sans py-32 -translate-x-[2828%] text-[#707070]">SGD 18.51</p>
            <p className="label  text-sm font-sans py-44 -translate-x-[2480%]">Coinbase fee</p>
            <p className="value text-sm font-sans py-44 -translate-x-[5250%] text-[#707070]">SGD 1.49</p>
            <p className="label text-sm font-sans py-56 text-[#707070] -translate-x-[3680%]" >Includes taxes</p>
            <p className="label text-sm font-sans py-[275px] -translate-x-[7201%]">Total</p>
            <p className="value text-sm font-sans py-[263px] -translate-x-[6300%]  text-[#707070]">SGD 20.00</p>
        </div>
        <div>
            <p className='p-4 text-sans text-[#707070] text-sm py-[345px]'>Processed by <span className='text-[#2752E7]'>Coinbase UK, Lrd.</span></p>
            <p className='p-4 text-sans text-[#707070] text-sm -translate-y-[700%]'>Crypto markets are unique. <span className='text-[#2752E7]'> Learn more</span></p>
            <button type="submit" className="px-20   flex justify-center items-center rounded-lg -translate-y-[660%] translate-x-[35%] bg-blue-500 p-4 gap-4 w-327 h-58 bg-primary-100 rounded-8 font-sans">Buy now</button>
        </div>
        
        

      
    </div>
  )
}

export default Group2
