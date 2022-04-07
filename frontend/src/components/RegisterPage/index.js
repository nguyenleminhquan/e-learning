import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import { register } from "../../redux/authenRedux/authenActions"
import Header from "../Header"
import Footer from "../Footer"
import '../../css/RegisterPage/index.css'

function RegisterPage() {
    console.log('Register page re-render')
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: {errors} } = useForm()
    const [role, setRole] = useState('')
    const [gender, setGender] = useState('')
    const failureMsg = useSelector(state => state.failureMsg)
    
    const onSubmit = data => {
        const userInfo = {...data, role, gender}
        dispatch(register(userInfo))

        if (failureMsg === '') {
            setTimeout(() => {
                navigate('/')
            }, 2000)
        }
    }
    return (
        <div className="register-page">
            <Header />
            <div className="register-form mx-auto">
                <p className="fs-1 text-center pt-3 pb-3">Register</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex pb-3">
                        <div className="me-2">
                            <label htmlFor="firstname" className="form-label">First Name</label>
                            <input 
                                id="firstname"
                                className="form-control"
                                type="text"
                                placeholder="Enter your first name"
                                {...register('firstname', {
                                    required: 'This is required'
                                })}
                            />
                            <p className="error-msg">{errors.firstname?.message}</p>
                        </div>
                        <div>
                            <label htmlFor="lastname" className="form-label">Last Name</label>
                            <input 
                                id="lastname"
                                className="form-control"
                                type="text"
                                placeholder="Enter your last name"
                                {...register('lastname', {
                                    required: 'This is required'
                                })}
                            />
                            <p className="error-msg">{errors.lastname?.message}</p>
                        </div>
                    </div>
                    <div className="pb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input 
                            id="username"
                            className="form-control"
                            type="text"
                            placeholder="Enter your username"
                            {...register('username', {
                                required: 'This is required'
                            })}
                        />
                        <p className="error-msg">{errors.username?.message}</p>
                    </div>

                    <div className="pb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            id="password"
                            className="form-control"
                            type="password"
                            placeholder="Enter your password"
                            {...register('password', {
                                required: 'This is required'
                            })}
                        />
                        <p className="error-msg">{errors.password?.message}</p>
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
                            {...register('dob', {
                                required: 'This is required'
                            })}
                        />
                        <p className="error-msg">{errors.dob?.message}</p>
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