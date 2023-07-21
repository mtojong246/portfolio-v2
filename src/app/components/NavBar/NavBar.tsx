'use client';
import { MouseEvent } from "react"
import Sidebar from "./Sidebar";
import { useState } from "react";


export default function NavBar() {
    const [ openSidebar, setOpenSidebar ] = useState(false);

    const toggleSidebar = () => setOpenSidebar(!openSidebar);

    const handleScroll = (e: MouseEvent<HTMLButtonElement>) => {
        const value = (e.target as HTMLButtonElement).value;
        const element = document.getElementById(value);
        element?.scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <>
            <div className='w-full bg-[#001224] p-5 flex justify-between fixed z-10'>
                <div className='fade-in w-[30px] h-[30px] flex justify-center items-center border border-[#1AFFC9] rounded'>
                    <p className='text-sm text-[#1AFFC9]'>M</p>
                </div>
                <div className='hidden md:flex justify-end items-center gap-[40px]'>
                    <button className="fade-down text-sm text-[#CCC9EC] font-bold hover:text-[#1AFFC9] transition-all ease-in-out duration-300" value='about' onClick={handleScroll}>
                        <span className='text-[#1AFFC9]'>// </span>About
                    </button>
                    <button className="fade-down text-sm text-[#CCC9EC] font-bold hover:text-[#1AFFC9] transition-all ease-in-out duration-300" value='projects' onClick={handleScroll}>
                        <span className='text-[#1AFFC9]'>// </span>Projects
                    </button>
                    <button className="fade-down text-sm text-[#CCC9EC] font-bold hover:text-[#1AFFC9] transition-all ease-in-out duration-300" value='contact' onClick={handleScroll}>
                        <span className='text-[#1AFFC9]'>// </span>Contact
                    </button>
                    <button className='fade-down w-[77px] h-[30px] flex justify-center items-center border border-[#1AFFC9] rounded'>
                        <p className='text-xsm text-[#1AFFC9]'>resume</p>
                    </button>
                </div>
                <button onClick={toggleSidebar} className='md:hidden'><img src='/menu.svg' alt='menu-icon' className='w-[30px] h-[30px] md:hidden'/></button>
            </div>
            {openSidebar && <Sidebar toggleSidebar={toggleSidebar} />}
        </>
    )
}