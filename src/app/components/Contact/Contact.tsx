'use client';
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Contact() {
    return (
        <div className='w-full px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]' id='contact'>
            <div className='max-w-[1200px] mx-auto min-h-screen flex justify-start items-center py-[100px]'>
                <div className="w-full">
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}><p className='mb-[80px] text-[32px] text-[#CCC9EC] font-bold'><span className='text-[#1AFFC9]'>// </span>Contact</p></AnimationOnScroll>
                    <div className='text-[28px] font-medium'>
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={100}><p className='text-[#1AFFC9]'><span className='text-[#CCC9EC]'>phone number: </span>(919)-665-9606</p></AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={200}><p className='text-[#1AFFC9]'><span className='text-[#CCC9EC]'>email: </span>mtojong@gmail.com</p></AnimationOnScroll>
                        <div className='flex justify-start items-center gap-4 mt-6'>
                            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} delay={300}><button className='rounded-xl bg-none border border-[#FFC46B] font-reg px-4 py-2 text-[#FFC46B]'>LinkedIn</button></AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} delay={400}><button className='rounded-xl bg-none border border-[#FFC46B] font-reg px-4 py-2 text-[#FFC46B]'>Github</button></AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} delay={500}><button className='rounded-xl bg-none border border-[#FFC46B] font-reg px-4 py-2 text-[#FFC46B]'>Gmail</button></AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}