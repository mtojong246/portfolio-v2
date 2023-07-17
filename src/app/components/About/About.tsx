export default function About() {
    return (
        <div className='w-full px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]' id='about'>
            <div className='max-w-[1200px] mx-auto min-h-screen flex justify-center items-center py-[100px]'>
            <div className='w-full flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start gap-[100px]'>
                <div className='max-w-[500px] w-full'>
                <p className='mb-3 text-[32px] text-[#CCC9EC] font-bold'><span className='text-[#1AFFC9]'>// </span>About</p>
                <p className='text-[18px] text-[#CCC9EC] ml-8'>
                    <span className='text-[#FFC46B]'>&lt;p&gt;</span>With the desire to help others by developing creative solutions to complex problems, I initially went down the path of scientific research and medicine. This desire later informed my decision to pursue web development as a means of implementing
                    <span className='text-[#FFC46B]'>&lt;strong&gt;</span><strong>real change</strong><span className='text-[#FFC46B]'>&lt;/strong&gt;</span>
                    in a rapidly-evolving world.<span className='text-[#FFC46B]'>&lt;/p&gt;</span>
                </p>
                <p className='text-[18px] text-[#CCC9EC] ml-8 mt-3'>
                    <span className='text-[#FFC46B]'>&lt;p&gt;</span>Since beginning my journey, I have enjoyed building interactive applications that reflect my personal perspective while also challenging my ability to solve problems
                    <span className='text-[#FFC46B]'>&lt;strong&gt;</span><strong>efficiently and creatively</strong><span className='text-[#FFC46B]'>&lt;/strong&gt;</span>.
                    To this day, I remain steadfast in my goal of helping others by improving their quality of life and empowering their sense of autonomy in an ever-changing environment.<span className='text-[#FFC46B]'>&lt;/p&gt;</span>
                </p>
                <p className='text-[18px] text-[#CCC9EC] ml-8 mt-3'>
                    <span className='text-[#FFC46B]'>&lt;p&gt;</span>Here are some tools I've been working with:<span className='text-[#FFC46B]'>&lt;/p&gt;</span>
                </p>
                <p className='text-[18px] text-[#FFC46B] ml-8 mt-3'>&lt;ul&gt;</p>
                <p className='text-[18px] text-[#CCC9EC] ml-20'><span className='text-[#FFC46B]'>&lt;li&gt;</span>HTML<span className='text-[#FFC46B]'>&lt;/li&gt;</span></p>
                <p className='text-[18px] text-[#CCC9EC] ml-20'><span className='text-[#FFC46B]'>&lt;li&gt;</span>CSS<span className='text-[#FFC46B]'>&lt;/li&gt;</span></p>
                <p className='text-[18px] text-[#CCC9EC] ml-20'><span className='text-[#FFC46B]'>&lt;li&gt;</span>JavaScript<span className='text-[#FFC46B]'>&lt;/li&gt;</span></p>
                <p className='text-[18px] text-[#CCC9EC] ml-20'><span className='text-[#FFC46B]'>&lt;li&gt;</span>TypeScript<span className='text-[#FFC46B]'>&lt;/li&gt;</span></p>
                <p className='text-[18px] text-[#CCC9EC] ml-20'><span className='text-[#FFC46B]'>&lt;li&gt;</span>React.js<span className='text-[#FFC46B]'>&lt;/li&gt;</span></p>
                <p className='text-[18px] text-[#CCC9EC] ml-20'><span className='text-[#FFC46B]'>&lt;li&gt;</span>Next.js<span className='text-[#FFC46B]'>&lt;/li&gt;</span></p>
                <p className='text-[18px] text-[#CCC9EC] ml-20'><span className='text-[#FFC46B]'>&lt;li&gt;</span>Node.js<span className='text-[#FFC46B]'>&lt;/li&gt;</span></p>
                <p className='text-[18px] text-[#CCC9EC] ml-20'><span className='text-[#FFC46B]'>&lt;li&gt;</span>PostgreSQL<span className='text-[#FFC46B]'>&lt;/li&gt;</span></p>
                <p className='text-[18px] text-[#CCC9EC] ml-20'><span className='text-[#FFC46B]'>&lt;li&gt;</span>MongoDB<span className='text-[#FFC46B]'>&lt;/li&gt;</span></p>
                <p className='text-[18px] text-[#CCC9EC] ml-20'><span className='text-[#FFC46B]'>&lt;li&gt;</span>Firebase<span className='text-[#FFC46B]'>&lt;/li&gt;</span></p>
                <p className='text-[18px] text-[#CCC9EC] ml-20'><span className='text-[#FFC46B]'>&lt;li&gt;</span>Figma<span className='text-[#FFC46B]'>&lt;/li&gt;</span></p>
                <p className='text-[18px] text-[#FFC46B] ml-8'>&lt;/ul&gt;</p>
                </div>
                <div className='max-w-[500px] w-full'>
                <img src='/headshot.jpeg' alt='headshot' className='w-full h-auto object-cover object-center rounded-lg'/>
                </div>
            </div>
            </div>
        </div>
    )
}