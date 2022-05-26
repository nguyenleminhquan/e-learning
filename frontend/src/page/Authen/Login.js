import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import className from 'classnames/bind'
import styles from './Login.module.scss'
import { login } from '../../redux/AuthenRedux/action'

const cx = className.bind(styles)

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { register, handleSubmit, formState: {errors} } = useForm()
    const [showPassword, setShowPassword] = useState(false)

    const failureMsg = useSelector(state => state.authen.failureMsg)
    const iconHide = showPassword ? 'psw-toggle bi bi-dash-circle' : 'psw-toggle bi bi-circle'
    
    const onSubmit = data => {
        dispatch(login(data))

        if (failureMsg === '') {
            setTimeout(() => {
                navigate('/homepage')
            }, 2000)
        }
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()

        const data = {username, password}
        dispatch(login(data))

        navigate('/home')
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h2 className={cx('title')}>Login</h2>
                <form className={cx('form')} onSubmit={handleSubmitForm}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username"
                            placeholder="Enter your username" 
                            required
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div> 
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            placeholder="Enter your password" 
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div> 
                    <div>
                        <a href="">Forgot password</a>
                        <button>Login</button>
                    </div> 
                </form>
            </div>
        </div>
    )
}

export default Login
