import React from 'react'
import '../css/style.css'
const About = props => {

  return (
    <section className='py-5 about-section' name='aboutpage-section'>
      <div className='container' id='about-trigger'>
        <div className='row p-0 m-0 w-100 h-100 align-items-center justify-content-center'>
          <div className='col-lg-6 col-md-6 w-100 h-100 about-left-div' data-aos='fade-right' data-aos-anchor='#about-trigger'>
            <p className='about-head m-0 p-0'>ABOUT</p>
            <img className='img-fluid about-subject-img' src={require('../assets/about-subject.png')} alt='' id='about-image' />
          </div>
          <div className='col-lg-6 col-md-6 w-100 h-100 about-right-div' data-aos='fade-right' data-aos-anchor='#about-trigger'>
            <p className='blockquote font-italic'>"If you want something you've never had, you must be willing to do something you've never done."</p>
            <p className='text-justify'>I am an Full Stack Developer based in the land of dreams, Mumbai, India. Adventurous, versatile professional with core interest in Information Technology and Human Science. Skilled in Public Speaking, Graphic Design, Technological Solutions, Software Development, and Leadership &amp; Management.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
