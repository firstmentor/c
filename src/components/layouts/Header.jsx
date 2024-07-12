import React from 'react'

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Header() {
    return (
        <>
            <div className='bg-[#2699fb] p-4'>
                <div className='max-w-[1240px] py-[12px] flex justify-between items-center mx-auto'>
                    {/* border border-black  */}
                    <div className='text-3xl font-bold'>
                        PNINFOSYS

                    </div>
                    <AiOutlineMenu className='text-white text-2xl  md:hidden block'/>
                    {/* <AiOutlineClose  className='text-white text-2xl  md:hidden block'/> */}
                    <ul className='hidden md:flex text-white gap-10'>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>

                </div>

            </div>
        </>
    )
}

export default Header