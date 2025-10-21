import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login, logout } from '../redux/features/Authslices'
import { Menu, X } from 'lucide-react' // for mobile icons (optional)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  const isloggedin = useSelector(state => state.auth.isloggedin)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutbtn = () => {
    dispatch(logout())
    navigate('/Login')
    console.log("logout")
  }

  const loginbtn = () => {
    dispatch(login())
    navigate('/Login')
    console.log("login")
  }

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-cyan-400">Newsly</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg">
            <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
            <Link to="/News" className="hover:text-cyan-400 transition">News</Link>
            <Link to="/About" className="hover:text-cyan-400 transition">About</Link>
            <Link to="/Contact" className="hover:text-cyan-400 transition">Contact</Link>

            {isloggedin ? (
              <button 
                onClick={logoutbtn} 
                className="bg-cyan-500 hover:bg-cyan-600 px-4 py-1 rounded-lg text-white transition"
              >
                Logout
              </button>
            ) : (
              <button 
                onClick={loginbtn} 
                className="bg-cyan-500 hover:bg-cyan-600 px-4 py-1 rounded-lg text-white transition"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 px-4 pb-4 space-y-3 text-center">
          <Link 
            to="/" 
            onClick={toggleMenu} 
            className="block py-2 hover:text-cyan-400 transition"
          >
            Home
          </Link>
          <Link 
            to="/News" 
            onClick={toggleMenu} 
            className="block py-2 hover:text-cyan-400 transition"
          >
            News
          </Link>
          <Link 
            to="/About" 
            onClick={toggleMenu} 
            className="block py-2 hover:text-cyan-400 transition"
          >
            About
          </Link>
          <Link 
            to="/Contact" 
            onClick={toggleMenu} 
            className="block py-2 hover:text-cyan-400 transition"
          >
            Contact
          </Link>

          {isloggedin ? (
            <button
              onClick={() => {
                logoutbtn()
                toggleMenu()
              }}
              className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                loginbtn()
                toggleMenu()
              }}
              className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
