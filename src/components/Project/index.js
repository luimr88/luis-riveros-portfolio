import React from "react";

function Project(props) {
    return (
        <section>
            <div className="container">
                <div>
                    <h1 className='text-center mt-2 text-white'>Portfolio</h1>
                </div>
                <div className="d-flex flex-wrap justify-content-between">
                    <div className="card mb-3 col-md-6 col-sm-12 col-12" style={{ maxWidth: "640px" }}>
                        <img src="..." className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div className="card mb-3 col-md-6 col-sm-12 col-12" style={{ maxWidth: "640px" }}>
                        <img src="..." className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div className="card mb-3 col-md-6 col-sm-12 col-12" style={{ maxWidth: "640px" }}>
                        <img src="..." className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div className="card mb-3 col-md-6 col-sm-12 col-12" style={{ maxWidth: "640px" }}>
                        <img src="..." className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Project