import React from "react";

const MainPage = () => {
  return (
    <>
      <ol className="breadcrumb page-breadcrumb">
        <li className="breadcrumb-item">
          <a href="javascript:void(0);">SmartAdmin</a>
        </li>
        <li className="breadcrumb-item">category_1</li>
        <li className="breadcrumb-item">category_2</li>
        <li className="breadcrumb-item active">Page Titile</li>
        <li className="position-absolute pos-top pos-right d-none d-sm-block">
          <span className="js-get-date" />
        </li>
      </ol>
      <div className="subheader">
        <h1 className="subheader-title">
          <i className="subheader-icon fal fa-" /> Page{" "}
          <span className="fw-300">Title</span>{" "}
          <sup className="badge badge-primary fw-500">ADDON</sup>
          <small>blank description</small>
        </h1>
        <div className="subheader-block">Right content of header</div>
      </div>
      <div className="alert alert-primary">
        <div className="d-flex flex-start w-100">
          <div className="mr-2 hidden-md-down">
            <span className="icon-stack icon-stack-lg">
              <i className="base base-6 icon-stack-3x opacity-100 color-primary-500" />
              <i className="base base-10 icon-stack-2x opacity-100 color-primary-300 fa-flip-vertical" />
              <i className="ni ni-blog-read icon-stack-1x opacity-100 color-white" />
            </span>
          </div>
          <div className="d-flex flex-fill">
            <div className="flex-fill">
              <span className="h5">About</span>
              <p>Points.</p>
              <p className="m-0">
                Find in-depth, guidelines, tutorials and more on Addon's{" "}
                <a href="#" target="_blank">
                  Official Documentation
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div id="panel-1" className="panel">
            <div className="panel-hdr">
              <h2>
                Panel{" "}
                <span className="fw-300">
                  <i>Title</i>
                </span>
              </h2>
              <div className="panel-toolbar">
                <button
                  className="btn btn-panel"
                  data-action="panel-collapse"
                  data-toggle="tooltip"
                  data-offset="0,10"
                  data-original-title="Collapse"
                />
                <button
                  className="btn btn-panel"
                  data-action="panel-fullscreen"
                  data-toggle="tooltip"
                  data-offset="0,10"
                  data-original-title="Fullscreen"
                />
                <button
                  className="btn btn-panel"
                  data-action="panel-close"
                  data-toggle="tooltip"
                  data-offset="0,10"
                  data-original-title="Close"
                />
              </div>
            </div>
            <div className="panel-container show">
              <div className="panel-content">
                <div className="panel-tag">
                  Panel tag <code>code</code>
                </div>
                Text
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
