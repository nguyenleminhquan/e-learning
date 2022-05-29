import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
// import { useForm } from 'react-hook-form'
import className from 'classnames/bind'

import Button from "../../components/Button"
import { login } from '../../redux/AuthenRedux/action'
import styles from './Login.module.scss'

const cx = className.bind(styles)

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authenStore = useSelector(state => state.authen)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [errMsg, setErrMsg] = useState('')
    // const { register, handleSubmit, formState: {errors} } = useForm()

    // const onSubmit = data => {
    //     console.log(data)
    //     dispatch(login(data))
    // }

    const handleChangeUsername = e => {
        setUsername(e.target.value)
        setErrMsg('')
    }

    const handleChangePassword = e => {
        setPassword(e.target.value)
        setErrMsg('')
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()

        const data = { username, password }
        dispatch(login(data))
    }
    
    useEffect(() => {
        if (authenStore.loginSuccess) {
            // setUsername('')
            // setPassword('')
            navigate('/home')
        }
    })

    useEffect(() => {
        setErrMsg(authenStore.failureMsg)
    }, [authenStore.failureMsg])

    useEffect(() => {
        document.title = 'Login'
    }, [])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h2 className={cx('title')}>Login</h2>
                <span className={cx('errMsg')}>{errMsg && errMsg}</span>
                {/* Validate form: onSubmit={handleSubmit(onSubmit)} */}
                <form className={cx('form')} onSubmit={handleSubmitForm}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username"
                            placeholder="Enter your username" 
                            required
                            value={username}
                            onChange={handleChangeUsername}
                            
                            // Validate form
                            // {...register('username', {
                            //     required: 'This is required',
                            //     pattern: {
                            //         value: /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/i,
                            //         message: 'Username is not correct'
                            //     },
                            // })}
                        />
                    </div> 
                    {/* <p className="error-msg">{errors.username?.message}</p> */}
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            type={showPassword ? 'text' : 'password'} 
                            id="password"
                            placeholder="Enter your password" 
                            required
                            value={password}
                            onChange={handleChangePassword}
                            
                            // Validate form 
                            // {...register('password', {
                            //     required: 'This is required', 
                            //     // pattern: {
                            //     //     // Mat khau toi thieu 4 ki tu, it nhat 1 ki tu viet hoa, 1 viet thuong, 1 so, 1 ky tu dac biet
                            //     //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/i,
                            //     //     message: 'Password is not correct',
                            //     // }
                            // })}
                        />
                        <div 
                            className={cx('toggle-password')} 
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeSlash} />}
                        </div>
                    </div> 
                    {/* <p className="error-msg">{errors.password?.message}</p> */}
                    <div>
                        <a href="/">Forgot password</a>
                        <Button rounded primary>Login</Button>
                    </div> 
                </form>
            </div>
        </div>
    )
}

export default Login
