import React, { useState } from "react";
import { validateEmail } from '../../utils/helper';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(event) {
        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            console.log(isValid);

            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required.`)
            } else {
                setErrorMessage('');
            }
        }
        console.log('errorMessage', errorMessage);
        if (!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value })
        }
    }

    function handleFormClear(e) {
        setFormState({...formState, [e.target.name]: e.target.value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        setFormState({name: '', email: '', message: ''})
        console.log(formState);
    }
    return (
        <section>
            <div className="row justify-content-center mt-3 m-0">
                <div className="shadow-lg card col-sm-6 p-0">
                    <h3 className="card-header p-0 text-center" style={{backgroundColor: "#cad2c5", color: "#264653" }}>Contact Me</h3>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="card-body rounded" style={{backgroundColor: "#ffffff"}}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label text-start" style={{color: "#264653"}}>Name:</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                value={name}
                                id="exampleFormControlInput1" 
                                placeholder="John Doe" 
                                onBlur={handleChange} 
                                name="name"
                                onChange={handleFormClear}
                                ></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-start" style={{color: "#264653"}}>Email address:</label>
                                <input 
                                type="email" 
                                className="form-control" 
                                value={email}
                                id="exampleFormControlInput1" 
                                placeholder="name@example.com" 
                                onBlur={handleChange} 
                                name="email"
                                onChange={handleFormClear}
                                ></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label" style={{color: "#264653"}}>Message:</label>
                                <textarea 
                                className="form-control" 
                                value={message}
                                id="exampleFormControlTextarea1" 
                                rows="3" 
                                onBlur={handleChange} 
                                name="message"
                                onChange={handleFormClear}
                                ></textarea>
                            </div>
                            {errorMessage && (
                                <div>
                                    <p className="error-text">{errorMessage}</p>
                                </div>
                            )}

                            <button className="btn" type="submit" style={{backgroundColor: "#264653", color: "#ffffff"}}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact