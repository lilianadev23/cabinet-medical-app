import React from 'react'

const NavHeader = () => {
  return (
   <div className="page-logo">
  <a href="#" className="page-logo-link press-scale-down d-flex align-items-center position-relative" data-toggle="modal" data-target="#modal-shortcut">
    <img src="./public/AdminKit/img/logo.png" alt="SmartAdmin WebApp" aria-roledescription="logo" />
    <span className="page-logo-text mr-1">SmartAdmin WebApp</span>
    <span className="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2" />
    <i className="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300" />
  </a>
</div>

  )
}

export default NavHeader