import NavBar from "./components/NavBar/NavBar"

export default function Home() {
  return (
    <div className='w-full bg-[#001224]'>
      <NavBar />
      <div className='w-full px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]'>
        <div className='max-w-[1200px] mx-auto h-screen flex justify-center items-center'>
          <div className='text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[52px] font-medium'>
            <p className='text-white'>
              <span className='text-[#CCC9EC]'>const </span>
              <span className='text-[#1AFFC9]'>Me </span>
              <span className='text-[#FFC46B]'>: human </span>
              <span className='text-[#CCC9EC]'>= </span> 
              <span className='text-[#FFC46B]'>{`{`}</span>
            </p>
            <br />
            <p className='ml-[35px] sm:ml-[70px] text-white'>
              <span className='text-[#CCC9EC]'>name: </span>
               <span className='text-[#1AFFC9]'>"Melanie"</span>
               <span className='text-[#CCC9EC]'>,</span>
            </p>
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
            <br />
            <p className='text-white'>
              {`}`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
