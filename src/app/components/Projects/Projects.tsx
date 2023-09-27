'use client'
import { useState, useEffect } from "react"
import Modal from "./Modal"
import { AnimationOnScroll } from "react-animation-on-scroll"
import { projects } from "@/app/data/projects"

export default function Projects() {
    const [ openModal, setOpenModal ] = useState(false);
    const [ currentProject, setCurrentProject ] = useState('')

    const toggleModal = () => setOpenModal(!openModal);

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (openModal) {
                document.body.style.overflow = 'hidden';
                navbar.style.display = 'none';
            } else {
                document.body.style.overflow = 'scroll';
                navbar.style.display = 'flex';
            }
        }
        
    }, [openModal])

    return (
        <>
            <div className='w-full px-[25px]' id='projects'>
                <div className='max-w-[1200px] mx-auto min-h-screen flex justify-start items-center py-[100px]'>
                    <div className='w-full'>
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}><p className='mb-[80px] text-[32px] text-[#CCC9EC] font-bold'><span className='text-[#1AFFC9]'>// </span>Projects</p></AnimationOnScroll>
                        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-5'>
                        {projects.map(project => (
                            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} delay={project.delay} key={project.id}>
                                <div className='relative project group w-full cursor-pointer lg:h-[350px]'>
                                    <img src={project.screenshots[0]} className='object-cover w-full h-full' />
                                    <div className='absolute bottom-0 z-10 transition-all ease-in-out duration-500 opacity-0 group-hover:opacity-100 bg-white w-full h-full flex flex-col justify-between items-center py-5 md:py-10 px-5'>
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