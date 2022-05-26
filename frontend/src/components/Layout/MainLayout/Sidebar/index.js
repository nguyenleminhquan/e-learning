import React from 'react'
import className from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGear, faHouse, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import styles from './Sidebar.module.scss'
import images from '../../../../assets/images'

const cx = className.bind(styles)

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('navigate')}>
                <img src={images.logo.default} alt="E-learning 1.0" width='70%' />
                <ul>
                    <li>
                        <a href="#"><FontAwesomeIcon icon={faHouse}/></a>
                    </li>
                    <li>
                        <a href="#"><FontAwesomeIcon icon={faUser}/></a>
                    </li>
                    <li>
                        <a href="#"><FontAwesomeIcon icon={faEnvelope}/></a>
                    </li>
                    <li>
                        <a href="#"><FontAwesomeIcon icon={faGear}/></a>
                    </li>
                </ul>
            </div>
            <div className={cx('logout')}>
                <FontAwesomeIcon icon={faRightFromBracket}/>
            </div>
        </div>
    )
}

export default Sidebar
