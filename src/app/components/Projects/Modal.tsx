export default function Modal({ toggleModal }: { toggleModal: () => void }) {
    return (
        <>
        <div onClick={toggleModal} className='fixed top-0 bottom-0 right-0 left-0 z-10 bg-slate-700 opacity-50 h-screen'></div>
        <div className='fixed top-0 bottom-0 right-0 left-0 z-10 bg-white h-screen flex flex-col md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] md:h-[700px] md:w-[700px]'>
            <div className='w-full h-[400px] bg-slate-500'></div>
            <div className='w-full grow p-7 flex flex-col justify-between items-start bg-white'>
                <div className='w-full'>
                    <div className='w-full border-b border-[#989898] pb-1 mb-3'>
                        <p className='text-[#434343] text-[28px] font-semibold mb-1'>Project name</p>
                        <p className='text-[#989898] text-sm font-semibold'>FRONT / BACK</p>
                    </div>
                    <p className="text-[#434343] text-sm">Description</p>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex justify-center items-center gap-4'>
                        <button className='text-[#434343] border-2 border-[#E31B6D] py-2 px-6'>Website</button>
                        <button className='text-[#434343] border-2 border-[#E31B6D] py-2 px-6'>Source Code</button>
                    </div>
                    <button onClick={toggleModal}><img src='/x.svg' alt='close' className='w-[25px] h-[25px]'/></button>
                </div>
            </div>
        </div>
        </>
    )
}