import React from "react";
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav id="js-primary-nav" className="primary-nav" role="navigation">
      <div className="nav-filter">
        <div className="position-relative">
          <input
            type="text"
            id="nav_filter_input"
            placeholder="Filter menu"
            className="form-control"
            tabIndex={0}
          />
          <a
            href="#"
            onclick="return false;"
            className="btn-primary btn-search-close js-waves-off"
            data-action="toggle"
            data-class="list-filter-active"
            data-target=".page-sidebar"
          >
            <i className="fal fa-chevron-up" />
          </a>
        </div>
      </div>
      <div className="info-card">
        <img
          src="./public/AdminKit/img/demo/avatars/avatar-admin.png"
          className="profile-image rounded-circle"
          alt="Dr. Codex Lantern"
        />
        <div className="info-card-text">
          <a href="#" className="d-flex align-items-center text-white">
            <span className="text-truncate text-truncate-sm d-inline-block">
              Dr. Codex Lantern
            </span>
          </a>
          <span className="d-inline-block text-truncate text-truncate-sm">
            Toronto, Canada
          </span>
        </div>
        <img
          src="./public/AdminKit/img/card-backgrounds/cover-2-lg.png"
          className="cover"
          alt="cover"
        />
        <a
          href="#"
          onclick="return false;"
          className="pull-trigger-btn"
          data-action="toggle"
          data-class="list-filter-active"
          data-target=".page-sidebar"
          data-focus="nav_filter_input"
        >
          <i className="fal fa-angle-down" />
        </a>
      </div>
      <ul id="js-nav-menu" className="nav-menu">
        <li>
          <Link to="/">
            <i className="fal fa-info-circle" />
            <span className="nav-link-text" data-i18n="nav.application_intel">
              Dashboard
            </span>
          </Link>
        </li>

        <li>
          <Link to="/users">
            <i className="fal fa-cog" />
            <span className="nav-link-text" data-i18n="nav.theme_settings">
              Gestion Users
            </span>
          </Link>
        </li>
        <li>
          <a href="#" title="Theme Settings" data-filter-tags="theme settings">
            <i className="fal fa-cog" />
            <span className="nav-link-text" data-i18n="nav.theme_settings">
              Paramètres
            </span>
          </a>
        </li>
        <li>
        <Link to="/medicament">
            <i className="fal fa-tag" />
            <span className="nav-link-text" data-i18n="nav.package_info">
            Médicaments
            </span>
            </Link>
        </li>
        <li className="nav-title">Gestion des patients</li>
        <li>
          <a href="#" title="UI Components" data-filter-tags="ui components">
            <i className="fal fa-window" />
            <span className="nav-link-text" data-i18n="nav.ui_components">
              Patients
            </span>
          </a>
        </li>

        <li>
          <a href="#" title="Font Icons" data-filter-tags="font icons">
            <i className="fal fa-map-marker-alt" />
            <span className="nav-link-text" data-i18n="nav.font_icons">
              Documents
            </span>
            <span className="dl-ref bg-primary-500 hidden-nav-function-minify hidden-nav-function-top">
              2,500+
            </span>
          </a>
        </li>
        <li>
          <a href="#" title="Tables" data-filter-tags="tables">
            <i className="fal fa-th-list" />
            <span className="nav-link-text" data-i18n="nav.tables">
              Consultations
            </span>
          </a>
        </li>
        <li>
          <a href="#" title="Form Stuff" data-filter-tags="form stuff">
            <i className="fal fa-edit" />
            <span className="nav-link-text" data-i18n="nav.form_stuff">
              Ordonnances
            </span>
          </a>
        </li>
        <li>
          <Link to="/salle">
            <i class="fa-regular fa-door-open"></i>
            <span className="nav-link-text" data-i18n="nav.salle">
              Salles
            </span>
          </Link>
        </li>
        <li className="nav-title">Planification & Facturation</li>
        <li>
          <a
            href="#"
            title="Statistics"
            data-filter-tags="statistics chart graphs"
          >
            <i className="fal fa-chart-pie" />
            <span className="nav-link-text" data-i18n="nav.statistics">
              Rendez-vous
            </span>
          </a>
        </li>
        <li>
          <a href="#" title="Plugins" data-filter-tags="plugins">
            <i className="fal fa-shield-alt" />
            <span className="nav-link-text" data-i18n="nav.plugins">
              Facturation
            </span>
          </a>
        </li>
        <li>
          <a href="#" title="Datatables" data-filter-tags="datatables datagrid">
            <i className="fal fa-table" />
            <span className="nav-link-text" data-i18n="nav.datatables">
              Statistiques
            </span>
            <span className="dl-ref bg-primary-500 hidden-nav-function-minify hidden-nav-function-top">
              235 KB
            </span>
          </a>
        </li>

        <li className="nav-title">Layouts &amp; Apps</li>

        <li>
          <a href="#" title="Notifications" data-filter-tags="notifications">
            <i className="fal fa-exclamation-circle" />
            <span className="nav-link-text" data-i18n="nav.notifications">
              Paramètres
            </span>
          </a>
        </li>
        <li>
          <a href="#" title="Form Plugins" data-filter-tags="form plugins">
            <i className="fal fa-credit-card-front" />
            <span className="nav-link-text" data-i18n="nav.form_plugins">
              Aide
            </span>
          </a>
        </li>
        <li>
          <a href="#" title="Miscellaneous" data-filter-tags="miscellaneous">
            <i className="fal fa-globe" />
            <span className="nav-link-text" data-i18n="nav.miscellaneous">
              Déconnexion
            </span>
          </a>
        </li>
      </ul>
      <div className="filter-message js-filter-message bg-success-600" />
    </nav>
  );
};

export default NavBar;
