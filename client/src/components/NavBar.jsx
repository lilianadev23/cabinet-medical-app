import React from "react";

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
          <a
            href="#"
            title="Application Intel"
            data-filter-tags="application intel"
          >
            <i className="fal fa-info-circle" />
            <span className="nav-link-text" data-i18n="nav.application_intel">
              Application Intel
            </span>
          </a>
          <ul>
            <li>
              <a
                href="intel_analytics_dashboard.html"
                title="Analytics Dashboard"
                data-filter-tags="application intel analytics dashboard"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.application_intel_analytics_dashboard"
                >
                  Analytics Dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="intel_marketing_dashboard.html"
                title="Marketing Dashboard"
                data-filter-tags="application intel marketing dashboard"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.application_intel_marketing_dashboard"
                >
                  Marketing Dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="intel_introduction.html"
                title="Introduction"
                data-filter-tags="application intel introduction"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.application_intel_introduction"
                >
                  Introduction
                </span>
              </a>
            </li>
            <li>
              <a
                href="intel_privacy.html"
                title="Privacy"
                data-filter-tags="application intel privacy"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.application_intel_privacy"
                >
                  Privacy
                </span>
              </a>
            </li>
            <li>
              <a
                href="intel_build_notes.html"
                title="Build Notes"
                data-filter-tags="application intel build notes"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.application_intel_build_notes"
                >
                  Build Notes
                </span>
                <span className>v4.0.2</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" title="Theme Settings" data-filter-tags="theme settings">
            <i className="fal fa-cog" />
            <span className="nav-link-text" data-i18n="nav.theme_settings">
              Theme Settings
            </span>
          </a>
          <ul>
            <li>
              <a
                href="settings_how_it_works.html"
                title="How it works"
                data-filter-tags="theme settings how it works"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.theme_settings_how_it_works"
                >
                  How it works
                </span>
              </a>
            </li>
            <li>
              <a
                href="settings_layout_options.html"
                title="Layout Options"
                data-filter-tags="theme settings layout options"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.theme_settings_layout_options"
                >
                  Layout Options
                </span>
              </a>
            </li>
            <li>
              <a
                href="settings_skin_options.html"
                title="Skin Options"
                data-filter-tags="theme settings skin options"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.theme_settings_skin_options"
                >
                  Skin Options
                </span>
              </a>
            </li>
            <li>
              <a
                href="settings_saving_db.html"
                title="Saving to Database"
                data-filter-tags="theme settings saving to database"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.theme_settings_saving_to_database"
                >
                  Saving to Database
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" title="Package Info" data-filter-tags="package info">
            <i className="fal fa-tag" />
            <span className="nav-link-text" data-i18n="nav.package_info">
              Package Info
            </span>
          </a>
          <ul>
            <li>
              <a
                href="info_app_docs.html"
                title="Documentation"
                data-filter-tags="package info documentation"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.package_info_documentation"
                >
                  Documentation
                </span>
              </a>
            </li>
            <li>
              <a
                href="info_app_licensing.html"
                title="Product Licensing"
                data-filter-tags="package info product licensing"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.package_info_product_licensing"
                >
                  Product Licensing
                </span>
              </a>
            </li>
            <li>
              <a
                href="info_app_flavors.html"
                title="Different Flavors"
                data-filter-tags="package info different flavors"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.package_info_different_flavors"
                >
                  Different Flavors
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-title">Tools &amp; Components</li>
        <li>
          <a href="#" title="UI Components" data-filter-tags="ui components">
            <i className="fal fa-window" />
            <span className="nav-link-text" data-i18n="nav.ui_components">
              UI Components
            </span>
          </a>
          <ul>
            <li>
              <a
                href="ui_alerts.html"
                title="Alerts"
                data-filter-tags="ui components alerts"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_alerts"
                >
                  Alerts
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_accordion.html"
                title="Accordions"
                data-filter-tags="ui components accordions"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_accordions"
                >
                  Accordions
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_badges.html"
                title="Badges"
                data-filter-tags="ui components badges"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_badges"
                >
                  Badges
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_breadcrumbs.html"
                title="Breadcrumbs"
                data-filter-tags="ui components breadcrumbs"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_breadcrumbs"
                >
                  Breadcrumbs
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_buttons.html"
                title="Buttons"
                data-filter-tags="ui components buttons"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_buttons"
                >
                  Buttons
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_button_group.html"
                title="Button Group"
                data-filter-tags="ui components button group"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_button_group"
                >
                  Button Group
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_cards.html"
                title="Cards"
                data-filter-tags="ui components cards"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_cards"
                >
                  Cards
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_carousel.html"
                title="Carousel"
                data-filter-tags="ui components carousel"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_carousel"
                >
                  Carousel
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_collapse.html"
                title="Collapse"
                data-filter-tags="ui components collapse"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_collapse"
                >
                  Collapse
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_dropdowns.html"
                title="Dropdowns"
                data-filter-tags="ui components dropdowns"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_dropdowns"
                >
                  Dropdowns
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_list_filter.html"
                title="List Filter"
                data-filter-tags="ui components list filter"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_list_filter"
                >
                  List Filter
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_modal.html"
                title="Modal"
                data-filter-tags="ui components modal"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_modal"
                >
                  Modal
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_navbars.html"
                title="Navbars"
                data-filter-tags="ui components navbars"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_navbars"
                >
                  Navbars
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_panels.html"
                title="Panels"
                data-filter-tags="ui components panels"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_panels"
                >
                  Panels
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_pagination.html"
                title="Pagination"
                data-filter-tags="ui components pagination"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_pagination"
                >
                  Pagination
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_popovers.html"
                title="Popovers"
                data-filter-tags="ui components popovers"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_popovers"
                >
                  Popovers
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_progress_bars.html"
                title="Progress Bars"
                data-filter-tags="ui components progress bars"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_progress_bars"
                >
                  Progress Bars
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_scrollspy.html"
                title="ScrollSpy"
                data-filter-tags="ui components scrollspy"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_scrollspy"
                >
                  ScrollSpy
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_side_panel.html"
                title="Side Panel"
                data-filter-tags="ui components side panel"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_side_panel"
                >
                  Side Panel
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_spinners.html"
                title="Spinners"
                data-filter-tags="ui components spinners"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_spinners"
                >
                  Spinners
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_tabs_pills.html"
                title="Tabs & Pills"
                data-filter-tags="ui components tabs & pills"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_tabs_&_pills"
                >
                  Tabs &amp; Pills
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_toasts.html"
                title="Toasts"
                data-filter-tags="ui components toasts"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_toasts"
                >
                  Toasts
                </span>
              </a>
            </li>
            <li>
              <a
                href="ui_tooltips.html"
                title="Tooltips"
                data-filter-tags="ui components tooltips"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.ui_components_tooltips"
                >
                  Tooltips
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" title="Utilities" data-filter-tags="utilities">
            <i className="fal fa-bolt" />
            <span className="nav-link-text" data-i18n="nav.utilities">
              Utilities
            </span>
          </a>
          <ul>
            <li>
              <a
                href="utilities_borders.html"
                title="Borders"
                data-filter-tags="utilities borders"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.utilities_borders"
                >
                  Borders
                </span>
              </a>
            </li>
            <li>
              <a
                href="utilities_clearfix.html"
                title="Clearfix"
                data-filter-tags="utilities clearfix"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.utilities_clearfix"
                >
                  Clearfix
                </span>
              </a>
            </li>
            <li>
              <a
                href="utilities_color_pallet.html"
                title="Color Pallet"
                data-filter-tags="utilities color pallet"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.utilities_color_pallet"
                >
                  Color Pallet
                </span>
              </a>
            </li>
            <li>
              <a
                href="utilities_display_property.html"
                title="Display Property"
                data-filter-tags="utilities display property"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.utilities_display_property"
                >
                  Display Property
                </span>
              </a>
            </li>
            <li>
              <a
                href="utilities_fonts.html"
                title="Fonts"
                data-filter-tags="utilities fonts"
              >
                <span className="nav-link-text" data-i18n="nav.utilities_fonts">
                  Fonts
                </span>
              </a>
            </li>
            <li>
              <a
                href="utilities_flexbox.html"
                title="Flexbox"
                data-filter-tags="utilities flexbox"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.utilities_flexbox"
                >
                  Flexbox
                </span>
              </a>
            </li>
            <li>
              <a
                href="utilities_helpers.html"
                title="Helpers"
                data-filter-tags="utilities helpers"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.utilities_helpers"
                >
                  Helpers
                </span>
              </a>
            </li>
            <li>
              <a
                href="utilities_position.html"
                title="Position"
                data-filter-tags="utilities position"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.utilities_position"
                >
                  Position
                </span>
              </a>
            </li>
            <li>
              <a
                href="utilities_responsive_grid.html"
                title="Responsive Grid"
                data-filter-tags="utilities responsive grid"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.utilities_responsive_grid"
                >
                  Responsive Grid
                </span>
              </a>
            </li>
            <li>
              <a
                href="utilities_sizing.html"
                title="Sizing"
                data-filter-tags="utilities sizing"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.utilities_sizing"
                >
                  Sizing
                </span>
              </a>
            </li>
            <li>
              <a
                href="utilities_spacing.html"
                title="Spacing"
                data-filter-tags="utilities spacing"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.utilities_spacing"
                >
                  Spacing
                </span>
              </a>
            </li>
            <li>
              <a
                href="utilities_typography.html"
                title="Typography"
                data-filter-tags="utilities typography fonts headings bold lead colors sizes link text states list styles truncate alignment"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.utilities_typography"
                >
                  Typography
                </span>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                title="Menu child"
                data-filter-tags="utilities menu child"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.utilities_menu_child"
                >
                  Menu child
                </span>
              </a>
              <ul>
                <li>
                  <a
                    href="javascript:void(0);"
                    title="Sublevel Item"
                    data-filter-tags="utilities menu child sublevel item"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.utilities_menu_child_sublevel_item"
                    >
                      Sublevel Item
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    title="Another Item"
                    data-filter-tags="utilities menu child another item"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.utilities_menu_child_another_item"
                    >
                      Another Item
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="disabled">
              <a
                href="javascript:void(0);"
                title="Disabled item"
                data-filter-tags="utilities disabled item"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.utilities_disabled_item"
                >
                  Disabled item
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" title="Font Icons" data-filter-tags="font icons">
            <i className="fal fa-map-marker-alt" />
            <span className="nav-link-text" data-i18n="nav.font_icons">
              Font Icons
            </span>
            <span className="dl-ref bg-primary-500 hidden-nav-function-minify hidden-nav-function-top">
              2,500+
            </span>
          </a>
          <ul>
            <li>
              <a
                href="javascript:void(0);"
                title="FontAwesome"
                data-filter-tags="font icons fontawesome"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.font_icons_fontawesome"
                >
                  FontAwesome Pro
                </span>
              </a>
              <ul>
                <li>
                  <a
                    href="icons_fontawesome_light.html"
                    title="Light"
                    data-filter-tags="font icons fontawesome light"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.font_icons_fontawesome_light"
                    >
                      Light
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="icons_fontawesome_regular.html"
                    title="Regular"
                    data-filter-tags="font icons fontawesome regular"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.font_icons_fontawesome_regular"
                    >
                      Regular
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="icons_fontawesome_solid.html"
                    title="Solid"
                    data-filter-tags="font icons fontawesome solid"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.font_icons_fontawesome_solid"
                    >
                      Solid
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="icons_fontawesome_brand.html"
                    title="Brand"
                    data-filter-tags="font icons fontawesome brand"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.font_icons_fontawesome_brand"
                    >
                      Brand
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                title="NextGen Icons"
                data-filter-tags="font icons nextgen icons"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.font_icons_nextgen_icons"
                >
                  NextGen Icons
                </span>
              </a>
              <ul>
                <li>
                  <a
                    href="icons_nextgen_general.html"
                    title="General"
                    data-filter-tags="font icons nextgen icons general"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.font_icons_nextgen_icons_general"
                    >
                      General
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="icons_nextgen_base.html"
                    title="Base"
                    data-filter-tags="font icons nextgen icons base"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.font_icons_nextgen_icons_base"
                    >
                      Base
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                title="Stack Icons"
                data-filter-tags="font icons stack icons"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.font_icons_stack_icons"
                >
                  Stack Icons
                </span>
              </a>
              <ul>
                <li>
                  <a
                    href="icons_stack_showcase.html"
                    title="Showcase"
                    data-filter-tags="font icons stack icons showcase"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.font_icons_stack_icons_showcase"
                    >
                      Showcase
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="icons_stack_generate.html?layers=3"
                    title="Generate Stack"
                    data-filter-tags="font icons stack icons generate stack"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.font_icons_stack_icons_generate_stack"
                    >
                      Generate Stack
                    </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" title="Tables" data-filter-tags="tables">
            <i className="fal fa-th-list" />
            <span className="nav-link-text" data-i18n="nav.tables">
              Tables
            </span>
          </a>
          <ul>
            <li>
              <a
                href="tables_basic.html"
                title="Basic Tables"
                data-filter-tags="tables basic tables"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.tables_basic_tables"
                >
                  Basic Tables
                </span>
              </a>
            </li>
            <li>
              <a
                href="tables_generate_style.html"
                title="Generate Table Style"
                data-filter-tags="tables generate table style"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.tables_generate_table_style"
                >
                  Generate Table Style
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" title="Form Stuff" data-filter-tags="form stuff">
            <i className="fal fa-edit" />
            <span className="nav-link-text" data-i18n="nav.form_stuff">
              Form Stuff
            </span>
          </a>
          <ul>
            <li>
              <a
                href="form_basic_inputs.html"
                title="Basic Inputs"
                data-filter-tags="form stuff basic inputs"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.form_stuff_basic_inputs"
                >
                  Basic Inputs
                </span>
              </a>
            </li>
            <li>
              <a
                href="form_checkbox_radio.html"
                title="Checkbox & Radio"
                data-filter-tags="form stuff checkbox & radio"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.form_stuff_checkbox_&_radio"
                >
                  Checkbox &amp; Radio
                </span>
              </a>
            </li>
            <li>
              <a
                href="form_input_groups.html"
                title="Input Groups"
                data-filter-tags="form stuff input groups"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.form_stuff_input_groups"
                >
                  Input Groups
                </span>
              </a>
            </li>
            <li>
              <a
                href="form_validation.html"
                title="Validation"
                data-filter-tags="form stuff validation"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.form_stuff_validation"
                >
                  Validation
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-title">Plugins &amp; Addons</li>
        <li>
          <a href="#" title="Plugins" data-filter-tags="plugins">
            <i className="fal fa-shield-alt" />
            <span className="nav-link-text" data-i18n="nav.plugins">
              Core Plugins
            </span>
          </a>
          <ul>
            <li>
              <a
                href="plugin_faq.html"
                title="Plugins FAQ"
                data-filter-tags="plugins plugins faq"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.plugins_plugins_faq"
                >
                  Plugins FAQ
                </span>
              </a>
            </li>
            <li>
              <a
                href="plugin_waves.html"
                title="Waves"
                data-filter-tags="plugins waves"
              >
                <span className="nav-link-text" data-i18n="nav.plugins_waves">
                  Waves
                </span>
                <span className="dl-ref label bg-primary-400 ml-2">9 KB</span>
              </a>
            </li>
            <li>
              <a
                href="plugin_pacejs.html"
                title="PaceJS"
                data-filter-tags="plugins pacejs"
              >
                <span className="nav-link-text" data-i18n="nav.plugins_pacejs">
                  PaceJS
                </span>
                <span className="dl-ref label bg-primary-500 ml-2">13 KB</span>
              </a>
            </li>
            <li>
              <a
                href="plugin_smartpanels.html"
                title="SmartPanels"
                data-filter-tags="plugins smartpanels"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.plugins_smartpanels"
                >
                  SmartPanels
                </span>
                <span className="dl-ref label bg-primary-600 ml-2">9 KB</span>
              </a>
            </li>
            <li>
              <a
                href="plugin_bootbox.html"
                title="BootBox"
                data-filter-tags="plugins bootbox alert sound"
              >
                <span className="nav-link-text" data-i18n="nav.plugins_bootbox">
                  BootBox
                </span>
                <span className="dl-ref label bg-primary-600 ml-2">15 KB</span>
              </a>
            </li>
            <li>
              <a
                href="plugin_slimscroll.html"
                title="Slimscroll"
                data-filter-tags="plugins slimscroll"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.plugins_slimscroll"
                >
                  Slimscroll
                </span>
                <span className="dl-ref label bg-primary-700 ml-2">5 KB</span>
              </a>
            </li>
            <li>
              <a
                href="plugin_throttle.html"
                title="Throttle"
                data-filter-tags="plugins throttle"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.plugins_throttle"
                >
                  Throttle
                </span>
                <span className="dl-ref label bg-primary-700 ml-2">1 KB</span>
              </a>
            </li>
            <li>
              <a
                href="plugin_navigation.html"
                title="Navigation"
                data-filter-tags="plugins navigation"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.plugins_navigation"
                >
                  Navigation
                </span>
                <span className="dl-ref label bg-primary-700 ml-2">2 KB</span>
              </a>
            </li>
            <li>
              <a
                href="plugin_i18next.html"
                title="i18next"
                data-filter-tags="plugins i18next"
              >
                <span className="nav-link-text" data-i18n="nav.plugins_i18next">
                  i18next
                </span>
                <span className="dl-ref label bg-primary-700 ml-2">10 KB</span>
              </a>
            </li>
            <li>
              <a
                href="plugin_appcore.html"
                title="App.Core"
                data-filter-tags="plugins app.core"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.plugins_app.core"
                >
                  App.Core
                </span>
                <span className="dl-ref label bg-success-700 ml-2">14 KB</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" title="Datatables" data-filter-tags="datatables datagrid">
            <i className="fal fa-table" />
            <span className="nav-link-text" data-i18n="nav.datatables">
              Datatables
            </span>
            <span className="dl-ref bg-primary-500 hidden-nav-function-minify hidden-nav-function-top">
              235 KB
            </span>
          </a>
          <ul>
            <li>
              <a
                href="datatables_basic.html"
                title="Basic"
                data-filter-tags="datatables datagrid basic"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.datatables_basic"
                >
                  Basic
                </span>
              </a>
            </li>
            <li>
              <a
                href="datatables_autofill.html"
                title="Autofill"
                data-filter-tags="datatables datagrid autofill"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.datatables_autofill"
                >
                  Autofill
                </span>
              </a>
            </li>
            <li>
              <a
                href="datatables_buttons.html"
                title="Buttons"
                data-filter-tags="datatables datagrid buttons"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.datatables_buttons"
                >
                  Buttons
                </span>
              </a>
            </li>
            <li>
              <a
                href="datatables_export.html"
                title="Export"
                data-filter-tags="datatables datagrid export tables pdf excel print csv"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.datatables_export"
                >
                  Export
                </span>
              </a>
            </li>
            <li>
              <a
                href="datatables_colreorder.html"
                title="ColReorder"
                data-filter-tags="datatables datagrid colreorder"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.datatables_colreorder"
                >
                  ColReorder
                </span>
              </a>
            </li>
            <li>
              <a
                href="datatables_columnfilter.html"
                title="ColumnFilter"
                data-filter-tags="datatables datagrid columnfilter"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.datatables_columnfilter"
                >
                  ColumnFilter
                </span>
              </a>
            </li>
            <li>
              <a
                href="datatables_fixedcolumns.html"
                title="FixedColumns"
                data-filter-tags="datatables datagrid fixedcolumns"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.datatables_fixedcolumns"
                >
                  FixedColumns
                </span>
              </a>
            </li>
            <li>
              <a
                href="datatables_fixedheader.html"
                title="FixedHeader"
                data-filter-tags="datatables datagrid fixedheader"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.datatables_fixedheader"
                >
                  FixedHeader
                </span>
              </a>
            </li>
            <li>
              <a
                href="datatables_keytable.html"
                title="KeyTable"
                data-filter-tags="datatables datagrid keytable"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.datatables_keytable"
                >
                  KeyTable
                </span>
              </a>
            </li>
            <li>
              <a
                href="datatables_responsive.html"
                title="Responsive"
                data-filter-tags="datatables datagrid responsive"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.datatables_responsive"
                >
                  Responsive
                </span>
              </a>
            </li>
            <li>
              <a
                href="datatables_responsive_alt.html"
                title="Responsive Alt"
                data-filter-tags="datatables datagrid responsive alt"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.datatables_responsive_alt"
                >
                  Responsive Alt
                </span>
              </a>
            </li>
            <li>
              <a
                href="datatables_rowgroup.html"
                title="RowGroup"
                data-filter-tags="datatables datagrid rowgroup"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.datatables_rowgroup"
                >
                  RowGroup
                </span>
              </a>
            </li>
            <li>
              <a
                href="datatables_rowreorder.html"
                title="RowReorder"
                data-filter-tags="datatables datagrid rowreorder"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.datatables_rowreorder"
                >
                  RowReorder
                </span>
              </a>
            </li>
            <li>
              <a
                href="datatables_scroller.html"
                title="Scroller"
                data-filter-tags="datatables datagrid scroller"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.datatables_scroller"
                >
                  Scroller
                </span>
              </a>
            </li>
            <li>
              <a
                href="datatables_select.html"
                title="Select"
                data-filter-tags="datatables datagrid select"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.datatables_select"
                >
                  Select
                </span>
              </a>
            </li>
            <li>
              <a
                href="datatables_alteditor.html"
                title="AltEditor"
                data-filter-tags="datatables datagrid alteditor"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.datatables_alteditor"
                >
                  AltEditor
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#"
            title="Statistics"
            data-filter-tags="statistics chart graphs"
          >
            <i className="fal fa-chart-pie" />
            <span className="nav-link-text" data-i18n="nav.statistics">
              Statistics
            </span>
          </a>
          <ul>
            <li>
              <a
                href="statistics_flot.html"
                title="Flot"
                data-filter-tags="statistics chart graphs flot bar pie"
              >
                <span className="nav-link-text" data-i18n="nav.statistics_flot">
                  Flot
                </span>
                <span className="dl-ref label bg-primary-500 ml-2">36 KB</span>
              </a>
            </li>
            <li>
              <a
                href="statistics_chartjs.html"
                title="Chart.js"
                data-filter-tags="statistics chart graphs chart.js bar pie"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.statistics_chart.js"
                >
                  Chart.js
                </span>
                <span className="dl-ref label bg-primary-500 ml-2">205 KB</span>
              </a>
            </li>
            <li>
              <a
                href="statistics_chartist.html"
                title="Chartist.js"
                data-filter-tags="statistics chart graphs chartist.js"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.statistics_chartist.js"
                >
                  Chartist.js
                </span>
                <span className="dl-ref label bg-primary-600 ml-2">39 KB</span>
              </a>
            </li>
            <li>
              <a
                href="statistics_c3.html"
                title="C3 Charts"
                data-filter-tags="statistics chart graphs c3 charts"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.statistics_c3_charts"
                >
                  C3 Charts
                </span>
                <span className="dl-ref label bg-primary-600 ml-2">197 KB</span>
              </a>
            </li>
            <li>
              <a
                href="statistics_peity.html"
                title="Peity"
                data-filter-tags="statistics chart graphs peity small"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.statistics_peity"
                >
                  Peity
                </span>
                <span className="dl-ref label bg-primary-700 ml-2">4 KB</span>
              </a>
            </li>
            <li>
              <a
                href="statistics_sparkline.html"
                title="Sparkline"
                data-filter-tags="statistics chart graphs sparkline small tiny"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.statistics_sparkline"
                >
                  Sparkline
                </span>
                <span className="dl-ref label bg-primary-700 ml-2">42 KB</span>
              </a>
            </li>
            <li>
              <a
                href="statistics_easypiechart.html"
                title="Easy Pie Chart"
                data-filter-tags="statistics chart graphs easy pie chart"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.statistics_easy_pie_chart"
                >
                  Easy Pie Chart
                </span>
                <span className="dl-ref label bg-primary-700 ml-2">4 KB</span>
              </a>
            </li>
            <li>
              <a
                href="statistics_dygraph.html"
                title="Dygraph"
                data-filter-tags="statistics chart graphs dygraph complex"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.statistics_dygraph"
                >
                  Dygraph
                </span>
                <span className="dl-ref label bg-primary-700 ml-2">120 KB</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" title="Notifications" data-filter-tags="notifications">
            <i className="fal fa-exclamation-circle" />
            <span className="nav-link-text" data-i18n="nav.notifications">
              Notifications
            </span>
          </a>
          <ul>
            <li>
              <a
                href="notifications_sweetalert2.html"
                title="SweetAlert2"
                data-filter-tags="notifications sweetalert2"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.notifications_sweetalert2"
                >
                  SweetAlert2
                </span>
                <span className="dl-ref label bg-primary-500 ml-2">40 KB</span>
              </a>
            </li>
            <li>
              <a
                href="notifications_toastr.html"
                title="Toastr"
                data-filter-tags="notifications toastr"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.notifications_toastr"
                >
                  Toastr
                </span>
                <span className="dl-ref label bg-primary-600 ml-2">5 KB</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" title="Form Plugins" data-filter-tags="form plugins">
            <i className="fal fa-credit-card-front" />
            <span className="nav-link-text" data-i18n="nav.form_plugins">
              Form Plugins
            </span>
          </a>
          <ul>
            <li>
              <a
                href="form_plugins_colorpicker.html"
                title="Color Picker"
                data-filter-tags="form plugins color picker"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.form_plugins_color_picker"
                >
                  Color Picker
                </span>
              </a>
            </li>
            <li>
              <a
                href="form_plugins_datepicker.html"
                title="Date Picker"
                data-filter-tags="form plugins date picker"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.form_plugins_date_picker"
                >
                  Date Picker
                </span>
              </a>
            </li>
            <li>
              <a
                href="form_plugins_daterange_picker.html"
                title="Date Range Picker"
                data-filter-tags="form plugins date range picker"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.form_plugins_date_range_picker"
                >
                  Date Range Picker
                </span>
              </a>
            </li>
            <li>
              <a
                href="form_plugins_dropzone.html"
                title="Dropzone"
                data-filter-tags="form plugins dropzone"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.form_plugins_dropzone"
                >
                  Dropzone
                </span>
              </a>
            </li>
            <li>
              <a
                href="form_plugins_ionrangeslider.html"
                title="Ion.RangeSlider"
                data-filter-tags="form plugins ion.rangeslider"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.form_plugins_ion.rangeslider"
                >
                  Ion.RangeSlider
                </span>
              </a>
            </li>
            <li>
              <a
                href="form_plugins_inputmask.html"
                title="Inputmask"
                data-filter-tags="form plugins inputmask"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.form_plugins_inputmask"
                >
                  Inputmask
                </span>
              </a>
            </li>
            <li>
              <a
                href="form_plugin_imagecropper.html"
                title="Image Cropper"
                data-filter-tags="form plugins image cropper"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.form_plugins_image_cropper"
                >
                  Image Cropper
                </span>
              </a>
            </li>
            <li>
              <a
                href="form_plugin_select2.html"
                title="Select2"
                data-filter-tags="form plugins select2"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.form_plugins_select2"
                >
                  Select2
                </span>
              </a>
            </li>
            <li>
              <a
                href="form_plugin_summernote.html"
                title="Summernote"
                data-filter-tags="form plugins summernote texteditor editor"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.form_plugins_summernote"
                >
                  Summernote
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" title="Miscellaneous" data-filter-tags="miscellaneous">
            <i className="fal fa-globe" />
            <span className="nav-link-text" data-i18n="nav.miscellaneous">
              Miscellaneous
            </span>
          </a>
          <ul>
            <li>
              <a
                href="miscellaneous_fullcalendar.html"
                title="FullCalendar"
                data-filter-tags="miscellaneous fullcalendar"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.miscellaneous_fullcalendar"
                >
                  FullCalendar
                </span>
              </a>
            </li>
            <li>
              <a
                href="miscellaneous_lightgallery.html"
                title="Light Gallery"
                data-filter-tags="miscellaneous light gallery"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.miscellaneous_light_gallery"
                >
                  Light Gallery
                </span>
                <span className="dl-ref label bg-primary-500 ml-2">61 KB</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-title">Layouts &amp; Apps</li>
        <li>
          <a href="#" title="Pages" data-filter-tags="pages">
            <i className="fal fa-plus-circle" />
            <span className="nav-link-text" data-i18n="nav.pages">
              Page Views
            </span>
          </a>
          <ul>
            <li>
              <a
                href="page_chat.html"
                title="Chat"
                data-filter-tags="pages chat"
              >
                <span className="nav-link-text" data-i18n="nav.pages_chat">
                  Chat
                </span>
              </a>
            </li>
            <li>
              <a
                href="page_contacts.html"
                title="Contacts"
                data-filter-tags="pages contacts"
              >
                <span className="nav-link-text" data-i18n="nav.pages_contacts">
                  Contacts
                </span>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                title="Forum"
                data-filter-tags="pages forum"
              >
                <span className="nav-link-text" data-i18n="nav.pages_forum">
                  Forum
                </span>
              </a>
              <ul>
                <li>
                  <a
                    href="page_forum_list.html"
                    title="List"
                    data-filter-tags="pages forum list"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.pages_forum_list"
                    >
                      List
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="page_forum_threads.html"
                    title="Threads"
                    data-filter-tags="pages forum threads"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.pages_forum_threads"
                    >
                      Threads
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="page_forum_discussion.html"
                    title="Discussion"
                    data-filter-tags="pages forum discussion"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.pages_forum_discussion"
                    >
                      Discussion
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                title="Inbox"
                data-filter-tags="pages inbox"
              >
                <span className="nav-link-text" data-i18n="nav.pages_inbox">
                  Inbox
                </span>
              </a>
              <ul>
                <li>
                  <a
                    href="page_inbox_general.html"
                    title="General"
                    data-filter-tags="pages inbox general"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.pages_inbox_general"
                    >
                      General
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="page_inbox_read.html"
                    title="Read"
                    data-filter-tags="pages inbox read"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.pages_inbox_read"
                    >
                      Read
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="page_inbox_write.html"
                    title="Write"
                    data-filter-tags="pages inbox write"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.pages_inbox_write"
                    >
                      Write
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="page_invoice.html"
                title="Invoice (printable)"
                data-filter-tags="pages invoice (printable)"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.pages_invoice_(printable)"
                >
                  Invoice (printable)
                </span>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                title="Authentication"
                data-filter-tags="pages authentication"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.pages_authentication"
                >
                  Authentication
                </span>
              </a>
              <ul>
                <li>
                  <a
                    href="page_forget.html"
                    title="Forget Password"
                    data-filter-tags="pages authentication forget password"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.pages_authentication_forget_password"
                    >
                      Forget Password
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="page_locked.html"
                    title="Locked Screen"
                    data-filter-tags="pages authentication locked screen"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.pages_authentication_locked_screen"
                    >
                      Locked Screen
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="page_login.html"
                    title="Login"
                    data-filter-tags="pages authentication login"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.pages_authentication_login"
                    >
                      Login
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="page_login-alt.html"
                    title="Login Alt"
                    data-filter-tags="pages authentication login alt"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.pages_authentication_login_alt"
                    >
                      Login Alt
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="page_register.html"
                    title="Register"
                    data-filter-tags="pages authentication register"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.pages_authentication_register"
                    >
                      Register
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="page_confirmation.html"
                    title="Confirmation"
                    data-filter-tags="pages authentication confirmation"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.pages_authentication_confirmation"
                    >
                      Confirmation
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                title="Error Pages"
                data-filter-tags="pages error pages"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.pages_error_pages"
                >
                  Error Pages
                </span>
              </a>
              <ul>
                <li>
                  <a
                    href="page_error.html"
                    title="General Error"
                    data-filter-tags="pages error pages general error"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.pages_error_pages_general_error"
                    >
                      General Error
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="page_error_404.html"
                    title="Server Error"
                    data-filter-tags="pages error pages server error"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.pages_error_pages_server_error"
                    >
                      Server Error
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="page_error_announced.html"
                    title="Announced Error"
                    data-filter-tags="pages error pages announced error"
                  >
                    <span
                      className="nav-link-text"
                      data-i18n="nav.pages_error_pages_announced_error"
                    >
                      Announced Error
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="page_profile.html"
                title="Profile"
                data-filter-tags="pages profile"
              >
                <span className="nav-link-text" data-i18n="nav.pages_profile">
                  Profile
                </span>
              </a>
            </li>
            <li>
              <a
                href="page_search.html"
                title="Search Results"
                data-filter-tags="pages search results"
              >
                <span
                  className="nav-link-text"
                  data-i18n="nav.pages_search_results"
                >
                  Search Results
                </span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="filter-message js-filter-message bg-success-600" />
    </nav>
  );
};

export default NavBar;
