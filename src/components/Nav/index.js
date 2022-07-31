import React from "react";

function Nav(props) {
  const {
    setAboutSelected,
    aboutSelected,
    setPortfolioSelected,
    portfolioSelected,
    setContactSelected,
    contactSelected,
    setResumeSelected,
    resumeSelected
  } = props;
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className={`nav-link active ${aboutSelected}`} aria-current="page" href="#about" onClick={() => {
                setAboutSelected(true);
                setPortfolioSelected(false);
                setContactSelected(false);
                setResumeSelected(false);
              }}>About</span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio" onClick={() => {
                setAboutSelected(false);
              }}>Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav