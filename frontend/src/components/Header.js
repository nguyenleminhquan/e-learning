import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../img/Logo.png'
import { setCurrentAuthenPage } from '../redux/authenRedux/authenActions'
import '../css/Header.css'

function Header() {
  const isRegistering = useSelector(state => state.isRegistering)
  const dispatch = useDispatch()
  let curPath = isRegistering ? '/' : '/register'
  return (
    <div className="header d-flex justify-content-between align-items-center text-white">
        <div className="header__logo-wrap">
            <img src={Logo} />
            <span>learning</span>
        </div>
        <Link 
          className='header__link'
          to={curPath}
          onClick={() => dispatch(setCurrentAuthenPage())}
        >
          {isRegistering ? 'Đăng nhập' : 'Đăng kí'}
        </Link>
    </div>
  )
}

export default Header