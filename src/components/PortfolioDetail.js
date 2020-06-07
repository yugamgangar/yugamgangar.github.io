import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import Footer from './Footer'
import { animateScroll as scroll } from 'react-scroll'
import { Link } from 'react-router-dom'

let copyData = null

const PortfolioDetail = props => {
  const [data, setData] = useState({
    path: '',
    id: [],
    title: '',
    des: '',
    stack: ''
  })

  useEffect(() => {
    getData()
    copyData = data
  }, [])

  const getData = () => {
    props.location.state !== undefined
      ? setData(props.location.state)
      : setData(copyData)
  }

  const carousel = () => {
    const ids = data.id
    return (
      <Carousel interval={null} touch>
        {ids.map(item => {
          return (
            <Carousel.Item key={item}>
              <img
                className='d-block w-100 img-fluid'
                id={item}
                alt='First slide'
              />
            </Carousel.Item>
          )
        })}
      </Carousel>
    )
  }

  console.log(data)

  useEffect(() => {
    scroll.scrollToTop()
  }, [])

  return (
    <div className='portfolioDetail-section'>
      <div className='w-100 justify-content-center row align-items-center'>
        <Link to='/'>
          <img
            src={require('../assets/logo.svg')}
            className='portfolio-header-logo'
            alt='Home'
          />
        </Link>
      </div>
      <div className='pfd-body d-flex'>
        <div className='container pfd-container my-5'>
          <div className='carousel-container my-5'>{carousel()}</div>
          <p className='project-title'>{data.title}</p>
          <p className='project-description'>{data.des}</p>
          <p className='project-stack'>{data.stack}</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PortfolioDetail
