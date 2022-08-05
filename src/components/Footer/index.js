import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <footer>
            <div className='d-flex justify-content-center mt-3 mb-3'>
                <div>
                    <a className="github_icon me-3" href='https://github.com/luimr88' target="blank"><FontAwesomeIcon icon={faGithub} size="3x" /></a>
                    <a className="github_icon me-3" href='https://www.linkedin.com/in/luis-riveros-56243a1b8/' target="blank"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
                    <a className="github_icon me-3" href='https://stackoverflow.com/users/14615700/lriveros' target="blank"><FontAwesomeIcon icon={faStackOverflow} size="3x" /></a>
                </div>

            </div>
        </footer>
    )
}

export default Footer