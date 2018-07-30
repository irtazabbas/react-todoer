import React from 'react';

export default navbar = () => {
  return (
    <nav className="navbar navbar-static-top">
      <div className="navbar-header">
      <button aria-controls="navbar"
        aria-expanded="false"
        data-target="#navbar"
        data-toggle="collapse"
        className="navbar-toggle collapsed hidden-xs"
        type="button">

        <i className="fa fa-reorder"></i>

      </button>

      <a className="navbar-brand" style="padding-top: 13px;" href="/">
        <img ng-src="{{platformLogo}}" className="platformLogoSize" />
      </a>
      </div>
    </nav>
  )
};
