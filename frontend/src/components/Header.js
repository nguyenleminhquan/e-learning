import {Routes, Route, Link} from 'react-router-dom'
import RegisterModal from './RegisterModal'

import '../css/Header.css'
import { useState } from 'react'

function Header() {
    const [target, setTarget] = useState('/register')
    const [status, setStatus] = useState('Đăng kí')

    const handleClick = () => {
        if (target === '/register') {
            setTarget('/')
            setStatus('Đăng nhập')
        }
        else {
            setTarget('/register')
            setStatus('Đăng kí')
        }
    }

    return (
        <div className="header">
            <Link className="header__logo-wrap" to='/'>
                <div className='header__logo_icon'><span>E</span></div>
                <span className='header__logo_name'>learning</span>
            </Link>
            <Link 
                to={target} 
                onClick={handleClick}
                className="header__link"
            >{status}</Link>
        </div>
    )
}

export default Header