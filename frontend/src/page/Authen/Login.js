import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import className from 'classnames/bind'

import Button from "../../components/Button"
import styles from './Login.module.scss'
import { login } from '../../redux/AuthenRedux/action'

const cx = className.bind(styles)

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authenStore = useSelector(state => state.authen)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { register, handleSubmit, formState: {errors} } = useForm()
    const [showPassword, setShowPassword] = useState(false)

    // const onSubmit = data => {
    //     dispatch(login(data))

    //     if (authenStore.failureMsg === '') {
    //         setTimeout(() => {
    //             navigate('/homepage')
    //         }, 2000)
    //     }
    // }

    const handleSubmitForm = (e) => {
        e.preventDefault()

        const data = {username, password}
        dispatch(login(data))
    }

    useEffect(() => {
        if (authenStore.loginSuccess) {
            navigate('/home')
        }
    })

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h2 className={cx('title')}>Login</h2>
                <span className={cx('errMsg')}>{authenStore.failureMsg && authenStore.failureMsg}</span>
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
                            type={showPassword ? 'text' : 'password'} 
                            id="password"
                            placeholder="Enter your password" 
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <div 
                            className={cx('toggle-password')} 
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeSlash} />}
                        </div>
                    </div> 
                    <div>
                        <a href="">Forgot password</a>
                        <Button rounded primary>Login</Button>
                    </div> 
                </form>
            </div>
        </div>
    )
}

export default Login
