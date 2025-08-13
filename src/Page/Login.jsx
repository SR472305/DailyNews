import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/features/Authslices'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user, error, isloggedin } = useSelector((state) => state.auth)

    const userhandler = (e) => {
        e.preventDefault()
        dispatch(login({ username, password }))
        console.log(username, password);
    }

    useEffect(() => {
        if (user) {
            navigate('/Loginsuccesfull')
        }
    }, [user, navigate])


    return (
        <div>

            <form action="" className='Login-Form' onSubmit={userhandler}>
                <h1 className='Form-title'>Login page</h1>

                <div className='input-section'>
                    <label htmlFor="username">Username :</label>
                    <input type="text" className='input-box' onChange={(e) => setusername(e.target.value)} /> <br />
                </div>

                <div className='input-section'>
                    <label htmlFor="password">Password :</label>
                    <input type="password" className='input-box' onChange={(e) => setpassword(e.target.value)} />
                </div>

                {isloggedin && <div className='text-green-500 text-center'>login successfully</div>}

                {error && <div className='text-red-600 text-center'>{error}</div>}

                <div className='BTN'>
                    <button>Submit</button>
                </div>

            </form>


        </div>
    )
}

export default Login
