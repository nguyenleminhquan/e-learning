import React from 'react'
import '../../css/HomePage/HeaderNavigation.css'

function HeaderNavigation() {
  return (
    <div className='navigation d-flex justify-content-between'>
        <div className="navigation__search">
            <input type='text' className='navigation__search-input' />
            <i className="navigation__search-icon bi bi-search"></i>
        </div>
        <div className="navigation__wrap">
            <i className="bi bi-bell"></i>
            <div className="d-flex align-items-center">
                <div className="user-avatar">
                    <span>T</span>
                </div>
                <i className="bi bi-chevron-down"></i>
            </div>
        </div>
    </div>
  )
}

export default HeaderNavigation