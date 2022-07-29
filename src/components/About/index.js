import React from 'react'
import coverPhoto from "../../assets/images/yurppp.jpg"

function About() {
    return (
        <section>
            <h1 id='about-me'className='text-center mt-2'>About Me</h1>
            <img src={coverPhoto} style={{ width: "auto", height: "auto", maxWidth: "480px", maxHeight: "640px" }} alt="me"/>
            <p className='text-center mt-3'>
                My name is Luis Riveros and I was born in Colombia but I was raised in Maryland
                since I was 2. I am hoping to be a full stack developer by the time
                I finish my Coding Bootcamp at the University of Utah. I currently live in Utah and hope to find a job as a
                full
                stack developer
                here in the state.
                <br/>
                I am currently learning HTML, CSS, and javascript in the program. Below you will find some of the
                current work I have done, with more to come as the bootcamp continues.<br></br>
                If you have any questions for me, please feel free to contact me using the contact page. Thank
                you for spending the time looking over my portfolio and I look forward to hearing from you. Resume
                coming soon.
            </p>
        </section>
    )
}

export default About