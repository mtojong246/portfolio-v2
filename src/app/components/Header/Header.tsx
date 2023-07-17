export default function Header() {
    return (
        <div className='w-full px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]'>
            <div className='max-w-[1200px] mx-auto min-h-screen flex justify-center items-center py-[100px]'>
                <div className='text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[52px] font-medium'>
                    <p className='text-white'>
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
                    </p>
                </div>
            </div>
        </div>
    )
}