import React from 'react'
import '../css/about.scss'
import { IKImage } from 'imagekitio-react'

const About = () => {
  return (
    <section className='py-5 about-section' name='aboutpage-section'>
      <div className='container' id='about-trigger'>
        <div className='row p-0 m-0 w-100 h-100 align-items-center justify-content-center'>
          <div className='col-lg-5 col-md-6 w-100 h-100 about-left-div' data-aos='fade-right' data-aos-anchor='#about-trigger'>
            <p className='about-head m-0 p-0'>ABOUT</p>
            <IKImage urlEndpoint="https://ik.imagekit.io/6wtwvtg6cyei/" path="/about-subject.png" loading="lazy" lquip={{ active: true, quality: 20, blur: 6 }} className='img-fluid about-subject-img' id="about-image" />
          </div>
          <div className="col-lg-1" />
          <div className='col-lg-6 col-md-6 w-100 h-100 about-right-div' data-aos='fade-right' data-aos-anchor='#about-trigger'>
            <p className='blockquote font-italic'>"If you want something you've never had, you must be willing to do something you've never done."</p>
            <p className='text-justify'>
              👨‍💻🖍️ I'm a Full Stack Engineer with 2+ years of experience interacting with clients &amp; product owners and also a
              UI/UX designer by interest.
              </p>
            <p className='text-justify'>
              🚀⚙️ Being adventurous &amp; an addictive learner by nature with a core interest in technology &amp;
              psychology, I found my passion in building products.
              </p>
            <p className='text-justify'>
              🧗🕶 Adventure sports, Outdoor activities, making new friends &amp; solving complex problems gives me adrenaline rush.
              </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
