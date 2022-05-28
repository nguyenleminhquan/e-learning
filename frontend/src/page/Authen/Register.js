import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { useForm } from 'react-hook-form'
import className from 'classnames/bind'
import styles from './Register.module.scss'
import { useNavigate } from "react-router-dom"
import { register } from '../../redux/AuthenRedux/action'
import Button from '../../components/Button'

const cx = className.bind(styles)

function Register() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const authenStore = useSelector(state => state.authen)
    const [errMsg, setErrMsg] = useState('')
    // const { register, handleSubmit, formState: {errors} } = useForm()
    const [userInfo, setUserInfo] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        gender: 'male',
        dob: '',
        role: 'student',
    })
    
    // const onSubmit = data => {
    //     const userInfo = {...data, role, gender}
    //     dispatch(register(userInfo))

    //     if (failureMsg === '') {
    //         setTimeout(() => {
    //             navigate('/')
    //         }, 2000)
    //     }
    // }

    const handleSubmitForm = e => {
        e.preventDefault()  
        dispatch(register(userInfo))
    }

    useEffect(() => {
        if (authenStore.registerSuccess) {
            navigate('/')
        }
    })

    useEffect(() => {
        setErrMsg(authenStore.failureMsg)
    }, [authenStore.failureMsg])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h2 className={cx('title')}>Register</h2>
                <span className={cx('errMsg')}>{errMsg && errMsg}</span>
                <form className={cx('form')} onSubmit={handleSubmitForm}>
                    <div className={cx('form-wrap')}>
                        <label htmlFor="name">Name</label>
                        <div className={cx('name-wrap')}>
                            <input 
                                required
                                type="text"
                                name="name"
                                placeholder="First Name"
                                value={userInfo.firstname}
                                onChange={(e) => setUserInfo({
                                    ...userInfo,
                                    firstname: e.target.value
                                })}
                            />
                            <input 
                                required
                                type="text" 
                                name="name"
                                placeholder="Last Name"
                                value={userInfo.lastname}
                                onChange={e => setUserInfo({
                                    ...userInfo,
                                    lastname: e.target.value
                                })}
                            />

                        </div>
                    </div>

                    <div className={cx('form-wrap')}>
                        <label htmlFor="username">Username</label>
                        <input 
                            required
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={userInfo.username}
                            onChange={e => setUserInfo({
                                ...userInfo,
                                username: e.target.value
                            })}
                        />
                    </div>

                    <div className={cx('form-wrap')}>
                        <label htmlFor="password">Password</label>
                        <input 
                            required
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={userInfo.password}
                            onChange={e => setUserInfo({
                                ...userInfo,
                                password: e.target.value
                            })}
                        />
                    </div>

                    <div className={cx('form-wrap')} onChange={e => {setUserInfo(e.target.value)}}>
                        <label htmlFor="gender">Gender</label>
                        <div className={cx('radio-wrap')}>
                            <input type="radio" name="gender" value='male' defaultChecked />
                            <span>Male</span>
                        </div>
                        <div className={cx('radio-wrap')}>
                            <input type="radio" name="gender" value='female' />
                            <span>Female</span>
                        </div>
                    </div>

                    <div className={cx('form-wrap')}>
                        <label htmlFor="dob">Date of birth</label>
                        <input 
                            required
                            type="date" 
                            name="dob"
                            placeholder="Date of birth" 
                            value={userInfo.dob}
                            onChange={e => setUserInfo({
                                ...userInfo,
                                dob: e.target.value
                            })}
                        />
                    </div>

                    <div className={cx('form-wrap')} onChange={e => {setUserInfo(e.target.value)}}>
                        <label htmlFor="role">Role</label>
                        <div className={cx('radio-wrap')}>
                            <input type="radio" name="role" value='student' defaultChecked />
                            <span>Student</span>
                        </div>
                        <div className={cx('radio-wrap')}>
                            <input type="radio" name="role" value='teacher' />
                            <span>Teacher</span>
                        </div>
                    </div>

                    <div className={cx('btn-wrap')}>
                        <Button primary rounded fullWidth>Register</Button>
                    </div>
                </form>
            </div>
        </div>
    )   
}

export default Register
