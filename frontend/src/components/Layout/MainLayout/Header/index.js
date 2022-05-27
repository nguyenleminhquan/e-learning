import classNames from "classnames/bind"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Avatar from '../../../Avatar'
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('search')}>
        <input type="text" />
        <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')}/>
      </div>
      <div className={cx('action')}>
        <FontAwesomeIcon icon={faBell}/>
        <div className={cx('user-option')}>
          <Avatar small text="T" />
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
    </div>
  )
}

export default Header
