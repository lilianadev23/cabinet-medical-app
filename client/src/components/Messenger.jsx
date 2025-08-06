import React from "react";

const Messenger = () => {
  return (
   
        <div
          className="modal fade right-modal js-modal-messenger modal-backdrop-transparent"
          id="rightMessengerModal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-slideout">
            <div className="modal-content h-100">
              {/* Header */}
              <div className="dropdown-header bg-trans-gradient d-flex align-items-center w-100">
                <div className="d-flex flex-row align-items-center mt-1 mb-1 color-white">
                  <span className="me-2">
                    <span
                      className="rounded-circle profile-image d-block"
                      style={{
                        backgroundImage:
                          'url("/AdminKit/img/demo/avatars/avatar-d.png")',
                        backgroundSize: "cover",
                        width: 40,
                        height: 40,
                      }}
                    />
                  </span>
                  <div className="info-card-text">
                    <a
                      href="#"
                      className="fs-lg text-truncate text-truncate-lg text-white"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Tracey Chang
                      <i className="fal fa-angle-down d-inline-block ms-1 text-white fs-md" />
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Send Email</a>
                      <a className="dropdown-item" href="#">Create Appointment</a>
                      <a className="dropdown-item" href="#">Block User</a>
                    </div>
                    <span className="text-truncate text-truncate-md opacity-80">
                      IT Director
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close text-white position-absolute top-0 end-0 p-2 m-1 me-2"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i className="fal fa-times" />
                  </span>
                </button>
              </div>
    
              {/* Body */}
              <div className="modal-body p-0 h-100 d-flex">
                {/* Contacts list */}
                <div className="msgr-list d-flex flex-column bg-faded border-faded border-top-0 border-end-0 border-bottom-0 position-absolute top-0 bottom-0">
                  <div>
                    <div className="height-4 width-3 h3 m-0 d-flex justify-content-center flex-column color-primary-500 ps-3 mt-2">
                      <i className="fal fa-search" />
                    </div>
                    <input
                      type="text"
                      className="form-control bg-white"
                      placeholder="Filter contacts"
                      aria-label="FriendSearch"
                    />
                  </div>
                  <div className="flex-1 h-100 custom-scroll">
                    <ul className="list-unstyled m-0">
                      {/* Contact items */}
                      {[
                        { name: "Tracey Chang", status: "success", avatar: "avatar-d.png", note: "Online" },
                        { name: "Oliver Kopyuv", status: "success", avatar: "avatar-b.png", note: "Online" },
                        { name: "Dr. John Cook PhD", status: "warning", avatar: "avatar-e.png", note: "Away" },
                        { name: "Ali Amdaney", status: "success", avatar: "avatar-g.png", note: "Online" },
                        { name: "Sarah McBrook", status: "success", avatar: "avatar-h.png", note: "Online" },
                        { name: "oliver.kopyuv@gotbootstrap.com", status: "", avatar: "avatar-a.png", note: "Offline" },
                        { name: "oliver.kopyuv@gotbootstrap.com", status: "danger", avatar: "avatar-j.png", note: "Busy" },
                        { name: "oliver.kopyuv@gotbootstrap.com", status: "", avatar: "avatar-c.png", note: "Offline" },
                        { name: "+714651347790", status: "", avatar: "avatar-m.png", note: "Missed Call" },
                      ].map((contact, i) => (
                        <li key={i}>
                          <a href="#" className="d-table w-100 px-2 py-2 text-dark hover-white">
                            <div className={`d-table-cell align-middle status status-${contact.status} status-sm`}>
                              <span
                                className="profile-image-md rounded-circle d-block"
                                style={{
                                  backgroundImage: `url("/AdminKit/img/demo/avatars/${contact.avatar}")`,
                                  backgroundSize: "cover",
                                }}
                              />
                            </div>
                            <div className="d-table-cell w-100 align-middle ps-2 pe-2">
                              <div className="text-truncate text-truncate-md">
                                {contact.name}
                                <small className={`d-block font-italic fs-xs ${contact.status === "success" ? "text-success" : contact.status === "danger" ? "text-danger" : "opacity-50"}`}>
                                  {contact.note}
                                </small>
                              </div>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <a className="fs-xl d-flex align-items-center p-3" href="#">
                      <i className="fal fa-cogs" />
                    </a>
                  </div>
                </div>
    
                {/* Chat area */}
                <div className="msgr d-flex h-100 flex-column bg-white">
                  <div className="custom-scroll flex-1 h-100">
                    <div id="chat_container" className="w-100 p-4">
                      <div className="chat-segment">
                        <div className="time-stamp text-center mb-2 fw-400">Jun 19</div>
                      </div>
                      <div className="chat-segment chat-segment-sent">
                        <div className="chat-message">
                          <p>Hey Tracey, did you get my files?</p>
                        </div>
                        <div className="text-end fw-300 text-muted mt-1 fs-xs">3:00 pm</div>
                      </div>
                      <div className="chat-segment chat-segment-get">
                        <div className="chat-message">
                          <p>Hi</p>
                          <p>Sorry going through a busy time in office. Yes I analyzed the solution.</p>
                          <p>It will require some resource, which I could not manage.</p>
                        </div>
                        <div className="fw-300 text-muted mt-1 fs-xs">3:24 pm</div>
                      </div>
                    </div>
                  </div>
    
                  {/* Input */}
                  <div className="d-flex flex-column">
                    <div className="border-faded border-end-0 border-bottom-0 border-start-0 flex-1 mx-3 position-relative shadow-top">
                      <div className="pt-3 pb-1" tabIndex={-1}>
                        <div
                          id="msgr_input"
                          contentEditable="true"
                          data-placeholder="Type your message here..."
                          className="height-10 form-content-editable"
                        />
                      </div>
                    </div>
                    <div className="height-8 px-3 d-flex flex-row align-items-center flex-wrap flex-shrink-0">
                      <a href="#" className="btn btn-icon fs-xl width-1 me-1" title="More options">
                        <i className="fal fa-ellipsis-v-alt color-fusion-300" />
                      </a>
                      <a href="#" className="btn btn-icon fs-xl me-1" title="Attach files">
                        <i className="fal fa-paperclip color-fusion-300" />
                      </a>
                      <a href="#" className="btn btn-icon fs-xl me-1" title="Insert photo">
                        <i className="fal fa-camera color-fusion-300" />
                      </a>
                      <div className="ms-auto">
                        <a href="#" className="btn btn-info">Send</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END chat */}
              </div>
            </div>
          </div>
        </div>
  
    









  );
};

export default Messenger;
