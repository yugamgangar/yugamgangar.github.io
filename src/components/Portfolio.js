import React, { useState, useRef, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import '../css/style.css'

const Portfolio = () => {
  const all = useRef(null)
  const design = useRef(null)
  const code = useRef(null)

  const [projects, setProjects] = useState('all')
  const [data, setData] = useState(null)

  const renderRedirect = data => {
    if (data !== null) {
      return <Redirect push to={{
        pathname: data.path,
        state: {
          id: data.id,
          title: data.title,
          des: data.des,
          stack: data.stack
        }
      }}
      />    }
    else return null
  }

  const onCLickHandler = event => {
    switch (event.target.id) {
      case 'mahi': setData({
        path: '/project/mahi',
        id: ['mahi-1', 'mahi-2', 'mahi-3'],
        title: 'Mahi Jewellers Business Card Design',
        des: 'Authentic design of business cards.',
        stack: 'Software\'s used: Corel Draw, Adobe Illustrator'
      })
        break
      case 'qms': setData({
        path: 'project/qms',
        id: ['qms'],
        title: 'Quality Management System',
        des: 'React & Node based progressive web app for the purpose of quality management of a renowed concrete firm. Closely worked on this project in my internship period and had developed some components of it not completely, but had leaded and solely worked on whole project development (ie: Project Design, Frontend & Backend) during the time.',
        stack: 'Stack\'s used: Adobe XD, React Js, Node Js, Express Js, MySQL, Android (Java)'
      })
        break
      case 'reverberate': setData({
        path: '/project/reverberate',
        id: ['reverberate'],
        title: 'Reverberate Tech - One Destination for all IT solutions',
        des: 'Single page responsive website for software solution provider.',
        stack: 'Stack\'s used: HTML5, CSS3, Bootstrap4, Javascript ES6'
      })
        break
      case 'insight': setData({
        path: '/project/insight',
        id: ['insight-1', 'insight-2', 'insight-3', 'insight-4', 'insight-5'],
        title: 'Insight - Annual Business Fest of NM College',
        des: 'Designed event brochure booklet for the year 2019.',
        stack: 'Software\'s used: Corel Draw, Adobe Illustrator, Adobe Photoshop'
      })
        break
      case 'catalog': setData({
        path: '/project/catalog',
        id: ['catalogue-1', 'catalogue-2', 'catalogue-3', 'catalogue-4'],
        title: 'Authentic Catalog Design',
        des: 'Creative designing approach to catalog design brings creative art direction, content creation, product photography together and enhances the brand identity with detailing of product.',
        stack: 'Software\'s used: Corel Draw, Adobe Illustrator, Adobe Photoshop'
      })
        break
      case 'quare': setData({
        path: '/project/quare',
        id: ['quare-1', 'quare-2', 'quare-3', 'quare-4', 'quare-5'],
        title: 'Quare - Personal Health Assistant',
        des: 'Quare is an Android app, which solves the problem of maintaining all your health records at one place and keeping them up to date. With its various tools, it helps users in handling their health issues more quickly and efficiently in their day-to-day life, and hence providing more space for their enjoyment instead of being in stress for the same. The project made is a prototype of the mentioned description, which gives an idea of a final product.',
        stack: 'Stack\'s used: Adobe XD, Android (Java), Firebase'
      })
        break
      case 'poster': setData({
        path: '/project/poster',
        id: ['poster-1', 'poster-2'],
        title: 'Event Poster Design',
        des: 'Retro theme event poster design. The approach of sketching and transforming it into a real graphic art is what demonstrated out of box designs and truly helps defining the event.',
        stack: 'Software\'s used: Adobe Photoshop, Adobe Illustrator'
      })
        break
      case 'procure_infinity': setData({
        path: '/project/procureInfinity',
        id: ['procure_infinity'],
        title: 'Procure Infinity - Procurement App launch website',
        des: 'Product launch page for a procurement application made during internship.',
        stack: 'Stack\'s used: React JS, CSS3, React-Bootstrap'
      })
        break
      default: break
    }
  }

  useEffect(() => {
    const cards = document.querySelectorAll('div.pf-card')
    cards.forEach(card => card.addEventListener('click', e => onCLickHandler(e)))
  })

  const gallery = () => {
    if (projects === 'design') {
      return (
        <React.Fragment>
          <div className='row pf-container justify-content-center'>
            <div className='pf-card col-lg-4 col-md-4 design' id='mahi'>
              <div className='d-flex align-items-center justify-content-center px-5' id='mahi'><p id='mahi'>Mahi Jewellers</p></div>
            </div>
            <div className='pf-card col-lg-4 col-md-4 design' id='insight'>
              <div className='d-flex align-items-center justify-content-center px-5' id='insight'><p id='insight'>Insight '19</p></div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='pf-card col-lg-4 col-md-4 design' id='catalog'>
              <div className='d-flex align-items-center justify-content-center px-5' id='catalog'><p id='catalog'>Catalog Design</p></div>
            </div>
            <div className='pf-card col-lg-4 col-md-4 code' id='poster'>
              <div className='pf-card-tag d-flex align-items-center justify-content-center px-5' id='poster'><p id='poster'>Poster Design</p></div>
            </div>
          </div>
        </React.Fragment>
      )
    } else if (projects === 'code') {
      return (
        <React.Fragment>
          <div className='row pf-container justify-content-center'>
            <div className='pf-card col-lg-4 col-md-4 code' id='qms'>
              <div className='d-flex align-items-center justify-content-center px-5' id='qms'><p id='qms'>Quality Management System</p></div>
            </div>
            <div className='pf-card col-lg-4 col-md-4 code' id='reverberate'>
              <div className='d-flex align-items-center justify-content-center px-5' id='reverberate'><p id='reverberate'>Reveberate</p></div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='pf-card col-lg-4 col-md-4 code' id='quare'>
              <div className='d-flex align-items-center justify-content-center px-5' id='quare'><p id='quare'>Quare</p></div>
            </div>
            <div className='pf-card col-lg-4 col-md-4 code' id='procure_infinity'>
              <div className='d-flex align-items-center justify-content-center px-5' id='procure_infinity'><p id='procure_infinity'>Procure Infinity</p></div>
            </div>
          </div>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        <div className='row pf-container justify-content-center'>
          <div className='pf-card col-lg-4 col-md-4 design' id='mahi'>
            <div className='pf-card-tag d-flex align-items-center justify-content-center px-5' id='mahi'><p id='mahi'>Mahi Jewellers</p></div>
          </div>
          <div className='pf-card col-lg-4 col-md-4 code' id='qms'>
            <div className='pf-card-tag d-flex align-items-center justify-content-center px-5' id='qms'><p id='qms'>Quality Management System</p></div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='pf-card col-lg-4 col-md-4 code' id='reverberate'>
            <div className='pf-card-tag d-flex align-items-center justify-content-center px-5' id='reverberate'><p id='reverberate'>Reveberate</p></div>
          </div>
          <div className='pf-card col-lg-4 col-md-4 design' id='insight'>
            <div className='pf-card-tag d-flex align-items-center justify-content-center px-5' id='insight'><p id='insight'>Insight '19</p></div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='pf-card col-lg-4 col-md-4 design' id='catalog'>
            <div className='pf-card-tag d-flex align-items-center justify-content-center px-5' id='catalog'><p id='catalog'>Catalog Design</p></div>
          </div>
          <div className='pf-card col-lg-4 col-md-4 code' id='quare'>
            <div className='pf-card-tag d-flex align-items-center justify-content-center px-5' id='quare'><p id='quare'>Quare</p></div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='pf-card col-lg-4 col-md-4 code' id='poster'>
            <div className='pf-card-tag d-flex align-items-center justify-content-center px-5' id='poster'><p id='poster'>Poster Design</p></div>
          </div>
          <div className='pf-card col-lg-4 col-md-4 code' id='procure_infinity'>
            <div className='pf-card-tag d-flex align-items-center justify-content-center px-5' id='procure_infinity'><p id='procure_infinity'>Procure Infinity</p></div>
          </div>
        </div>
      </React.Fragment>
    )
  }

  const showAll = () => {
    setProjects('all')
    all.current.className = 'active'
    code.current.className = ''
    design.current.className = ''
  }

  const showDesign = () => {
    setProjects('design')
    all.current.className = ''
    code.current.className = ''
    design.current.className = 'active'
  }

  const showCode = () => {
    setProjects('code')
    all.current.className = ''
    code.current.className = 'active'
    design.current.className = ''
  }

  return (
    <section className='h-100 portfolio-section' name='portfoliopage-section'>
      {renderRedirect(data)}
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-3'>
            <p className='portfolio-head m-0 p-0'>PORTFOLIO</p>
            <p className='h4 my-4'>Filter</p>
            <ul className='m-0 p-0'>
              <li className='active' ref={all} onClick={showAll}>All</li>
              <li ref={design} onClick={showDesign}>Designing</li>
              <li ref={code} onClick={showCode}>Developement</li>
            </ul>
          </div>
          <div className='col-lg-9 col-md-9 justify-content-center portfolio-gallery'>
            {gallery()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
