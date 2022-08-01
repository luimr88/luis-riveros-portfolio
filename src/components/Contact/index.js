import React from "react";

function Contact() {
    return (
        <section>
            <div className="row justify-content-center mt-3">
                <div className="card col-sm-6 p-0">
                    <h3 className="card-header p-0 text-center">Contact Me</h3>
                    <div className="card-body">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-start">Name:</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-start">Email address:</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message:</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact