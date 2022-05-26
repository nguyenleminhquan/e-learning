import classNames from "classnames/bind"
import { useState } from "react"
import Avatar from "../../../Avatar"
import styles from './Status.module.scss'

const cx = classNames.bind(styles)

function Status() {
    // Get info from localStorage and save into useState
    const [name, setName] = useState('Tran Phuoc Tai')
    const [time, setTime] = useState('Morning')

    return (
        <div className={cx("wrapper")}>
            <div className={cx('text')}>
                <h3>Hello {name}</h3>
                <p>Good {time}</p>
            </div>
            <Avatar 
                width='70' 
                height='70' 
                backgroundColor='red' 
                fontSize='2' 
                name='T'
            />
        </div>   
    )
}

export default Status

