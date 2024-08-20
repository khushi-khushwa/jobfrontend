

import Home from './components/Home'
import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/login/Login'
import Signup from './components/login/Signup'
function App() {
 
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
   
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    
  ])

  return (
    <>
    <div>
        <RouterProvider router = {appRouter} />
</div>
    </>
  )
}

export default App
