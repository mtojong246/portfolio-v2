'use client';
import { MouseEvent } from "react"
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";


export default function NavBar() {
    const [ openSidebar, setOpenSidebar ] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleDirectionalScroll = () => {
        const currentScrollPos = window.scrollY;
        if (currentScrollPos) {
            setIsScrollingUp(currentScrollPos < prevScrollPos);
            setPrevScrollPos(currentScrollPos);
        }
    };


    useEffect(() => {
        // Add scroll event listener on component mount
        window.addEventListener('scroll', handleDirectionalScroll);

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener('scroll', () => handleDirectionalScroll);
        };
    }, [prevScrollPos]);

    const toggleSidebar = () => setOpenSidebar(!openSidebar);

    const handleScroll = (e: MouseEvent<HTMLButtonElement>) => {
        const value = (e.target as HTMLButtonElement).value;
        const element = document.getElementById(value);
        element?.scrollIntoView({
            behavior: "smooth"
        })
    }

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const refreshPage = () => {
        window.location.reload();
    }
    return (
        <>
            <div id='navbar' className='w-full bg-[#001224] p-5 flex justify-between fixed z-20 transition-all ease-in-out duration-300' style={{ transform: isScrollingUp ? 'translateY(0)' : 'translateY(-100%)' }}>
                <button onClick={refreshPage}><div className='fade-in w-[30px] h-[30px] flex justify-center items-center border border-[#1AFFC9] rounded'>
                    <p className='text-sm text-[#1AFFC9]'>M</p>
                </div></button>
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
                    <a href="https://docs.google.com/document/d/1U6BWD7-W_cP7fa1Cf-9huOf2AgqC-afd570T14RBJyU/edit?usp=sharing" target='_blank' rel='noopener noreferrer' className="relative inline-block px-4 py-1 group fade-down">
                        <span className="absolute inset-0 w-full h-full rounded transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-[#1AFFC9] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-[#001224] rounded border-2 border-[#1AFFC9] group-hover:bg-[#1AFFC9]"></span>
                        <span className="relative bottom-[2px] text-xsm text-[#1AFFC9] group-hover:text-[#001224]">resume</span>
                    </a>
                    {/* <button className='fade-down w-[77px] h-[30px] flex justify-center items-center border border-[#1AFFC9] rounded'>
                        <p className='text-xsm text-[#1AFFC9]'>resume</p>
                    </button> */}
                </div>
                <div id="nav-icon1" onClick={toggleSidebar} className={`${openSidebar ? 'open' : ''} md:hidden`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {/* <button onClick={toggleSidebar} className='md:hidden'><img src='/menu.svg' alt='menu-icon' className='w-[30px] h-[30px] md:hidden'/></button> */}
            </div>
            <Sidebar toggleSidebar={toggleSidebar} openSidebar={openSidebar} handleScroll={handleScroll}/>
        </>
    )
}

