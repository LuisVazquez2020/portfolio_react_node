import React, { useEffect, useState } from 'react';
import axios from 'axios';
 import './About.css'; 


// function components

function About() {
    const [info, setInfo] = useState({});
    useEffect(() => {
        axios.get('https://port-folio-react-node.herokuapp.com/about')
            .then(
                res => setInfo(res.data[0])
            )
            .catch((error) => error)
    }, [setInfo])

    return (
        <div className="container">
            <div className="div-foto">
                <img className="foto-perfil" src={info.photo} />
            </div>
            <div className="descripcion" >
                <h1>{info.name}</h1>
                <h2>{info.profession}</h2>
                <p>{info.about_me}</p>
                <ul className="skills">
                    {info.skills && info.skills.map((e, i) =>
                    <p className="skill" key={i}>{e}</p>)}
                </ul>
            </div>
        </div>
    );

}


export default About;
