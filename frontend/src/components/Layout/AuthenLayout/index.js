import classNames from 'classnames/bind'
import styles from './AuthenLayout.module.scss'
import Header from './Header'
import Footer from './Footer'

const cx = classNames.bind(styles)

function AuthenLayout({children}) {
    return (
        <div className={cx('container')}>
            <Header />
            <div className={cx('content')}>
                { children }
            </div>
            <Footer />
        </div>
    )
}

export default AuthenLayout
