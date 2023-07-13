export default function NavBar() {
    return (
        <div className='w-full bg-[#001224] p-5 flex justify-between fixed z-10'>
            <div className='w-[30px] h-[30px] flex justify-center items-center border border-[#1AFFC9] rounded'>
                <p className='text-sm text-[#1AFFC9]'>M</p>
            </div>
            <div className='flex justify-end items-center gap-[40px]'>
                <button>
                    <p className="text-sm text-[#CCC9EC] font-bold"><span className='text-[#1AFFC9]'>// </span>About</p>
                </button>
                <button>
                    <p className="text-sm text-[#CCC9EC] font-bold"><span className='text-[#1AFFC9]'>// </span>Projects</p>
                </button>
                <button>
                    <p className="text-sm text-[#CCC9EC] font-bold"><span className='text-[#1AFFC9]'>// </span>Contact</p>
                </button>
                <button className='w-[77px] h-[30px] flex justify-center items-center border border-[#1AFFC9] rounded'>
                    <p className='text-xsm text-[#1AFFC9]'>resume</p>
                </button>
            </div>
        </div>
    )
}