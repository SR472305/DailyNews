import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Page/Layout'
import Home from './Page/Home'
import About from './Page/About'
import Contact from './Page/Contact'
import News from './Page/News'

const App = () => {

    let router = createBrowserRouter([{
        path:'/',
        element: <Layout />,
        children : [
           {path:'/', element:<Home/>},
           {path:'/News', element:<News/>},
           {path:'/About', element:<About/>},
           {path:'/Contact', element:<Contact/>}
        ]
    }])
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
      
    </div>
  )
}

export default App
