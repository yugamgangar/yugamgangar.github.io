import React, { useEffect } from 'react'
import '../css/style.css'
import Typed from 'typed.js'

const Banner = () => {
  useEffect(() => {
    new Typed('#typed', {
      strings: ['Developer.^1000', 'Designer.^1000'],
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
      <div className='container'>
        <div className='row fullscreen align-items-center justify-content-between' id='trigger'>
          <div className='col-lg-6 col-md-6 banner-left'>
            <h5>Hey! I am</h5>
            <p className='banner-name'>Yugam Gangar</p>
            <span className='role-text'>I am a <span id='typed' className='font-weight-bold' /></span>
            <p className='mt-4 text-justify'>
              You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost
              showing Scrooge some different futures.
            </p>
          </div>
          <div className='col-lg-6 col-md-6 banner-right'>
            <img className='img-fluid' src={require('../assets/banner-subject2.png')} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Banner
