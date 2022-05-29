import React from 'react'
import { Link } from 'react-router-dom'
import className from 'classnames/bind'
import {useSelector, useDispatch} from 'react-redux'
import styles from './Header.module.scss'
import images from '../../../../assets/images'
import { setCurrentAuthenPage } from '../../../../redux/AuthenRedux/action'

const cx = className.bind(styles)

function Header() {
  const isRegistering = useSelector(state => state.authen.isRegistering)
  const dispatch = useDispatch()
  let curPath = isRegistering ? '/' : '/register'

  return (
    <header className={cx('wrapper')}>
      <div className={cx('content')}>
        <Link className={cx('logo-wrap')} to="/">
          <img src={images.logo.default} alt="E-learning 1.0" />
          <span>learning</span>
        </Link>
        <Link 
          className={cx('link')}
          to={curPath}
          onClick={() => dispatch(setCurrentAuthenPage())}
        >
          {isRegistering ? 'Login' : 'Register'}
        </Link>
      </div>
    </header>
  )
}

export default Header
