import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#FAF3E0] flex items-center justify-center'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-center'>
                <h1 className='text-5xl sm:text-7xl font-bold text-[#FF4B44]'>
                    Welcome
                </h1>
                <h1 className='text-5xl sm:text-7xl font-bold text-[#FF4B44]'>
                    to Razin Choudhury's
                </h1>
                <h1 className='text-5xl sm:text-7xl font-bold text-[#FF4B44]'>
                    2024-2025 La Liga Predictor!
                </h1>
                <p className='text-xl sm:text-2xl text-gray-700 mt-4'>
                    Explore the predicted standings for the upcoming season.
                </p>
                <p className='text-xl sm:text-2xl text-gray-700 mt-4'>
                    Check out the Results section for detailed predictions and stats.
                </p>
                <p className='text-xl sm:text-2xl text-gray-700 mt-4'>
                    Learn more about how these predictions were made in the About section.
                </p>
                <div>
                    <Link to='results' smooth={true} duration={500}>
                        <button className='group border-2 px-6 py-3 my-2 flex items-center mx-auto bg-[#FF4B44] text-white hover:bg-[#FF7A73] hover:border-[#FF7A73]'>
                            View Standings
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
