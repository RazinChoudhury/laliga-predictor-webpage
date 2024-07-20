import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'

const Navbar  = () => {
        const [nav, setNav] = useState(false)
        const handleCLick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#FF4B44] text-gray-100'>
            <div>
                <img src={Logo} alt="Logo Image" style={{width: '110px'}}/>
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='results' smooth={true} duration={500}>
                        Results
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
            </ul>
            {/* Hmaburger */}
            <div onClick={handleCLick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#FF4B44] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleCLick} to='home' smooth={true} duration={500}>
                        Home
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleCLick} to='results' smooth={true} duration={500}>
                        Results
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleCLick} to='about' smooth={true} duration={500}>
                        About
                    </Link></li>
            </ul>
        </div>
    )
}

export default Navbar
