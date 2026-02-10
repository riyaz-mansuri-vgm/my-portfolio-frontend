// src/pages/Home.js
import React from "react";
import  './../assets/style.css';
import { Link } from "react-router-dom";
const Home=()=> {
  return (
    <div className="hero-container">
      <div className="hero-card">
        <h1 className="title">
          Hi, I'm <span>Riyaz Mansuri</span>
        </h1>
        <p className="subtitle">Full-Stack .NET & React Developer</p>
        <button className="hero-btn" ><Link to="projects" className="no-underline" >Explore My Work</Link></button>
      </div>

      <div className="cube">R</div>
    </div>

  );
}
export default Home;
