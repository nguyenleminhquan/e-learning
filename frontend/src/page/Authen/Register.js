import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from 'react-hook-form'
import className from 'classnames/bind'
import styles from './Register.module.scss'
import { useNavigate } from "react-router-dom"
import { register } from '../../redux/AuthenRedux/action'

const cx = className.bind(styles)

function Register() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const { register, handleSubmit, formState: {errors} } = useForm()

    const [userInfo, setUserInfo] = useState({
        firstname: '',
        lastname: '',
        password: '',
        role: 'student',
        dob: '',
        gender: 'male',
    })
    // const failureMsg = useSelector(state => state.failureMsg)
    
    const onSubmit = data => {
        // const userInfo = {...data, role, gender}
        // dispatch(register(userInfo))

        // if (failureMsg === '') {
        //     setTimeout(() => {
        //         navigate('/')
        //     }, 2000)
        // }
    }

    const handleSubmitForm = e => {
        e.preventDefault()

        dispatch(register(userInfo))
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h2 className={cx('title')}>Register</h2>
                <form className={cx('form')} onSubmit={handleSubmitForm}>
                    <div>
                        <input 
                            type="text"
                            placeholder="Firstname" 
                            value={userInfo.firstname}
                            onChange={e => setUserInfo({
                                ...userInfo,
                                firstname: e.target.value
                            })}
                        />
                        <input 
                            type="text"
                            placeholder="Lastname" 
                            value={userInfo.lastname}
                            onChange={e => setUserInfo({
                                ...userInfo,
                                lastname: e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            placeholder="Password"
                            value={userInfo.password}
                            onChange={e => setUserInfo({
                                ...userInfo,
                                password: e.target.value
                            })}
                        />
                    </div>
                    <div onChange={e => {setUserInfo(e.target.value)}}>
                        <label htmlFor="role">Role</label>
                        <input type="radio" name="role" value='student' defaultChecked /> Student
                        <input type="radio" name="role" value='teacher' /> Teacher
                    </div>
                    <div>
                        <input 
                            type="date" 
                            placeholder="Date of birth" 
                            value={userInfo.dob}
                            onChange={e => setUserInfo({
                                ...userInfo,
                                dob: e.target.value
                            })}
                        />
                    </div>

                    <div onChange={e => {setUserInfo(e.target.value)}}>
                        <label htmlFor="gender">Gender</label>
                        <input type="radio" name="gender" value='male' defaultChecked /> Male
                        <input type="radio" name="gender" value='female' /> Female
                    </div>

                    <div>
                        <button>Register</button>
                    </div>
                </form>
            </div>
            
        </div>
    )   
}

export default Register
