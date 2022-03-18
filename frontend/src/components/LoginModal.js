import { useState} from 'react'
import { Route, useNavigate } from 'react-router-dom'

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import Mypage from './Mypage'
import '../css/LoginModal.css'  

function LoginModal() {
    const [success, setSuccess] = useState(false)
    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')
    const [errorMsgs, setErrorMsgs] = useState({})

    const navigate = useNavigate()

    var db = []
    // useEffect(() => {
    //     fetch('http://localhost:3333/accounts')
    //         .then(res => res.json())
    //         .then(data => {
    //             db = data
    //         })
    // }, [])

    const database = [
        {
            username: 'tai123',
            pwd: "tai123"
        },
        {
            username: 'omg',
            pwd: '123'
        }
    ]

    // console.log(db)

    const handleSubmit = (e) => {
        e.preventDefault()

        const inputData = {username, pwd}
        const userData = database.find(user => user.username === inputData.username)

        if (userData) {
            if (userData.pwd !== inputData.pwd) {
                // invalid password
                setErrorMsgs({
                    name: 'pass',
                    msg: 'invalid password'
                })
            } else {
                setSuccess(true)
                navigate('/mypage')
            }
        } else {
            // Username not found
            setErrorMsgs({
                name: 'uname',
                msg: 'Invalid Username',
            })
        }
    }

    const renderErrorMessage = (name) => (
        name === errorMsgs.name && (
            <div className='error'>{errorMsgs.msg}</div>
        )
    )

    return (
        <div className="login-modal container-sm p-5">
            {success ? (
                <></>
            ):
            (
                <>
                    <p className='login__title fs-2 fw-bold text-center mb-3'>Đăng nhập</p>
                    <form onSubmit={handleSubmit}>
                        <div className='mt-2 mb-2'>
                            <label x
                                htmlFor='username'
                                className="form-label col-sm-2 col-form-label fw-bold"
                            >Tên tài khoản</label>
                            <input 
                                className='form-control'
                                id='username'
                                type='text'
                                placeholder='Tên tài khoản của bạn'
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                            {renderErrorMessage('uname')}
                        </div>
                        <div className='mt-2 mb-2'>
                            <label 
                                htmlFor='password'
                                className="form-label col-sm-2 col-form-label fw-bold"
                            >Mật khẩu</label>
                            <input 
                                className='form-control'
                                id='password'
                                type='password'
                                placeholder='Mật khẩu'
                                value={pwd}
                                onChange={e => setPwd(e.target.value)}
                            />
                            {renderErrorMessage('pass')}
                        </div>
                        <div className='mt-3 mb-3 d-flex justify-content-between align-items-center'>
                            <a href='#' className='link-danger'>Quên mật khẩu</a>
                            <button className='btn btn-primary'>Đăng nhập</button>
                        </div>
                    </form>
                </>
            )}
        </div>
    )
}

export default LoginModal

// const theme = createTheme();

// function LoginModal() {
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         const data = new FormData(e.currentTarget)
//         console.log({
//             email: data.get('email'),
//             password: data.get('password')
//         })
//     }

//     return (
//         <ThemeProvider theme={theme}>
//             <Container component="main" maxWidth="xs">
//                 <CssBaseline />
//                 <Box 
//                     sx={{
//                         marginTop: 8,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                         <LockOutlinedIcon />
//                     </Avatar>
//                     <Typography component="h1" variant="h5">Sign in</Typography>
//                     <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//                         <TextField 
//                             margin="normal"
//                             required
//                             fullWidth
//                             id="email"
//                             label="Email Address"
//                             name="email"
//                             autoComplete="email"
//                             autoFocus
//                         />
//                         <TextField 
//                             margin="normal"
//                             required
//                             fullWidth
//                             name="password"
//                             label="Password"
//                             type="password"
//                             id="password"
//                             autoComplete="current-password"
//                         />
//                         <FormControlLabel 
//                             control={<Checkbox value="remember" color="primary" />}
//                             label="Remember me"
//                         />
//                         <Button
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             sx={{mt:3, mb:2}}
//                         >Sign In</Button>
//                         <Grid container>
//                             <Grid item xs>
//                                 <Link href="#" variant="body2">Forgot password?</Link>
//                             </Grid>
//                             <Grid item>
//                                 <Link href="#" variant="body2">{"Dont have an account? Sign Up"}</Link>
//                             </Grid>
//                         </Grid>
//                     </Box>
//                 </Box>
//             </Container>
//         </ThemeProvider>
//     )
// }

// export default LoginModal