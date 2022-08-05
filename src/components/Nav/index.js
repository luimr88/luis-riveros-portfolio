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
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#e9c46a"}}>
      <div className="container-fluid">
        <h2 className="nav-title">Luis Riveros</h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={`nav-link ${aboutSelected && 'nav-link active'}`} aria-current="page" href="#about" onClick={() => {
                setAboutSelected(true);
                setPortfolioSelected(false);
                setContactSelected(false);
                setResumeSelected(false);
              }}>About</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${portfolioSelected && 'nav-link active'}`} href="#portfolio" onClick={() => {
                setAboutSelected(false);
                setPortfolioSelected(true);
                setContactSelected(false);
                setResumeSelected(false);
              }}>Portfolio</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${contactSelected && 'nav-link active'}`} href="#contact" onClick={() => {
                setAboutSelected(false);
                setPortfolioSelected(false);
                setContactSelected(true);
                setResumeSelected(false);
              }}>Contact</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${resumeSelected && 'nav-link active'}`} href="#resume" onClick={() => {
                setAboutSelected(false);
                setPortfolioSelected(false);
                setContactSelected(false);
                setResumeSelected(true);
              }}>Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav