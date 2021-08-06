import React, { useEffect } from 'react'
import '../css/banner.scss'
import { IKImage } from 'imagekitio-react'
import Typed from 'typed.js'

const Banner = () => {

  useEffect(() => {
    new Typed('#typed', {
      strings: ['Tech Geek.^1000', 'Full Stack Engineer.^1000', 'UI/UX Designer.^1000'],
      smartBackspace: true,
      loop: true,
      typeSpeed: 60,
      loopCount: Infinity,
      autoInsertCss: true
    })
  }, [])

  return (
    <section className='banner-area d-flex mt-4' name='bannerpage-section'>
      <div className='parallax-background' />
      <div className='container d-flex align-items-center'>
        <div className='row fullscreen align-items-center justify-content-between' id='trigger'>
          <div className='col-lg-6 col-md-6 banner-left'>
            <h4>👋 Hey! I am</h4>
            <p className='banner-name'>Yugam Gangar</p>
            <span className='role-text'>I am a <span id='typed' className='font-weight-bold' /></span>
            <p className='mt-4 text-justify'>
              💞️ Technology and Psychology. <br />
              👀 Exploring possibilities...
            </p>
          </div>
          <div className="col-lg-1" />
          <div className='col-lg-5 col-md-6 banner-right'>
            <IKImage urlEndpoint="https://ik.imagekit.io/6wtwvtg6cyei/" path="contact.jpg" loading="lazy" lquip={{ active: true, quality: 20, blur: 6 }} className="img-fluid" style={{ borderRadius: "12px" }} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Banner
