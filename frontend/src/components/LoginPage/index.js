import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Header from '../Header'
import Footer from '../Footer'
import { login } from "../../redux/authenRedux/authenActions"

import '../../css/LoginPage/index.css'
import { useNavigate } from "react-router-dom"

function LoginPage() {
    console.log('Login Page re-render')
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const user = useSelector(state => state.user)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState({
        psw: '',
        showPsw: false
    })

    const iconHide = password.showPsw ? 'bi bi-dash-circle' : 'bi bi-circle'
    const [errorMsg, setErrorMsg] = useState('')
    
    const handleSubmit = event => {
        event.preventDefault()

        const userInfo = {
            username, 
            password: password.psw
        }

        dispatch(login(userInfo))

        if (user.status === 400) {
            setErrorMsg(user.msg)
        } else {
            navigate('/homepage')
        }
    }

    return (
        <div className="login-page">
            <Header />
            <div className="login-form mx-auto">
                {errorMsg ?? <div className="error-msg">{errorMsg}</div>}
                <p className="fs-1 text-center pt-3 pb-3">Login</p>
                <form onSubmit={handleSubmit}>
                    <div className="pb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input 
                            id="username"
                            className="form-control"
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="pb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            id="password"
                            className="form-control"
                            type={password.showPsw ? 'text' : 'password'}
                            placeholder="Enter your password"
                            value={password.psw}
                            onChange={e => setPassword({...password, psw: e.target.value})}
                            required
                        />
                        <i className={iconHide} onClick={() => setPassword({...password, showPsw: !password.showPsw})}></i>
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