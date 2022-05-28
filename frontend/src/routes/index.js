import Login from '../page/Authen/Login'
import Register from '../page/Authen/Register'
import Home from '../page/Home'

export const publicRoutes = [
    {path: '/', element: Login},
    {path: '/register', element: Register},
    {path: '/home', element: Home}
]

export const privateRoutes = [
    
]
