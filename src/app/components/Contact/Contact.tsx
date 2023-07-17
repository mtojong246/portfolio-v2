export default function Contact() {
    return (
        <div className='w-full px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]'>
            <div className='max-w-[1200px] mx-auto min-h-screen flex justify-start items-center py-[100px]'>
                <div className="w-full">
                    <p className='mb-[80px] text-[32px] text-[#CCC9EC] font-bold'><span className='text-[#1AFFC9]'>// </span>Contact</p>
                    <div className='text-[28px] font-medium'>
                        <p>
                            <span className='text-[#CCC9EC]'>const </span>
                            <span className='text-[#1AFFC9]'>howToReachMe </span>
                            <span className='text-[#FFC46B]'>: ContactType </span>
                            <span className='text-[#CCC9EC]'>= </span> 
                            <span className='text-[#FFC46B]'>{`{`}</span>
                        </p>
                        <div className='w-full h-[20px]'></div>
                        <p className='ml-[35px] sm:ml-[70px] text-white'>
                            <span className='text-[#CCC9EC]'>phone_number: </span>
                            <span className='text-[#1AFFC9]'>"919-665-9606"</span>
                            <span className='text-[#CCC9EC]'>,</span>
                        </p>
                        <p className='ml-[35px] sm:ml-[70px] text-white'>
                            <span className='text-[#CCC9EC]'>email_address: </span>
                            <span className='text-[#1AFFC9]'>"mtojong@gmail.com"</span>
                            <span className='text-[#CCC9EC]'>,</span>
                        </p>
                        <p className='ml-[35px] sm:ml-[70px] text-white'>
                            <span className='text-[#CCC9EC]'>linkedin: </span>
                            <span className='text-[#1AFFC9]'>[social_link_1]</span>
                            <span className='text-[#CCC9EC]'>,</span>
                        </p>
                        <p className='ml-[35px] sm:ml-[70px] text-white'>
                            <span className='text-[#CCC9EC]'>github: </span>
                            <span className='text-[#1AFFC9]'>[social_link_2]</span>
                            <span className='text-[#CCC9EC]'>,</span>
                        </p>
                        <p className='ml-[35px] sm:ml-[70px] text-white'>
                            <span className='text-[#CCC9EC]'>instagram: </span>
                            <span className='text-[#1AFFC9]'>[social_link_3]</span>
                            <span className='text-[#CCC9EC]'>,</span>
                        </p>
                        <div className='w-full h-[20px]'></div>
                        <p className='text-[#FFC46B]'>
                            {`}`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}