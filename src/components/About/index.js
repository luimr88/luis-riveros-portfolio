import React from 'react'
import coverPhoto from "../../assets/images/AboutPic.jpg"

function About() {
    return (
        <section>
            <h1 className='text-center mt-2 mb-3 text-white'>About Me</h1>
            <div className='row justify-content-center m-0'>
                <img src={coverPhoto} style={{ width: "auto", height: "auto", maxWidth: "480px", maxHeight: "640px", borderRadius: '57px' }} alt="me" />
            </div>
            <div className='row justify-content-center m-0'>
                <div className='shadow-lg card mt-3 col-6'>
                    <div className='card-body'>
                        <p className='card-text text-start'>
                            My name is Luis Riveros and I was born in Colombia but I was raised in Maryland
                            since I was 2. I am hoping to be a full stack developer by the time
                            I finish my Coding Bootcamp at the University of Utah. I currently live in Utah and hope to find a job as a
                            fullstack developer here in the state.
                        </p>
                        <p className='card-text text-start'>
                            I am currently learning front-end and back-end skills in the program. In the portfolio section you will find some of the
                            current work I have done during the Bootcamp.
                        </p>
                        <p className='card-text text-start'>
                            If you have any questions for me, please feel free to contact me using the contact page. Thank
                            you for spending the time looking over my portfolio and I look forward to hearing from you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About