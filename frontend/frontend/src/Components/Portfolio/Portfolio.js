import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Portfolio.css';


function Portfolio() {
    const [projects, setProject] = useState({});
    useEffect(() => {
        axios.get('https://port-folio-react-node.herokuapp.com/portfolio')
            .then(
                res => setProject(res.data)
            )
    }, [setProject])
    console.log(projects);

    return (
        <div className="card-container">
            {projects.length>0 && projects.map((project,index) =>
                <div className="first-card" key={index} >
                    <h1>{project.name}</h1>
                    <img className="img-project" alt="imagen-project" src={project.image} />
                    <p>{project.descripcion}</p>
                    <a className="btn-visitar" href={project.link}>Visitar</a>
                </div>
            )}
        </div>
    )
}

export default Portfolio;