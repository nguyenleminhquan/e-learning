import classNames from "classnames/bind"
import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

function Footer() {
  return (
    <footer className={cx('wrapper')}>
      <div className={cx('content')}>
        <h3>About</h3>
        <h3>Contact</h3>
      </div>
    </footer>
  )
}

export default Footer
