import React from "react";

const Header = () => {
  return (
    <header className="page-header" role="banner">
      {/* we need this logo when user switches to nav-function-top */}
      <div className="page-logo">
        <a
          href="#"
          className="page-logo-link press-scale-down d-flex align-items-center position-relative"
          data-toggle="modal"
          data-target="#modal-shortcut"
        >
          <img
            src="./public/AdminKit/img/logo.png"
            alt="SmartAdmin WebApp"
            aria-roledescription="logo"
          />
          <span className="page-logo-text mr-1">SmartAdmin WebApp</span>
          <span className="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2" />
          <i className="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300" />
        </a>
      </div>
      {/* DOC: nav menu layout change shortcut */}
      <div className="hidden-md-down dropdown-icon-menu position-relative">
        <a
          href="#"
          className="header-btn btn js-waves-off"
          data-action="toggle"
          data-class="nav-function-hidden"
          title="Hide Navigation"
        >
          <i className="ni ni-menu" />
        </a>
        <ul>
          <li>
            <a
              href="#"
              className="btn js-waves-off"
              data-action="toggle"
              data-class="nav-function-minify"
              title="Minify Navigation"
            >
              <i className="ni ni-minify-nav" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="btn js-waves-off"
              data-action="toggle"
              data-class="nav-function-fixed"
              title="Lock Navigation"
            >
              <i className="ni ni-lock-nav" />
            </a>
          </li>
        </ul>
      </div>
      {/* DOC: mobile button appears during mobile width */}
      <div className="hidden-lg-up">
        <a
          href="#"
          className="header-btn btn press-scale-down"
          data-action="toggle"
          data-class="mobile-nav-on"
        >
          <i className="ni ni-menu" />
        </a>
      </div>
      <div className="search">
        <form
          className="app-forms hidden-xs-down"
          role="search"
          action="page_search.html"
          autoComplete="off"
        >
          <input
            type="text"
            id="search-field"
            placeholder="Search for anything"
            className="form-control"
            tabIndex={1}
          />
          <a
            href="#"
            onclick="return false;"
            className="btn-danger btn-search-close js-waves-off d-none"
            data-action="toggle"
            data-class="mobile-search-on"
          >
            <i className="fal fa-times" />
          </a>
        </form>
      </div>
      <div className="ml-auto d-flex">
        {/* activate app search icon (mobile) */}
        <div className="hidden-sm-up">
          <a
            href="#"
            className="header-icon"
            data-action="toggle"
            data-class="mobile-search-on"
            data-focus="search-field"
            title="Search"
          >
            <i className="fal fa-search" />
          </a>
        </div>
        {/* app settings */}
        <div className="hidden-md-down">
          <a
            href="#"
            className="header-icon"
            data-toggle="modal"
            data-target=".js-modal-settings"
          >
            <i className="fal fa-cog" />
          </a>
        </div>
        {/* app shortcuts */}
        <div>
          <a
            href="#"
            className="header-icon"
            data-toggle="dropdown"
            title="My Apps"
          >
            <i className="fal fa-cube" />
          </a>
          <div className="dropdown-menu dropdown-menu-animated w-auto h-auto">
            <div className="dropdown-header bg-trans-gradient d-flex justify-content-center align-items-center rounded-top">
              <h4 className="m-0 text-center color-white">
                Quick Shortcut
                <small className="mb-0 opacity-80">
                  User Applications &amp; Addons
                </small>
              </h4>
            </div>
            <div className="custom-scroll h-100">
              <ul className="app-list">
                <li>
                  <a href="#" className="app-list-item hover-white">
                    <span className="icon-stack">
                      <i className="base-2 icon-stack-3x color-primary-600" />
                      <i className="base-3 icon-stack-2x color-primary-700" />
                      <i className="ni ni-settings icon-stack-1x text-white fs-lg" />
                    </span>
                    <span className="app-list-name">Services</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="app-list-item hover-white">
                    <span className="icon-stack">
                      <i className="base-2 icon-stack-3x color-primary-400" />
                      <i className="base-10 text-white icon-stack-1x" />
                      <i className="ni md-profile color-primary-800 icon-stack-2x" />
                    </span>
                    <span className="app-list-name">Account</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="app-list-item hover-white">
                    <span className="icon-stack">
                      <i className="base-9 icon-stack-3x color-success-400" />
                      <i className="base-2 icon-stack-2x color-success-500" />
                      <i className="ni ni-shield icon-stack-1x text-white" />
                    </span>
                    <span className="app-list-name">Security</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="app-list-item hover-white">
                    <span className="icon-stack">
                      <i className="base-18 icon-stack-3x color-info-700" />
                      <span className="position-absolute pos-top pos-left pos-right color-white fs-md mt-2 fw-400">
                        28
                      </span>
                    </span>
                    <span className="app-list-name">Calendar</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="app-list-item hover-white">
                    <span className="icon-stack">
                      <i className="base-7 icon-stack-3x color-info-500" />
                      <i className="base-7 icon-stack-2x color-info-700" />
                      <i className="ni ni-graph icon-stack-1x text-white" />
                    </span>
                    <span className="app-list-name">Stats</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="app-list-item hover-white">
                    <span className="icon-stack">
                      <i className="base-4 icon-stack-3x color-danger-500" />
                      <i className="base-4 icon-stack-1x color-danger-400" />
                      <i className="ni ni-envelope icon-stack-1x text-white" />
                    </span>
                    <span className="app-list-name">Messages</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="app-list-item hover-white">
                    <span className="icon-stack">
                      <i className="base-4 icon-stack-3x color-fusion-400" />
                      <i className="base-5 icon-stack-2x color-fusion-200" />
                      <i className="base-5 icon-stack-1x color-fusion-100" />
                      <i className="fal fa-keyboard icon-stack-1x color-info-50" />
                    </span>
                    <span className="app-list-name">Notes</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="app-list-item hover-white">
                    <span className="icon-stack">
                      <i className="base-16 icon-stack-3x color-fusion-500" />
                      <i className="base-10 icon-stack-1x color-primary-50 opacity-30" />
                      <i className="base-10 icon-stack-1x fs-xl color-primary-50 opacity-20" />
                      <i className="fal fa-dot-circle icon-stack-1x text-white opacity-85" />
                    </span>
                    <span className="app-list-name">Photos</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="app-list-item hover-white">
                    <span className="icon-stack">
                      <i className="base-19 icon-stack-3x color-primary-400" />
                      <i className="base-7 icon-stack-2x color-primary-300" />
                      <i className="base-7 icon-stack-1x fs-xxl color-primary-200" />
                      <i className="base-7 icon-stack-1x color-primary-500" />
                      <i className="fal fa-globe icon-stack-1x text-white opacity-85" />
                    </span>
                    <span className="app-list-name">Maps</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="app-list-item hover-white">
                    <span className="icon-stack">
                      <i className="base-5 icon-stack-3x color-success-700 opacity-80" />
                      <i className="base-12 icon-stack-2x color-success-700 opacity-30" />
                      <i className="fal fa-comment-alt icon-stack-1x text-white" />
                    </span>
                    <span className="app-list-name">Chat</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="app-list-item hover-white">
                    <span className="icon-stack">
                      <i className="base-5 icon-stack-3x color-warning-600" />
                      <i className="base-7 icon-stack-2x color-warning-800 opacity-50" />
                      <i className="fal fa-phone icon-stack-1x text-white" />
                    </span>
                    <span className="app-list-name">Phone</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="app-list-item hover-white">
                    <span className="icon-stack">
                      <i className="base-6 icon-stack-3x color-danger-600" />
                      <i className="fal fa-chart-line icon-stack-1x text-white" />
                    </span>
                    <span className="app-list-name">Projects</span>
                  </a>
                </li>
                <li className="w-100">
                  <a href="#" className="btn btn-default mt-4 mb-2 pr-5 pl-5">
                    {" "}
                    Add more apps{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* app message */}
        <a
          href="#"
          className="header-icon"
          data-toggle="modal"
          data-target=".js-modal-messenger"
        >
          <i className="fal fa-globe" />
          <span className="badge badge-icon">!</span>
        </a>
        {/* app notification */}
        <div>
          <a
            href="#"
            className="header-icon"
            data-toggle="dropdown"
            title="You got 11 notifications"
          >
            <i className="fal fa-bell" />
            <span className="badge badge-icon">11</span>
          </a>
          <div className="dropdown-menu dropdown-menu-animated dropdown-xl">
            <div className="dropdown-header bg-trans-gradient d-flex justify-content-center align-items-center rounded-top mb-2">
              <h4 className="m-0 text-center color-white">
                11 New
                <small className="mb-0 opacity-80">User Notifications</small>
              </h4>
            </div>
            <ul className="nav nav-tabs nav-tabs-clean" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link px-4 fs-md js-waves-on fw-500"
                  data-toggle="tab"
                  href="#tab-messages"
                  data-i18n="drpdwn.messages"
                >
                  Messages
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link px-4 fs-md js-waves-on fw-500"
                  data-toggle="tab"
                  href="#tab-feeds"
                  data-i18n="drpdwn.feeds"
                >
                  Feeds
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link px-4 fs-md js-waves-on fw-500"
                  data-toggle="tab"
                  href="#tab-events"
                  data-i18n="drpdwn.events"
                >
                  Events
                </a>
              </li>
            </ul>
            <div className="tab-content tab-notification">
              <div className="tab-pane active p-3 text-center">
                <h5 className="mt-4 pt-4 fw-500">
                  <span className="d-block fa-3x pb-4 text-muted">
                    <i className="ni ni-arrow-up text-gradient opacity-70" />
                  </span>{" "}
                  Select a tab above to activate
                  <small className="mt-3 fs-b fw-400 text-muted">
                    This blank page message helps protect your privacy, or you
                    can show the first message here automatically through
                    <a href="#">settings page</a>
                  </small>
                </h5>
              </div>
              <div className="tab-pane" id="tab-messages" role="tabpanel">
                <div className="custom-scroll h-100">
                  <ul className="notification">
                    <li className="unread">
                      <a href="#" className="d-flex align-items-center">
                        <span className="status mr-2">
                          <span
                            className="profile-image rounded-circle d-inline-block"
                            style={{
                              backgroundImage:
                                'url("./public/AdminKit/img/demo/avatars/avatar-c.png")',
                            }}
                          />
                        </span>
                        <span className="d-flex flex-column flex-1 ml-1">
                          <span className="name">
                            Melissa Ayre{" "}
                            <span className="badge badge-primary fw-n position-absolute pos-top pos-right mt-1">
                              INBOX
                            </span>
                          </span>
                          <span className="msg-a fs-sm">
                            Re: New security codes
                          </span>
                          <span className="msg-b fs-xs">
                            Hello again and thanks for being part...
                          </span>
                          <span className="fs-nano text-muted mt-1">
                            56 seconds ago
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="unread">
                      <a href="#" className="d-flex align-items-center">
                        <span className="status mr-2">
                          <span
                            className="profile-image rounded-circle d-inline-block"
                            style={{
                              backgroundImage:
                                'url("./public/AdminKit/img/demo/avatars/avatar-a.png")',
                            }}
                          />
                        </span>
                        <span className="d-flex flex-column flex-1 ml-1">
                          <span className="name">Adison Lee</span>
                          <span className="msg-a fs-sm">
                            Msed quia non numquam eius
                          </span>
                          <span className="fs-nano text-muted mt-1">
                            2 minutes ago
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex align-items-center">
                        <span className="status status-success mr-2">
                          <span
                            className="profile-image rounded-circle d-inline-block"
                            style={{
                              backgroundImage:
                                'url("./public/AdminKit/img/demo/avatars/avatar-b.png")',
                            }}
                          />
                        </span>
                        <span className="d-flex flex-column flex-1 ml-1">
                          <span className="name">Oliver Kopyuv</span>
                          <span className="msg-a fs-sm">
                            Msed quia non numquam eius
                          </span>
                          <span className="fs-nano text-muted mt-1">
                            3 days ago
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex align-items-center">
                        <span className="status status-warning mr-2">
                          <span
                            className="profile-image rounded-circle d-inline-block"
                            style={{
                              backgroundImage:
                                'url("./public/AdminKit/img/demo/avatars/avatar-e.png")',
                            }}
                          />
                        </span>
                        <span className="d-flex flex-column flex-1 ml-1">
                          <span className="name">Dr. John Cook PhD</span>
                          <span className="msg-a fs-sm">
                            Msed quia non numquam eius
                          </span>
                          <span className="fs-nano text-muted mt-1">
                            2 weeks ago
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex align-items-center">
                        <span className="status status-success mr-2">
                          {/* <img src="img/demo/avatars/avatar-m.png" data-src="img/demo/avatars/avatar-h.png" class="profile-image rounded-circle" alt="Sarah McBrook" /> */}
                          <span
                            className="profile-image rounded-circle d-inline-block"
                            style={{
                              backgroundImage:
                                'url("./public/AdminKit/img/demo/avatars/avatar-h.png")',
                            }}
                          />
                        </span>
                        <span className="d-flex flex-column flex-1 ml-1">
                          <span className="name">Sarah McBrook</span>
                          <span className="msg-a fs-sm">
                            Msed quia non numquam eius
                          </span>
                          <span className="fs-nano text-muted mt-1">
                            3 weeks ago
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex align-items-center">
                        <span className="status status-success mr-2">
                          <span
                            className="profile-image rounded-circle d-inline-block"
                            style={{
                              backgroundImage:
                                'url("./public/AdminKit/img/demo/avatars/avatar-m.png")',
                            }}
                          />
                        </span>
                        <span className="d-flex flex-column flex-1 ml-1">
                          <span className="name">Anothony Bezyeth</span>
                          <span className="msg-a fs-sm">
                            Msed quia non numquam eius
                          </span>
                          <span className="fs-nano text-muted mt-1">
                            one month ago
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex align-items-center">
                        <span className="status status-danger mr-2">
                          <span
                            className="profile-image rounded-circle d-inline-block"
                            style={{
                              backgroundImage:
                                'url("./public/AdminKit/img/demo/avatars/avatar-j.png")',
                            }}
                          />
                        </span>
                        <span className="d-flex flex-column flex-1 ml-1">
                          <span className="name">Lisa Hatchensen</span>
                          <span className="msg-a fs-sm">
                            Msed quia non numquam eius
                          </span>
                          <span className="fs-nano text-muted mt-1">
                            one year ago
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-pane" id="tab-feeds" role="tabpanel">
                <div className="custom-scroll h-100">
                  <ul className="notification">
                    <li className="unread">
                      <div className="d-flex align-items-center show-child-on-hover">
                        <span className="d-flex flex-column flex-1">
                          <span className="name d-flex align-items-center">
                            Administrator{" "}
                            <span className="badge badge-success fw-n ml-1">
                              UPDATE
                            </span>
                          </span>
                          <span className="msg-a fs-sm">
                            System updated to version <strong>4.0.2</strong>{" "}
                            <a href="intel_build_notes.html">(patch notes)</a>
                          </span>
                          <span className="fs-nano text-muted mt-1">
                            5 mins ago
                          </span>
                        </span>
                        <div className="show-on-hover-parent position-absolute pos-right pos-bottom p-3">
                          <a href="#" className="text-muted" title="delete">
                            <i className="fal fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center show-child-on-hover">
                        <div className="d-flex flex-column flex-1">
                          <span className="name">
                            Adison Lee{" "}
                            <span className="fw-300 d-inline">
                              replied to your video{" "}
                              <a href="#" className="fw-400">
                                {" "}
                                Cancer Drug
                              </a>{" "}
                            </span>
                          </span>
                          <span className="msg-a fs-sm mt-2">
                            Bring to the table win-win survival strategies to
                            ensure proactive domination. At the end of the
                            day...
                          </span>
                          <span className="fs-nano text-muted mt-1">
                            10 minutes ago
                          </span>
                        </div>
                        <div className="show-on-hover-parent position-absolute pos-right pos-bottom p-3">
                          <a href="#" className="text-muted" title="delete">
                            <i className="fal fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center show-child-on-hover">
                        {/*<img src="img/demo/avatars/avatar-m.png" data-src="img/demo/avatars/avatar-k.png" class="profile-image rounded-circle" alt="k" />*/}
                        <div className="d-flex flex-column flex-1">
                          <span className="name">
                            Troy Norman'
                            <span className="fw-300">s new connections</span>
                          </span>
                          <div className="fs-sm d-flex align-items-center mt-2">
                            <span
                              className="profile-image-md mr-1 rounded-circle d-inline-block"
                              style={{
                                backgroundImage:
                                  'url("./public/AdminKit/img/demo/avatars/avatar-a.png")',
                                backgroundSize: "cover",
                              }}
                            />
                            <span
                              className="profile-image-md mr-1 rounded-circle d-inline-block"
                              style={{
                                backgroundImage:
                                  'url("./public/AdminKit/img/demo/avatars/avatar-b.png")',
                                backgroundSize: "cover",
                              }}
                            />
                            <span
                              className="profile-image-md mr-1 rounded-circle d-inline-block"
                              style={{
                                backgroundImage:
                                  'url("./public/AdminKit/img/demo/avatars/avatar-c.png")',
                                backgroundSize: "cover",
                              }}
                            />
                            <span
                              className="profile-image-md mr-1 rounded-circle d-inline-block"
                              style={{
                                backgroundImage:
                                  'url("./public/AdminKit/img/demo/avatars/avatar-e.png")',
                                backgroundSize: "cover",
                              }}
                            />
                            <div
                              data-hasmore={+3}
                              className="rounded-circle profile-image-md mr-1"
                            >
                              <span
                                className="profile-image-md mr-1 rounded-circle d-inline-block"
                                style={{
                                  backgroundImage:
                                    'url("./public/AdminKit/img/demo/avatars/avatar-h.png")',
                                  backgroundSize: "cover",
                                }}
                              />
                            </div>
                          </div>
                          <span className="fs-nano text-muted mt-1">
                            55 minutes ago
                          </span>
                        </div>
                        <div className="show-on-hover-parent position-absolute pos-right pos-bottom p-3">
                          <a href="#" className="text-muted" title="delete">
                            <i className="fal fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center show-child-on-hover">
                        {/*<img src="img/demo/avatars/avatar-m.png" data-src="img/demo/avatars/avatar-e.png" class="profile-image-sm rounded-circle align-self-start mt-1" alt="k" />*/}
                        <div className="d-flex flex-column flex-1">
                          <span className="name">
                            Dr John Cook{" "}
                            <span className="fw-300">
                              sent a{" "}
                              <span className="text-danger">new signal</span>
                            </span>
                          </span>
                          <span className="msg-a fs-sm mt-2">
                            Nanotechnology immersion along the information
                            highway will close the loop on focusing solely on
                            the bottom line.
                          </span>
                          <span className="fs-nano text-muted mt-1">
                            10 minutes ago
                          </span>
                        </div>
                        <div className="show-on-hover-parent position-absolute pos-right pos-bottom p-3">
                          <a href="#" className="text-muted" title="delete">
                            <i className="fal fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center show-child-on-hover">
                        <div className="d-flex flex-column flex-1">
                          <span className="name">
                            Lab Images{" "}
                            <span className="fw-300">were updated!</span>
                          </span>
                          <div className="fs-sm d-flex align-items-center mt-1">
                            <a
                              href="#"
                              className="mr-1 mt-1"
                              title="Cell A-0012"
                            >
                              <span
                                className="d-block img-share"
                                style={{
                                  backgroundImage:
                                    'url("./public/AdminKit/img/thumbs/pic-7.png")',
                                  backgroundSize: "cover",
                                }}
                              />
                            </a>
                            <a
                              href="#"
                              className="mr-1 mt-1"
                              title="Patient A-473 saliva"
                            >
                              <span
                                className="d-block img-share"
                                style={{
                                  backgroundImage:
                                    'url("./public/AdminKit/img/thumbs/pic-8.png")',
                                  backgroundSize: "cover",
                                }}
                              />
                            </a>
                            <a
                              href="#"
                              className="mr-1 mt-1"
                              title="Patient A-473 blood cells"
                            >
                              <span
                                className="d-block img-share"
                                style={{
                                  backgroundImage:
                                    'url("./public/AdminKit/img/thumbs/pic-11.png")',
                                  backgroundSize: "cover",
                                }}
                              />
                            </a>
                            <a
                              href="#"
                              className="mr-1 mt-1"
                              title="Patient A-473 Membrane O.C"
                            >
                              <span
                                className="d-block img-share"
                                style={{
                                  backgroundImage:
                                    'url("./public/AdminKit/img/thumbs/pic-12.png")',
                                  backgroundSize: "cover",
                                }}
                              />
                            </a>
                          </div>
                          <span className="fs-nano text-muted mt-1">
                            55 minutes ago
                          </span>
                        </div>
                        <div className="show-on-hover-parent position-absolute pos-right pos-bottom p-3">
                          <a href="#" className="text-muted" title="delete">
                            <i className="fal fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center show-child-on-hover">
                        {/*<img src="img/demo/avatars/avatar-m.png" data-src="img/demo/avatars/avatar-h.png" class="profile-image rounded-circle align-self-start mt-1" alt="k" />*/}
                        <div className="d-flex flex-column flex-1">
                          <div className="name mb-2">
                            Lisa Lamar
                            <span className="fw-300"> updated project</span>
                          </div>
                          <div className="row fs-b fw-300">
                            <div className="col text-left">Progress</div>
                            <div className="col text-right fw-500">45%</div>
                          </div>
                          <div className="progress progress-sm d-flex mt-1">
                            <span
                              className="progress-bar bg-primary-500 progress-bar-striped"
                              role="progressbar"
                              style={{ width: "45%" }}
                              aria-valuenow={45}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="fs-nano text-muted mt-1">
                            2 hrs ago
                          </span>
                          <div className="show-on-hover-parent position-absolute pos-right pos-bottom p-3">
                            <a href="#" className="text-muted" title="delete">
                              <i className="fal fa-trash-alt" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-pane" id="tab-events" role="tabpanel">
                <div className="d-flex flex-column h-100">
                  <div className="h-auto">
                    <table className="table table-bordered table-calendar m-0 w-100 h-100 border-0">
                      <tbody>
                        <tr>
                          <th
                            colSpan={7}
                            className="pt-3 pb-2 pl-3 pr-3 text-center"
                          >
                            <div className="js-get-date h5 mb-2">
                              [your date here]
                            </div>
                          </th>
                        </tr>
                        <tr className="text-center">
                          <th>Sun</th>
                          <th>Mon</th>
                          <th>Tue</th>
                          <th>Wed</th>
                          <th>Thu</th>
                          <th>Fri</th>
                          <th>Sat</th>
                        </tr>
                        <tr>
                          <td className="text-muted bg-faded">30</td>
                          <td>1</td>
                          <td>2</td>
                          <td>3</td>
                          <td>4</td>
                          <td>5</td>
                          <td>
                            <i className="fal fa-birthday-cake mt-1 ml-1 position-absolute pos-left pos-top text-primary" />{" "}
                            6
                          </td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>8</td>
                          <td>9</td>
                          <td className="bg-primary-300 pattern-0">10</td>
                          <td>11</td>
                          <td>12</td>
                          <td>13</td>
                        </tr>
                        <tr>
                          <td>14</td>
                          <td>15</td>
                          <td>16</td>
                          <td>17</td>
                          <td>18</td>
                          <td>19</td>
                          <td>20</td>
                        </tr>
                        <tr>
                          <td>21</td>
                          <td>22</td>
                          <td>23</td>
                          <td>24</td>
                          <td>25</td>
                          <td>26</td>
                          <td>27</td>
                        </tr>
                        <tr>
                          <td>28</td>
                          <td>29</td>
                          <td>30</td>
                          <td>31</td>
                          <td className="text-muted bg-faded">1</td>
                          <td className="text-muted bg-faded">2</td>
                          <td className="text-muted bg-faded">3</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex-1 custom-scroll">
                    <div className="p-2">
                      <div className="d-flex align-items-center text-left mb-3">
                        <div className="width-5 fw-300 text-primary l-h-n mr-1 align-self-start fs-xxl">
                          15
                        </div>
                        <div className="flex-1">
                          <div className="d-flex flex-column">
                            <span className="l-h-n fs-md fw-500 opacity-70">
                              October 2020
                            </span>
                            <span className="l-h-n fs-nano fw-400 text-secondary">
                              Friday
                            </span>
                          </div>
                          <div className="mt-3">
                            <p>
                              <strong>2:30PM</strong> - Doctor's appointment
                            </p>
                            <p>
                              <strong>3:30PM</strong> - Report overview
                            </p>
                            <p>
                              <strong>4:30PM</strong> - Meeting with Donnah V.
                            </p>
                            <p>
                              <strong>5:30PM</strong> - Late Lunch
                            </p>
                            <p>
                              <strong>6:30PM</strong> - Report Compression
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-2 px-3 bg-faded d-block rounded-bottom text-right border-faded border-bottom-0 border-right-0 border-left-0">
              <a href="#" className="fs-xs fw-500 ml-auto">
                view all notifications
              </a>
            </div>
          </div>
        </div>
        {/* app user menu */}
        <div>
          <a
            href="#"
            data-toggle="dropdown"
            title="drlantern@gotbootstrap.com"
            className="header-icon d-flex align-items-center justify-content-center ml-2"
          >
            <img
              src="/AdminKit/img/demo/avatars/avatar-admin.png"
              className="profile-image rounded-circle"
              alt="Dr. Codex Lantern"
            />
            {/* you can also add username next to the avatar with the codes below:
									<span class="ml-1 mr-1 text-truncate text-truncate-header hidden-xs-down">Me</span>
									<i class="ni ni-chevron-down hidden-xs-down"></i> */}
          </a>
          <div className="dropdown-menu dropdown-menu-animated dropdown-lg">
            <div className="dropdown-header bg-trans-gradient d-flex flex-row py-4 rounded-top">
              <div className="d-flex flex-row align-items-center mt-1 mb-1 color-white">
                <span className="mr-2">
                  <img
                    src="./public/AdminKit/img/demo/avatars/avatar-admin.png"
                    className="rounded-circle profile-image"
                    alt="Dr. Codex Lantern"
                  />
                </span>
                <div className="info-card-text">
                  <div className="fs-lg text-truncate text-truncate-lg">
                    Dr. Codex Lantern
                  </div>
                  <span className="text-truncate text-truncate-md opacity-80">
                    drlantern@gotbootstrap.com
                  </span>
                </div>
              </div>
            </div>
            <div className="dropdown-divider m-0" />
            <a href="#" className="dropdown-item" data-action="app-reset">
              <span data-i18n="drpdwn.reset_layout">Reset Layout</span>
            </a>
            <a
              href="#"
              className="dropdown-item"
              data-toggle="modal"
              data-target=".js-modal-settings"
            >
              <span data-i18n="drpdwn.settings">Settings</span>
            </a>
            <div className="dropdown-divider m-0" />
            <a href="#" className="dropdown-item" data-action="app-fullscreen">
              <span data-i18n="drpdwn.fullscreen">Fullscreen</span>
              <i className="float-right text-muted fw-n">F11</i>
            </a>
            <a href="#" className="dropdown-item" data-action="app-print">
              <span data-i18n="drpdwn.print">Print</span>
              <i className="float-right text-muted fw-n">Ctrl + P</i>
            </a>
            <div className="dropdown-multilevel dropdown-multilevel-left">
              <div className="dropdown-item">Language</div>
              <div className="dropdown-menu">
                <a
                  href="#?lang=fr"
                  className="dropdown-item"
                  data-action="lang"
                  data-lang="fr"
                >
                  Français
                </a>
                <a
                  href="#?lang=en"
                  className="dropdown-item active"
                  data-action="lang"
                  data-lang="en"
                >
                  English (US)
                </a>
                <a
                  href="#?lang=es"
                  className="dropdown-item"
                  data-action="lang"
                  data-lang="es"
                >
                  Español
                </a>
                <a
                  href="#?lang=ru"
                  className="dropdown-item"
                  data-action="lang"
                  data-lang="ru"
                >
                  Русский язык
                </a>
                <a
                  href="#?lang=jp"
                  className="dropdown-item"
                  data-action="lang"
                  data-lang="jp"
                >
                  日本語
                </a>
                <a
                  href="#?lang=ch"
                  className="dropdown-item"
                  data-action="lang"
                  data-lang="ch"
                >
                  中文
                </a>
              </div>
            </div>
            <div className="dropdown-divider m-0" />
            <a
              className="dropdown-item fw-500 pt-3 pb-3"
              href="page_login_alt.html"
            >
              <span data-i18n="drpdwn.page-logout">Logout</span>
              <span className="float-right fw-n">@codexlantern</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
