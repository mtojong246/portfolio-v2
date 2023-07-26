'use client'
import { useState } from "react"
import Modal from "./Modal"
import { AnimationOnScroll } from "react-animation-on-scroll"
import { projects } from "@/app/data/projects"

export default function Projects() {
    const [ openModal, setOpenModal ] = useState(false);
    const [ currentProject, setCurrentProject ] = useState('')

    const toggleModal = () => setOpenModal(!openModal);

    return (
        <>
            <div className='w-full px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]' id='projects'>
                <div className='max-w-[1200px] mx-auto min-h-screen flex justify-start items-center py-[100px]'>
                    <div className='w-full'>
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}><p className='mb-[80px] text-[32px] text-[#CCC9EC] font-bold'><span className='text-[#1AFFC9]'>// </span>Projects</p></AnimationOnScroll>
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {projects.map(project => (
                            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} delay={project.delay} key={project.id}>
                                <div style={{backgroundImage: `url(${project.screenshots[0]})`}} className='project group w-full h-[380px] md:h-[280px] bg-cover bg-center cursor-pointer'>
                                    <div className='relative z-10 transition-all ease-in-out duration-500 opacity-0 group-hover:opacity-100 bg-white w-full h-full flex flex-col justify-between items-center py-10 md:py-5 px-5'>
                                        <div className='text-center'>
                                            <p className='text-[#434343] text-[24px] font-bold fade-project-down'>{project.name}</p>
                                            <p className='text-[#E31B6D] text-reg font-medium fade-project-down'>{project.frontend} / {project.backend ? project.backend + ' /': null} {project.styles} / {project.language}</p>
                                        </div>
                                        <button value={project.code} onClick={() => {toggleModal(); setCurrentProject(project.code)}} className='fade-project-up transition-all duration-500 ease-in-out text-[#434343] hover:bg-[#E31B6D] hover:text-white border-2 border-[#E31B6D] py-2 px-6'>LEARN MORE</button>
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
            {openModal && <Modal toggleModal={toggleModal} currentProject={currentProject}/>}
        </>
    )
}