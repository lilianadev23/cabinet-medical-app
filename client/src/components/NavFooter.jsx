import React from 'react'

const NavFooter = () => {
  return (
   <div className="nav-footer shadow-top">
  <a href="#" onclick="return false;" data-action="toggle" data-class="nav-function-minify" className="hidden-md-down">
    <i className="ni ni-chevron-right" />
    <i className="ni ni-chevron-right" />
  </a>
  <ul className="list-table m-auto nav-footer-buttons">
    <li>
      <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Chat logs">
        <i className="fal fa-comments" />
      </a>
    </li>
    <li>
      <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Support Chat">
        <i className="fal fa-life-ring" />
      </a>
    </li>
    <li>
      <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Make a call">
        <i className="fal fa-phone" />
      </a>
    </li>
  </ul>
</div>

  )
}

export default NavFooter