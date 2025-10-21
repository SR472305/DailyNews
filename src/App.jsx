import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Page/Layout'
import Home from './Page/Home'
import About from './Page/About'
import Contact from './Page/Contact'
import News from './Page/News'
import Login from './Page/Login'
import Loginsuccesfull from './Page/Loginsuccesfull'

const App = () => {

    let router = createHashRouter([{
        path:'/',
        element: <Layout />,
        children : [
           {path:'', element:<Home/>},
           {path:'News', element:<News/>},
           {path:'About', element:<About/>},
           {path:'Contact', element:<Contact/>},
           {path:'Login', element:<Login/>},
           {path:'Loginsuccesfull', element:<Loginsuccesfull/>}
          
        ]
    }])
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
      
    </div>
  )
}

export default App
