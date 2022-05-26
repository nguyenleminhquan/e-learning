import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import className from 'classnames/bind'
import styles from './Header.module.scss'
import images from '../../../../assets/images'
// import { useDispatch, useSelector } from 'react-redux'
// import Logo from '../img/Logo.png'
// import { setCurrentAuthenPage } from '../redux/authenRedux/authenActions'

const cx = className.bind(styles)

function Header() {
//   const isRegistering = useSelector(state => state.isRegistering)
//   const dispatch = useDispatch()
  // let curPath = isRegistering ? '/' : '/register'
  return (
    <header className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('logo-wrap')}>
            <img src={images.logo.default} alt="E-learning 1.0" />
            <span>learning</span>
        </div>
        <a href="/register" className={cx('authen-navigate')}>Register</a>
        {/* <Link 
          className='header__link'
          to={curPath}
          onClick={() => dispatch(setCurrentAuthenPage())}
        >
          {isRegistering ? 'Đăng nhập' : 'Đăng kí'}
        </Link> */}
      </div>
    </header>
  )
}

export default Header
