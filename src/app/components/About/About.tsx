'use client';
import { AnimationOnScroll } from "react-animation-on-scroll"

export default function About() {
    return (
        <div className='w-full px-[25px]' id='about'>
            <div className='max-w-[1200px] mx-auto min-h-screen flex justify-center items-center py-[100px]'>
            <div className='w-full flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start gap-[100px]'>
                <div className='lg:max-w-[500px] w-full'>
                    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}><p className='mb-3 text-[32px] text-[#CCC9EC] font-bold'><span className='text-[#1AFFC9]'>// </span>About</p></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={100}><p className='text-[18px] text-[#CCC9EC] ml-8'>
                        With the desire to help others by developing creative solutions to complex problems, I initially went down the path of scientific research and medicine. This desire later informed my decision to pursue web development as a means of implementing
                        <strong className='text-[#FFC46B]'> real change </strong>
                        in a rapidly-evolving world.
                    </p></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={200}><p className='fade-left-500 text-[18px] text-[#CCC9EC] ml-8 mt-3'>
                        Since beginning my journey, I have enjoyed building interactive applications that reflect my personal perspective while also challenging my ability to solve problems
                        <strong className='text-[#FFC46B]'> efficiently and creatively</strong>.
                        To this day, I remain steadfast in my goal of helping others by improving their quality of life and empowering their sense of autonomy in an ever-changing environment.
                    </p></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={300}><p className='fade-left-600 text-[18px] text-[#CCC9EC] ml-8 mt-3'>
                        Here are some tools I've been working with:
                    </p></AnimationOnScroll>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 mt-6 gap-y-[1px]'>
                    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={400}><div className='text-reg text-[#A4A2BC] ml-8 flex justify-start items-center gap-1'><img src='/chevrons-right.svg' className='w-[16px] h-[16px]' />HTML</div></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={400}><div className='text-reg text-[#A4A2BC] ml-8 flex justify-start items-center gap-1'><img src='/chevrons-right.svg' className='w-[16px] h-[16px]' />React</div></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={400}><div className='text-reg text-[#A4A2BC] ml-8 flex justify-start items-center gap-1'><img src='/chevrons-right.svg' className='w-[16px] h-[16px]' />PostgreSQL</div></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={400}><div className='text-reg text-[#A4A2BC] ml-8 flex justify-start items-center gap-1'><img src='/chevrons-right.svg' className='w-[16px] h-[16px]' />CSS</div></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={400}><div className='text-reg text-[#A4A2BC] ml-8 flex justify-start items-center gap-1'><img src='/chevrons-right.svg' className='w-[16px] h-[16px]' />Next</div></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={400}><div className='text-reg text-[#A4A2BC] ml-8 flex justify-start items-center gap-1'><img src='/chevrons-right.svg' className='w-[16px] h-[16px]' />MongoDB</div></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={400}><div className='text-reg text-[#A4A2BC] ml-8 flex justify-start items-center gap-1'><img src='/chevrons-right.svg' className='w-[16px] h-[16px]' />JavaScript</div></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={400}><div className='text-reg text-[#A4A2BC] ml-8 flex justify-start items-center gap-1'><img src='/chevrons-right.svg' className='w-[16px] h-[16px]' />Node</div></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={400}><div className='text-reg text-[#A4A2BC] ml-8 flex justify-start items-center gap-1'><img src='/chevrons-right.svg' className='w-[16px] h-[16px]' />Figma</div></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={400}><div className='text-reg text-[#A4A2BC] ml-8 flex justify-start items-center gap-1'><img src='/chevrons-right.svg' className='w-[16px] h-[16px]' />TypeScript</div></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={400}><div className='text-reg text-[#A4A2BC] ml-8 flex justify-start items-center gap-1'><img src='/chevrons-right.svg' className='w-[16px] h-[16px]' />Firebase</div></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={400}><div className='text-reg text-[#A4A2BC] ml-8 flex justify-start items-center gap-1'><img src='/chevrons-right.svg' className='w-[16px] h-[16px]' />Prisma</div></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={400}><div className='text-reg text-[#A4A2BC] ml-8 flex justify-start items-center gap-1'><img src='/chevrons-right.svg' className='w-[16px] h-[16px]' />Tailwind</div></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={400}><div className='text-reg text-[#A4A2BC] ml-8 flex justify-start items-center gap-1'><img src='/chevrons-right.svg' className='w-[16px] h-[16px]' />Redux</div></AnimationOnScroll>
                    </div>
                </div>
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}><div className='max-w-[500px] w-full'>
                <img src='/headshot.jpeg' alt='headshot' className='w-full h-auto object-cover object-center rounded-lg'/>
                </div></AnimationOnScroll>
            </div>
            </div>
        </div>
    )
}