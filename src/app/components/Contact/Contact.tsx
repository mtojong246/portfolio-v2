'use client';
import { AnimationOnScroll } from "react-animation-on-scroll";
import { socials } from "@/app/data/socials";

export default function Contact() {
    return (
        <div className='w-full px-[25px]' id='contact'>
            <div className='max-w-[1200px] mx-auto min-h-screen flex justify-start items-center py-[100px]'>
                <div className="w-full">
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}><p className='mb-10 text-[32px] text-[#CCC9EC] font-bold'><span className='text-[#1AFFC9]'>// </span>Contact</p></AnimationOnScroll>
                    <div className='text-xl sm:text-[28px] font-medium'>
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={100}><p className='text-[#1AFFC9]'><span className='text-[#FFC46B]'>phone number: </span>(919)-665-9606</p></AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={200}><p className='text-[#1AFFC9]'><span className='text-[#FFC46B]'>email: </span>mtojong@gmail.com</p></AnimationOnScroll>
                        <div className='flex flex-wrap justify-start items-center gap-4 mt-10 text-[20px]'>
                        {socials.map(social => (
                            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} delay={social.delay} key={social.id}>
                                <a href={social.link} target={social.target} rel={social.rel} className="relative inline-flex items-center justify-center px-3 sm:px-6 py-1 sm:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-600 rounded-full shadow-md group">
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-[#CCC9EC] duration-300 -translate-x-full bg-indigo-600 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-indigo-500 transition-all duration-300 transform group-hover:translate-x-full ease">{social.name}</span>
                                    <span className="relative invisible">{social.name}</span>
                                </a>
                            </AnimationOnScroll>
                        ))}
                            {/* <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} delay={400}><button className='rounded-xl bg-none border border-[#FFC46B] font-light px-5 py-2 text-[#FFC46B]'>Github</button></AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} delay={500}><button className='rounded-xl bg-none border border-[#FFC46B] font-light px-5 py-2 text-[#FFC46B]'>Gmail</button></AnimationOnScroll> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

{/* <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Button Text</span>
    <span className="relative invisible">Button Text</span>
</a> */}
