import {useState} from 'react'
import Login from './Login'
import Register from './Register'

function Authen() {
    const [isLogin, setIsLogin] = useState(true)
    return isLogin ? <Login /> : <Register />
}

export default Authen
