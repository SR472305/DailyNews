import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [isopen, setisopen] = useState(false)

    const toggleMenu =()=> setisopen(!isopen)
    return (
        <div className='flex justify-between items-center bg-gray-700 h-15 text-2xl  w-full sticky top-0'>
            <div className='text-white gap-10px'>Newsly</div>


            <button onClick={toggleMenu} className='md:hidden'>{isopen ? <X size={24} />  : <Menu size={24}/>}</button>

            <ul className='hidden flex gap-0 text-white  md:flex gap-6 '>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/News'>News</Link>
                </li>
                <li>
                    <Link to='/About'>About</Link>
                </li>
                <li>
                    <Link to='/Contact'>Contact</Link>
                </li>
            </ul>
               {/* Mobile menu */}
            {isopen && 
            (
               <ul className='md:hidden flex flex-col bg-gray-500 px-6 pb-6 top-15 absolute w-full text-center hover:curoser'>
                <li className=''>
                    <Link to='/' onClick={toggleMenu} className='hover:bg-white w-full '>Home</Link>
                </li>
                <li>
                    <Link to='/News' onClick={toggleMenu} className='hover:bg-white w-full '>News</Link>
                </li>
                <li>
                    <Link to='/About' onClick={toggleMenu} className='hover:bg-white w-full '>About</Link>
                </li>
                <li>
                    <Link to='/Contact' onClick={toggleMenu} className='hover:bg-white w-full '>Contact</Link>
                </li>
            </ul>   
            )}

        </div>
    )
}

export default Navbar
