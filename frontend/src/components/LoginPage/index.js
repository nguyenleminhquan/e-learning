import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import Header from '../Header'
import Footer from '../Footer'
import { login } from "../../redux/authenRedux/authenActions"

import '../../css/LoginPage/index.css'

function LoginPage() {
    console.log('Login Page re-render')
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: {errors} } = useForm()
    const [showPassword, setShowPassword] = useState(false)

    const failureMsg = useSelector(state => state.failureMsg)

    const iconHide = showPassword ? 'psw-toggle bi bi-dash-circle' : 'psw-toggle bi bi-circle'
    
    const onSubmit = data => {
        dispatch(login(data))

        if (failureMsg === '') {
            setTimeout(() => {
                navigate('/homepage')
            }, 2000)
        }
    }

    return (
        <div className="login-page">
            <Header />
            <div className="login-form mx-auto">
                <p className="fs-1 text-center pt-3 pb-3">Login</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="pb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input 
                            id="username"
                            className="form-control"
                            type="text"
                            placeholder="Enter your username"
                            {...register('username', {
                                required: 'This is required',
                                pattern: {
                                    value: /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/i,
                                    message: 'Username is not correct'
                                },
                            })}
                        />
                        <p className="error-msg">{errors.username?.message}</p>
                    </div>
                    <div className="pb-3 position-relative">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            id="password"
                            className="form-control"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            {...register('password', {
                                required: 'This is required', 
                                // pattern: {
                                //     // Mat khau toi thieu 4 ki tu, it nhat 1 ki tu viet hoa, 1 viet thuong, 1 so, 1 ky tu dac biet
                                //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/i,
                                //     message: 'Password is not correct',
                                // }
                            })}
                        />
                        <p className="error-msg">{errors.password?.message}</p>
                        <i className={iconHide} onClick={() => setShowPassword(!showPassword)}></i>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <a href="#">Forgot Password</a>
                        <button className="btn btn-primary">Sign in</button>
                    </div>

                </form>
            </div>
            <Footer />
        </div>
    )
}

export default LoginPage
