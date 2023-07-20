'use client';
import Typewriter from 'typewriter-effect';

export default function Header() {
    return (
        <div className='w-full px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]'>
            <div className='max-w-[1200px] mx-auto min-h-screen flex justify-center sm:justify-start items-center py-[100px]'>
                {/* <div className='flex justify-start items-start w-full h-[210px] md:h-[300px] lg:h-[390px]'> */}
                <div className='w-full text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[52px] font-medium'>
                    <p className='fade-left text-lg text-[#1AFFC9]'>Hi, my name is</p>
                    <p className='fade-left text-[60px] md:text-[70px] lg:text-[80px] text-[#CCC9EC] font-bold'>Melanie Tojong.</p>
                    <div className='fade-left-delay flex flex-wrap gap-2'><span className='text-[#A4A2BC] text-[32px]'>I'm passionate about </span><span className='text-[#1AFFC9] text-[32px]'><Typewriter options={{
                        autoStart: true,
                        loop: true,
                        delay: 80,
                    }} onInit={(typewriter) => {
                        typewriter
                        .typeString('development.')
                        .pauseFor(1800)
                        .deleteAll(30)
                        .typeString('design.')
                        .pauseFor(1800)
                        .deleteAll(30)
                        .typeString('innovation.')
                        .pauseFor(1800)
                        .deleteAll(30)
                        .typeString('discovery.')
                        .pauseFor(1800)
                        .start()
                    }}/></span></div>
                    {/* <p className='text-white'>
                        <span className='text-[#CCC9EC]'>const </span>
                        <span className='text-[#1AFFC9]'>Melanie </span>
                        <span className='text-[#FFC46B]'>: human </span>
                        <span className='text-[#CCC9EC]'>= </span> 
                        <span className='text-[#FFC46B]'>{`{`}</span>
                    </p>
                    <div className='w-full h-[20px]'></div>
                    <p className='ml-[35px] sm:ml-[70px] text-white'>
                        <span className='text-[#CCC9EC]'>greeting: </span>
                        <span className='text-[#1AFFC9]'>"Hello world"</span>
                        <span className='text-[#CCC9EC]'>,</span>
                    </p>
                    <p className='ml-[35px] sm:ml-[70px] text-white'>
                        <span className='text-[#CCC9EC]'>occupation: </span>
                        <span className='text-[#1AFFC9]'>"Web Developer"</span>
                        <span className='text-[#CCC9EC]'>,</span>
                    </p>
                    <p className='ml-[35px] sm:ml-[70px] text-white'>
                        <span className='text-[#CCC9EC]'>passion: </span>
                        <span className='text-[#1AFFC9]'>"innovation & discovery</span>
                        <span className='text-[#CCC9EC]'>,</span>
                    </p>
                    <div className='w-full h-[20px]'></div>
                    <p className='text-[#FFC46B]'>
                        {`}`}
                    </p> */}
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}