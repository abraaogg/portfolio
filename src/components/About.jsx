import React from 'react'
import "../styles/about.css";
import profileImg from '../imgs/profile.jpeg';

function About() {
  return (
    <div className='about'>
      <div className='about-container'>
        <h2>ABOUT ARIS</h2>
        <img src={profileImg} alt='Profile Picture' />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero inventore, quas provident reprehenderit vitae voluptas, dolore ab officiis rerum, corporis cumque quae ea ratione. Corporis corrupti asperiores sapiente aliquam sunt?</p>
      </div>
    </div>
  )
}

export default About