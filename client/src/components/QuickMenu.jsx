


import React, { useEffect } from "react";

const QuickMenu = () => {
  useEffect(() => {
    // Initialise les tooltips Bootstrap 5
    const tooltipTriggerList = Array.from(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach(
      (tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl)
    );
  }, []);

  return (
    <nav className="shortcut-menu  d-none d-sm-block ">
  <input type="checkbox" className="menu-open" name="menu-open" id="menu_open" />
  <label htmlFor="menu_open" className="menu-open-button ">
    <span className="app-shortcut-icon d-block" />
  </label>
  <a href="#" className="menu-item btn" data-toggle="tooltip" data-placement="left" title="Scroll Top">
    <i className="fal fa-arrow-up" />
  </a>
  <a href="page_login_alt.html" className="menu-item btn" data-toggle="tooltip" data-placement="left" title="Logout">
    <i className="fal fa-sign-out" />
  </a>
  <a href="#" className="menu-item btn" data-action="app-fullscreen" data-toggle="tooltip" data-placement="left" title="Full Screen">
    <i className="fal fa-expand" />
  </a>
  <a href="#" className="menu-item btn" data-action="app-print" data-toggle="tooltip" data-placement="left" title="Print page">
    <i className="fal fa-print" />
  </a>
  <a href="#" className="menu-item btn" data-action="app-voice" data-toggle="tooltip" data-placement="left" title="Voice command">
    <i className="fal fa-microphone" />
  </a>
</nav>

  );
};

export default QuickMenu;

