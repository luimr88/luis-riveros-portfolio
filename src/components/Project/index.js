import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function Project(props) {
    const projects = [
        {
            id: '0',
            name: 'World Wide Jerky',
            description: 'Group project for an E-commerce web page for a local beef jerky company. Project used MERN stack, Apollo, GraphQL, JWT, and Bcrypt.',
            deployedLink: 'https://worldwidejerky.herokuapp.com/',
            github: 'https://github.com/mjzabriskie/world-wide-jerky',
            projectImage: 'WorldWideJerky'
        },
        {
            id: '1',
            name: 'Weather Dashboard',
            description: 'App using weather API that will give the user the weather based off of a city name. Also shows the 5-day forecast for the city. App was built using Javascript, HTML, CSS, and Server-Side API. ',
            deployedLink: 'https://luimr88.github.io/weather-dashboard/',
            github: 'https://github.com/luimr88/weather-dashboard',
            projectImage: 'WeatherDash'
        },
        {
            id: '2',
            name: 'Marvelous Gifs',
            description: 'Group project using Marvel Comics API where the user can get the bio, comics, and gifs to a Marvel character they search. Project used HTML, CSS, Bulma, Javascript, Marvel API, Giphy API.',
            deployedLink: 'https://mjzabriskie.github.io/marvel-ous-gifs/',
            github: 'https://github.com/mjzabriskie/marvel-ous-gifs',
            projectImage: 'MarvelousGifs'
        },
        {
            id: '3',
            name: "A Hero's Outline",
            description: "Group project where a user can create an outline for writing a story using Dan Harmon's story circle concept, while being able to save story outlines to their account. Project used Express, MYSQL, MYSQL2, Sequelize, Handlebars, HTML, CSS, and Javascript.",
            deployedLink: 'https://herooutline.herokuapp.com/',
            github: 'https://github.com/mjzabriskie/a-heros-outline',
            projectImage: 'HerosOutline'
        },
        {
            id: '4',
            name: 'Password Generator',
            description: 'Web app where a user can generate a random password of different lengths, symbols, letters, and numbers. App was built using Javascript, HTML, CSS.',
            deployedLink: 'https://luimr88.github.io/password-generator/',
            github: 'https://github.com/luimr88/password-generator',
            projectImage: 'PasswordGen'
        },
        {
            id: '5',
            name: 'PWA Budget Tracker',
            description: 'Budget tracking app that can keep track of expenses along with a visual graph. App can be used offline. App was built using PWA, Express, Mongoose, Compression, and Morgan.',
            deployedLink: 'https://stark-woodland-05347.herokuapp.com/',
            github: 'https://github.com/luimr88/pwa-budget-tracker',
            projectImage: 'BudgetTracker'
        },
        {
            id: '6',
            name: 'Note Taker',
            description: 'Web app where the user is able to to enter notes, save, and delete notes on the webpage. App was built using Express, Javascript, and HTML.',
            deployedLink: 'https://evening-journey-94806.herokuapp.com/',
            github: 'https://github.com/luimr88/note-taker',
            projectImage: 'NoteTaker'
        }
    ];
    return (
        <section>
            <div className="container">
                <div>
                    <h1 className='text-center mt-2 text-white'>Portfolio</h1>
                </div>
                <div className="d-flex flex-wrap justify-content-between">
                    {projects.map((project) => (
                        <div className="shadow-lg card mb-3 col-md-6 col-sm-12 col-12" style={{ maxWidth: "640px" }} key={project.id}>
                            <img src={require(`../../assets/images/${project.projectImage}.png`)} className="card-img-top" id="image_img" alt="portfolio thumbnail"></img>
                            <div className="image__overlay image__overlay--primary">
                                <a className="image__title" href={project.deployedLink} target="blank">{project.name}</a>
                                <a className="github_icon" href={project.github} target="blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{project.name}</h5>
                                <p className="card-text">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project