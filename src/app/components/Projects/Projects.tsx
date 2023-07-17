'use client'
import { useState } from "react"
import Modal from "./Modal"

export default function Projects() {
    const [ openModal, setOpenModal ] = useState(false);

    const toggleModal = () => setOpenModal(!openModal);

    return (
        <>
            <div className='w-full px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]'>
                <div className='max-w-[1200px] mx-auto min-h-screen flex justify-start items-center py-[100px]'>
                    <div className='w-full'>
                        <p className='mb-[80px] text-[32px] text-[#CCC9EC] font-bold'><span className='text-[#1AFFC9]'>// </span>Projects</p>
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            <div className='group w-full h-[220px] bg-slate-500 cursor-pointer'>
                                <div className='relative z-10 bg-white w-full h-full hidden group-hover:flex flex-col justify-between items-center p-6'>
                                    <div className='text-center'>
                                        <p className='text-[#434343] text-[24px] font-bold'>Project name</p>
                                        <p className='text-[#E31B6D] text-reg font-medium'>front / back</p>
                                    </div>
                                    <button onClick={toggleModal} className='text-[#434343] border-2 border-[#E31B6D] py-2 px-6'>LEARN MORE</button>
                                </div>
                            </div>
                            <div className='group w-full h-[220px] bg-slate-500 cursor-pointer'>
                                <div className='relative z-10 bg-white w-full h-full hidden group-hover:block'></div>
                            </div>
                            <div className='group w-full h-[220px] bg-slate-500 cursor-pointer'>
                                <div className='relative z-10 bg-white w-full h-full hidden group-hover:block'></div>
                            </div>
                            <div className='group w-full h-[220px] bg-slate-500 cursor-pointer'>
                                <div className='relative z-10 bg-white w-full h-full hidden group-hover:block'></div>
                            </div>
                            <div className='group w-full h-[220px] bg-slate-500 cursor-pointer'>
                                <div className='relative z-10 bg-white w-full h-full hidden group-hover:block'></div>
                            </div>
                            <div className='group w-full h-[220px] bg-slate-500 cursor-pointer'>
                                <div className='relative z-10 bg-white w-full h-full hidden group-hover:block'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openModal && <Modal toggleModal={toggleModal}/>}
        </>
    )
}