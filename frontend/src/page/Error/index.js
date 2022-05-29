import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faQuestionCircle} from '@fortawesome/free-regular-svg-icons'
import classNames from "classnames/bind"
import styles from './Error.module.scss'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const cx = classNames.bind(styles)

function Error() {
    const navigate = useNavigate()
    const [count, setCount] = useState(5)

    setTimeout(() => {
        setCount(count-1)
        if (count === 0) navigate('/')
    }, 1000)

    return (
        <div className={cx('wrapper')}>
            <div className={cx('status')}>
                <span>4</span>
                <FontAwesomeIcon className={cx('icon')} icon={faQuestionCircle} />
                <span>4</span>
            </div>
            <div className={cx('message')}>
                <span>You have not logged in before! We will redirect you back to Login page in {count}s or click here to back now</span>
            </div>
        </div>
    )
}

export default Error
