import Login from '../page/Authen/Login'
import Register from '../page/Authen/Register'
import CreateCourse from '../page/CreateCourse'
import Home from '../page/Home'
import ParticipateCourse from '../page/ParticipateCourse'

export const publicRoutes = [
    {path: '/', element: Login},
    {path: '/register', element: Register},
    {path: '/home', element: Home},
    {path: '/home/create', element: CreateCourse},
    {path: '/home/participate', element: ParticipateCourse},
]

export const privateRoutes = [
    
]
