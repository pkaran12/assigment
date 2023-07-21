import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-center py-10 text-white'>
            <div className='w-[100%] flex justify-between'>
                <div className='flex flex-col justify-center'>
                    <span className='text-[#a39289] text-3xl font-bold'>Cozy House</span>
                    <span>Shelter for pets as House</span>
                </div>
                <div className='flex justify-center items-center'>
                    <ul className='flex gap-7'>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/pets"><li>Pets</li></Link>
                        <Link to="/contact"> <li>Contact us</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar