import React from 'react'
import { Carousel } from 'react-bootstrap'
import Footer from './Footer'
import Header from './Header'

const PortfolioDetail = props => {
  const carousel = () => {
    const ids = props.location.state.id
    return (
      <Carousel interval={null} touch>
        {
          ids.map(item => {
            return (
              <Carousel.Item key={item}>
                <img className='d-block w-100 img-fluid' id={item}
                  alt='First slide' />
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    )
  }

  return (
    <div className='portfolioDetail-section'>
      <Header windowWidth={900} />
      <div className='pfd-body d-flex'>
        <div className='container pfd-container my-5'>
          <div className='carousel-container my-5'>
            {carousel()}
          </div>
          <p className='project-title'>{props.location.state.title}</p>
          <p className='project-description'>{props.location.state.des}</p>
          <p className='project-stack'>{props.location.state.stack}</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PortfolioDetail
