'use client';
import { MouseEvent } from "react";

export default function Sidebar({ toggleSidebar, openSidebar, handleScroll }: { toggleSidebar: () => void, openSidebar: boolean, handleScroll: (e: MouseEvent<HTMLButtonElement>) => void }) {
    return (
        <div className='h-screen fixed z-10 md:hidden'>
            <div onClick={toggleSidebar} className={`${openSidebar ? '' : 'hidden'} fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm`}></div>
            <div className={`${openSidebar ? 'translate-x-0' : 'translate-x-full'} bg-[#001224] w-[250px] fixed top-0 right-0 h-full transform transition-transform duration-300 z-30 flex flex-col gap-8 justify-start items-start pt-[100px] px-10`}>
                    <button className="text-lg text-[#CCC9EC] hover:text-[#1AFFC9] transition-all ease-in-out duration-300" value='about' onClick={(e) => {handleScroll(e); toggleSidebar()}}>
                        <span className='text-[#1AFFC9] inline-block mr-3'>1. </span>About
                    </button>
                    <button className="text-lg text-[#CCC9EC] hover:text-[#1AFFC9] transition-all ease-in-out duration-300" value='projects' onClick={(e) => {handleScroll(e); toggleSidebar()}}>
                        <span className='text-[#1AFFC9] inline-block mr-3'>2. </span>Projects
                    </button>
                    <button className="text-lg text-[#CCC9EC] hover:text-[#1AFFC9] transition-all ease-in-out duration-300" value='contact' onClick={(e) => {handleScroll(e); toggleSidebar()}}>
                        <span className='text-[#1AFFC9] inline-block mr-3'>3. </span>Contact
                    </button>
                    <a href="https://docs.google.com/document/d/1U6BWD7-W_cP7fa1Cf-9huOf2AgqC-afd570T14RBJyU/edit?usp=sharing" target='_blank' rel='noopener noreferrer' className="relative inline-block w-full py-2 group">
                        <span className="absolute inset-0 w-full h-full rounded transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-[#1AFFC9] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-[#001224] rounded border-2 border-[#1AFFC9] group-hover:bg-[#1AFFC9]"></span>
                        <span className="relative left-[55px] bottom-[2px] text-reg text-[#1AFFC9] group-hover:text-[#001224]">resume</span>
                    </a>
            </div>
        </div>
    )
}