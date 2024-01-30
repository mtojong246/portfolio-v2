'use client';
import { projects, Project } from "@/app/data/projects";
import { useState, useEffect } from "react";
import CarouselComp from "./CarouselComp";


export default function Modal({ toggleModal, currentProject }: { toggleModal: () => void, currentProject: string }) {
    const [ proj, setProj ] = useState<Project>({} as Project);

    useEffect(() => {
        const newProject = projects.find(project => project.code === currentProject);
        if (newProject) {
            setProj(newProject);
        }
    }, [currentProject])


    return (
        <div className='fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center p-4'>
        <div onClick={toggleModal} className='absolute top-0 bottom-0 right-0 left-0 z-10 bg-slate-700 opacity-50 '></div>
        <div className='fixed top-0 bottom-0 right-0 left-0 z-10 bg-white h-screen flex flex-col md:static md:h-auto md:max-w-[800px]'>
            <div className='w-full bg-white'>
                <CarouselComp screenshots={proj.screenshots}/>
            </div>
            {proj && (
                <div className='w-full grow p-7 flex flex-col justify-between items-start bg-white'>
                    <div className='w-full'>
                        <div className='w-full border-b border-[#989898] pb-1 mb-3'>
                            <p className='text-[#434343] text-[28px] font-semibold mb-1'>{proj.name}</p>
                            <p className='text-[#989898] text-sm font-semibold uppercase'>{proj.frontend} / {proj.backend ? proj.backend + ' /': null} {proj.styles} / {proj.language}</p>
                        </div>
                        <p className="text-[#434343] text-sm">{proj.description}</p>
                    </div>
                    <div className='flex justify-between items-center w-full mt-5'>
                        <div className='flex justify-center items-center gap-4'>
                        {proj.figma ? (
                            <a href={proj.figma} target='_blank' rel='noreferrer noopener'>
                                <button className='transition-all duration-500 ease-in-out text-[#434343] hover:bg-[#E31B6D] hover:text-white border-2 border-[#E31B6D] py-2 px-6'>View Mock-up</button>
                            </a>
                        ): (
                        <>
                            <a href={proj.website} target='_blank' rel='noreferrer noopener'>
                                <button className='transition-all duration-500 ease-in-out text-[#434343] hover:bg-[#E31B6D] hover:text-white border-2 border-[#E31B6D] py-2 px-6'>Website</button>
                            </a>
                            {proj.github && (
                            <a href={proj.github} target='_blank' rel='noreferrer noopener'>
                                <button className='transition-all duration-500 ease-in-out text-[#434343] hover:bg-[#E31B6D] hover:text-white border-2 border-[#E31B6D] py-2 px-6'>Source Code</button>
                            </a>
                            )}
                        </>
                            )}
                        </div>
                        <button onClick={toggleModal}><img src='/x.svg' alt='close' className='w-[25px] h-[25px]'/></button>
                    </div>
                </div>
            )}
        </div>
        </div>
    )
}