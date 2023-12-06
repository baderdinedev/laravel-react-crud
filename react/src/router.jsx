import {Navigate, createBrowserRouter} from 'react-router-dom'
import Login from './view/Login'
import Users from './view/Users'
import Signup from './view/Signup'
import NotFound from './view/NotFound'
import DefaultLayout from './components/DefaultLayout'
import GuestLayout from './components/GuestLayout'
import Dashboard from './view/Dashboard'

const router = createBrowserRouter( [
  {
    path:'*',
    element:<NotFound />
  },
  {
    path:'/',
    element: <DefaultLayout />,
    children:[
        {
            path:'/',
            element: <Navigate to="/users" />
        }, 
        {
            path:'/dashboard',
            element: <Dashboard />
        },   
        {
            path:'/users',
            element: <Users />
        },       
    ]
  },
  {
    path:'/',
    element: <GuestLayout />,
    children:[
        {
            path:'/login',
            element: <Login />
        },
        {
            path:'/signup',
            element: <Signup />
        },
    ]
  },
])

export default router