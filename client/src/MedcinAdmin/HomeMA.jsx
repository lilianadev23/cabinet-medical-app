import React from "react";
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavHeader from '../components/NavHeader'
import NavBar from '../components/NavBar'
import NavFooter from '../components/NavFooter'
import Users from '../pages/Users'
import Header from '../components/Header'
import MainPage from '../components/MainPage'
import FooterPage from '../components/FooterPage'
import Shortcuts from '../components/Shortcuts'
import ColorProfile from '../components/ColorProfile'

import QuickMenu from '../components/QuickMenu'
import Messenger from '../components/Messenger'
import PageSettings from '../components/PageSettings'
import DashBord from '../components/DashBord'

const HomeMA = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/api/users');
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <BrowserRouter>
    <div className="mod-bg-1 ">
      <div className="page-wrapper">
        <div className="page-inner">
          {/* BEGIN Left Aside */}
          <aside className="page-sidebar">
          <NavHeader />
          <NavBar />
          <NavFooter />
          </aside>
          {/* END Left Aside */}
          {/* BEGIN Page Content Wrapper */}
          <div className="page-content-wrapper">
            {/* BEGIN Page Header */}
            <Header />
            {/* END Page Header */}

            {/* BEGIN Page Content */}
            <main id="js-page-content" role="main" className="page-content">
         
            <Routes>
            <Route path="/" element={<DashBord />}/>
            <Route path="/users" element={<Users users={users} refreshUsers={fetchUsers} />}/>
            </Routes>
            
            
            
            </main>
           
            {/* this overlay is activated only when mobile menu is triggered */}
            <div
              className="page-content-overlay"
              data-action="toggle"
              data-class="mobile-nav-on"
            ></div>

            {/* END  Page Content */}
            {/* BEGIN Page Footer */}
            <FooterPage />
            {/* END Page Footer */}

            {/* BEGIN Shortcuts */}
            <Shortcuts />
            {/* End Shortcuts */}

            {/* BEGIN Color profile */}

            {/* this area is hidden and will not be seen on screens or screen readers */}
            {/* we use this only for CSS color refernce for JS stuff */}
            <ColorProfile />
            {/* END Color profile */}
          </div>
          {/* END Page Content Wrapper */}
        </div>
      </div>
      {/* END Page Wrapper */}

      {/* BEGIN Quick Menu */}

      {/* to add more items, please make sure to change the variable '$menu-items: number;' in your _page-components-shortcut.scss */}
      <QuickMenu />
      
      {/* END Quick Menu */}

      {/* BEGIN Messenger */}
      <Messenger />
      {/* END Messenger */}

      {/* BEGIN Page Settings */}
      <PageSettings />
      {/* END Page Settings */}
    </div>
    </BrowserRouter>
  );
};

export default HomeMA;
