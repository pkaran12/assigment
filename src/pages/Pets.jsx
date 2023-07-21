import React from 'react'
import Navbar from './Navbar'
import dog1 from '../images/dog1.png'
import dog2 from '../images/dog2.png'

const Pets = () => {
    return (
        <div>
        <section>
        <div className=' flex justify-center   bg-[#3a2f29]'>
            <div className='w-[70%]'>
              <div><Navbar /></div>
              <div className='grid grid-cols-2 gap-16 items-center'>
                <div className='flex flex-col gap-5'>
                    <p className='flex flex-col gap-2'>
                    <span className='text-5xl text-white font-medium'>Not only people </span>
                    <span className='text-5xl text-white font-medium'>need a house</span>
                    </p>
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius perferendis quos explicabo, odio ipsum corrupti aliquid suscipit, amet assumenda quia repellendus veritatis! Sunt, cumque. Deleniti alias eaque repellendus deserunt impedit!</p>
                    <button className='bg-[#f2d2bd] w-[30%] p-3 rounded-3xl'>Make a friend</button>
                </div>
                <div>
                    <img className='w-[100%]' src={dog1} />
                </div>
              </div>
            </div>
        </div>
        </section>
        <section className='bg-[#ffff] flex justify-center'>
            <div className='w-[70%]'>
                <div className='grid grid-cols-2 gap-16 p-6 items-center' >
                <div >
                   <img src={dog2} />
                </div>
                <div className='flex flex-col gap-2'>
                <p className='flex flex-col gap-1'>
                    <span className='text-3xl font-medium'>About the shelter </span>
                    <span className='text-3xl font-medium'>"Cozy House"</span>
                </p>
                      <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium quo accusamus quos. Possimus labore explicabo eveniet quisquam ad ab necessitatibus expedita, cumque iure repellat vel. Expedita, officiis tenetur. </p>
                     <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium quo accusamus quos. Possimus labore explicabo eveniet quisquam ad ab necessitatibus expedita, cumque iure repellat vel. Expedita, officiis tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.  Possimus necessitatibus expedita, cumque iure repellat vel. Expedita, officiis tenetur. </p>
                </div>
                </div>
                </div>
              </section>
        </div>
    )
}

export default Pets