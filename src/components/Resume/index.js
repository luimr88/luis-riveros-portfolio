import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons'

function Resume() {
    return (
        <section>
            <div>
                <h1 className='text-center mt-2 text-white'>Resume</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
                <div className="col-md-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Front-End Skills</h5>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>Bootstrap</li>
                                <li>React</li>
                                <li>Git</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Back-End Skills</h5>
                            <ul>
                                <li>APIs</li>
                                <li>Express</li>
                                <li>REST</li>
                                <li>PWA</li>
                                <li>MVC</li>
                                <li>MongoDB/Mongoose</li>
                                <li>MySQL/NoSQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-2">
                <p className="text-white">To download my full resume click here: <a className="github_icon" href='https://docs.google.com/document/d/1Gpoeb3ix3S9yPBNgO4r8tM5WRPUUfWhK/edit?usp=sharing&ouid=116991899601999784603&rtpof=true&sd=true' target="blank"><FontAwesomeIcon icon={faGoogleDrive} size="2x" /></a></p>
            </div>
        </section>
    )
}

export default Resume