import Login from '../page/Authen/Login'
import Register from '../page/Authen/Register'
import CreateCourse from '../page/CreateCourse'
import Home from '../page/Home'

export const publicRoutes = [
    {path: '/', element: Login},
    {path: '/register', element: Register},
    {path: '/home', element: Home},
    {path: '/create', element: CreateCourse},
]

export const privateRoutes = [
    
]
