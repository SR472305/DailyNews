import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { DummyUser, login, logout } from '../redux/features/Authslices'


const Navbar = () => {
    const [isopen, setisopen] = useState(false)

    const toggleMenu =()=> setisopen(!isopen)

    const isloggedin = useSelector(state => state.auth.isloggedin)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutbtn = ()=>{
        dispatch(logout())
        navigate('/Login')
        console.log("logout");
        
    }

    const loginbtn = ()=>{
        dispatch(login());
        navigate('/Login')
        console.log("login");
        
    }
    return (
        <div className='flex justify-between items-center bg-gray-700 h-15 text-2xl  w-full sticky top-0'>
            <div className='text-white gap-10px'>Newsly</div>


            {/* <button onClick={toggleMenu} className='md:hidden'>{isopen ? <X size={24} />  : <Menu size={24}/>}</button> */}

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
                <li>
                    {/* <Link to='/Login'><LogInIcon /></Link> */}
                    {/* <Link to='/Login'><FaSign/></Link> */}
                    {/* <Link to='/Login'><FaSignInAlt/></Link> */}
                    {/* <Link to='/Login'><button>{isloggedin ? <User2Icon size={24} /> : <UserCheckIcon size={24} />}</button>  </Link> */}
                    {/* <Link to='/Login'>{isloggedin ? <UserCheckIcon size={24} /> : <User2Icon size={24} />} </Link> */}
                       
                       {isloggedin ? (
                         <button onClick={logoutbtn}>Logout</button>
                       ): (
                         <button onClick={loginbtn}>Login</button>
                       )}

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
                <li>
                    <Link to='/Login' onClick={toggleMenu} className='hover:bg-white w-full '>Login</Link>
                </li>
            </ul>   
            )}

        </div>
    )
}

export default Navbar
