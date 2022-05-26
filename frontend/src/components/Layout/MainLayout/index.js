import React from 'react'
import classNames from "classnames/bind"

import Sidebar from './Sidebar'
import Status from './Status'
import Header from './Header'
import styles from './MainLayout.module.scss'

const cx = classNames.bind(styles)

function MainLayout({ children }) {
    return (
        <div className={cx('container')}>
            <Sidebar />
            <div className={cx('content')}>
                <Status />
                { children }
            </div>
            <div className={cx('right-sidebar')}>
                <Header />
                <div>
                    {/* Deadlines */}
                    {/* Timelines */}
                </div>
            </div>
        </div>
    )
}

export default MainLayout
