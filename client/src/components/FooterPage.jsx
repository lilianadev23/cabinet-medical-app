import React from 'react'

 const FooterPage = () => {
  return (
  <footer className="page-footer" role="contentinfo">
  <div className="d-flex align-items-center flex-1 text-muted">
    <span className="hidden-md-down fw-700">2019 © SmartAdmin by&nbsp;<a href="https://www.gotbootstrap.com" className="text-primary fw-500" title="gotbootstrap.com" target="_blank">gotbootstrap.com</a></span>
  </div>
  <div>
    <ul className="list-table m-0">
      <li><a href="intel_introduction.html" className="text-secondary fw-700">About</a></li>
      <li className="pl-3"><a href="info_app_licensing.html" className="text-secondary fw-700">License</a></li>
      <li className="pl-3"><a href="info_app_docs.html" className="text-secondary fw-700">Documentation</a></li>
      <li className="pl-3 fs-xl"><a href="https://wrapbootstrap.com/user/MyOrange" className="text-secondary" target="_blank"><i className="fal fa-question-circle" aria-hidden="true" /></a></li>
    </ul>
  </div>
</footer>

  )
}
export default FooterPage