import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postNewUserInfo } from "../../redux/authenRedux/authenActions"
import Header from "../Header"
import Footer from "../Footer"
import '../../css/RegisterPage/index.css'

function RegisterPage() {
    console.log('Register page re-render')
    
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')

    const [errorMsg, setErrorMsg] = useState('')
    
    const handleSubmit = event => {
        event.preventDefault()
        
        const userInfo = { firstname, lastname, username, password, role, dob, gender }
        dispatch(postNewUserInfo(userInfo))

        if (user.status === 400) {
            setErrorMsg(user.msg)
        } 
    }
    return (
        <div className="">
            <Header />
            <div className="register-page mx-auto">
                {errorMsg ?? <div className="error-msg">{errorMsg}</div>}
                <p className="fs-1 text-center pt-3 pb-3">Register</p>
                <form onSubmit={handleSubmit}>
                    <div className="d-flex pb-3">
                        <div className="me-2">
                            <label htmlFor="firstname" className="form-label">First Name</label>
                            <input 
                                id="firstname"
                                className="form-control"
                                type="text"
                                placeholder="Enter your first name"
                                value={firstname}
                                onChange={e => setFirstname(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastname" className="form-label">Last Name</label>
                            <input 
                                id="lastname"
                                className="form-control"
                                type="text"
                                placeholder="Enter your last name"
                                value={lastname}
                                onChange={e => setLastname(e.target.value)}
                                required
                            />
                        </div>
                    </div>
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
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="d-flex align-items-center pb-3">
                        <span className="me-5">Role</span>
                        <div onChange={e => setRole(e.target.value)}>
                            <input type="radio" name="role" value="student" checked /> Student
                            <input type="radio" name="role" value="teacher" /> Teacher
                        </div>

                    </div>
                    
                    <div className="pb-3">
                        <label htmlFor="dob" className="form-label">Date of birth</label>
                        <input 
                            id="dob"
                            className="form-control"
                            type="date"
                            placeholder="Enter your date of birth"
                            value={dob}
                            onChange={e => setDob(e.target.value)}
                            required
                        />
                    </div>

                    <div className="d-flex pb-3">
                        <span className="me-5">Gender</span>
                        <div onChange={e => setGender(e.target.value)}>
                            <input type="radio" name="gender" value="male" checked/> Male
                            <input type="radio" name="gender" value="female" /> Female
                        </div>
                    </div>

                    <button className="btn btn-primary w-100">Register</button>
                </form>
            </div>
            <Footer />
        </div>
    )   
}

export default RegisterPage