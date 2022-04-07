import { useEffect, useState } from "react"

import '../../css/HomePage/HeaderStatus.css' 

function HeaderStatus() {
    const [name, setName] = useState('Tran Phuoc Tai')
    const [time, setTime] = useState('Morning')

    useEffect(() => {

    }, [])
    return (
        <div className="header-status d-flex justify-content-between">
            <div className="header-status__text">
                <h3>Hello {name}</h3>
                <p>Good {time}</p>
            </div>
            <div className="header-status__avatar">
                <span className="fs-5 text-white">T</span>
            </div>
        </div>
    )
}

export default HeaderStatus