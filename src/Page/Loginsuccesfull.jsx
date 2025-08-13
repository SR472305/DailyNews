import React from 'react'
import { useSelector } from 'react-redux'
import  Home  from './Home'

const Loginsuccesfull = () => {
  const islogout =  useSelector(state => state.auth.islogout)
  return (
    <div >
       <div>
          <Home />
       </div>

    </div>
  )
}

export default Loginsuccesfull
