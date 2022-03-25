import React from 'react'
import Logo from '../../img/Logo.png'

import '../../css/HomePage/Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar text-white'>
        <div className="sidebar__wrap">
            <img src={Logo} className='sidebar__logo mb-4' />
            <ul className="sidebar__feature-lists">
                <li className='mb-5'>
                    <a href="#" className='sidebar__feature-link'><i className="bi bi-house-door"></i></a>
                </li>
                <li className='mb-5'>
                    <a href="#" className='sidebar__feature-link'><i className="bi bi-person"></i></a>
                </li>
                <li className='mb-5'>
                    <a href="#" className='sidebar__feature-link'><i className="bi bi-envelope"></i></a>
                </li>
                <li className='mb-5'>
                    <a href="#" className='sidebar__feature-link'><i className="bi bi-gear"></i></a>
                </li>
            </ul>
        </div>
        <div className='side__logout'>
            <a href="#" className='side__logout-link'><i className="bi bi-box-arrow-right"></i></a>
        </div>
    </div>
  )
}

export default Sidebar