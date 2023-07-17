export default function Modal({ toggleModal }: { toggleModal: () => void }) {
    return (
        <>
        <div onClick={toggleModal} className='fixed top-0 bottom-0 right-0 left-0 z-10 bg-slate-700 opacity-50 h-screen'></div>
        <div className='fixed top-0 bottom-0 right-0 left-0 z-10 bg-white h-screen md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] md:h-[700px] md:w-[700px]'>
            <div className='w-full h-[470px] bg-slate-500'></div>
            <div className='p-7 flex flex-col justify-between items-start bg-white'>
                <div>
                    <p className='text-[#434343]'>Project name</p>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-center items-center gap-4'>
                        <button>Website</button>
                        <button>Source Code</button>
                    </div>
                    <button>Close</button>
                </div>
            </div>
        </div>
        </>
    )
}