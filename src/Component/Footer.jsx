import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className='flex w-full'>

                <div className='border-r-2 w-150 bg-gray-700 text-white'>
                    <h3>Newsly</h3>
                    <p>Your Daily Dose of Truth. Stay informed with fast, fact-checked news across India and the world. </p>
                </div><br /><br />


                <div className=' w-150 bg-gray-700 text-white' >
                    <h3>Qulick links</h3>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/About'>About</Link></li>
                        <li><Link to='/Contact'>Contact</Link></li>
                    </ul>
                </div>

                <div className='border-l-2 w-100 bg-gray-700 text-white'>
                    <h3>Follow us</h3>
                    <div className='items-center'>
                        <FaInstagram />
                        <FaTwitter />
                        <FaFacebook />
                    </div>
                </div>
            </div>

            <div className='block  bg-gray-700'>
                <p className='text-center border-b-2 text-white'>© 2025 Newsly. All  right reserved.</p>
                <p className='text-center  text-white'>Developed by Shyam Rajbhar</p>
            </div>
        </footer>
    )
}

export default Footer
