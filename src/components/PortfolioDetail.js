import React, { useEffect, useState } from 'react'
// import { Carousel } from 'react-bootstrap'
// import Footer from './Footer'
import { animateScroll as scroll } from 'react-scroll'
import { Link } from 'react-router-dom'
import '../css/portfolio-detail.scss'
import { IKImage } from 'imagekitio-react'
import ReactCardCarousel from 'react-card-carousel';

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
  })

  const getData = () => {
    props.location.state !== undefined
      ? setData(props.location.state)
      : setData(copyData)
  }

  const carousel = () => {
    return (
      data.desktop ? (
        <IKImage
          urlEndpoint="https://ik.imagekit.io/6wtwvtg6cyei/"
          path={data.id[0]}
          loading="lazy"
          lquip={{ active: true, quality: 20, blur: 6 }}
          className='d-block w-100 img-fluid'
          id={data.id[0]}
          // transformation={[card_style]}
          style={{ borderRadius: '12px' }}
          alt='First slide' />
      ) : (
          <ReactCardCarousel spread="wide" autoplay={true} autoplay_speed={3000} >
            {data.id.map(item => {
              return (
                <div style={window.innerWidth < 813 ? { width: "300px" } : { width: "375px" }}>
                  <IKImage
                    urlEndpoint="https://ik.imagekit.io/6wtwvtg6cyei/"
                    path={item}
                    loading="lazy"
                    lquip={{ active: true, quality: 20, blur: 6 }}
                    className='d-block w-100 img-fluid'
                    id={item}
                    transformation={[{
                      height: "665",
                      // width: "375"
                    }]}
                    style={{ borderRadius: '12px' }}
                    alt='First slide' />
                </div>
              )
            }
            )}
          </ReactCardCarousel>
        )
    )
  }

  useEffect(() => {
    scroll.scrollToTop()
  })

  return (
    <div className='portfolioDetail-section'>
      <div className='w-100 justify-content-center row align-items-center'>
        <Link to='/'>
          <IKImage
            urlEndpoint="https://ik.imagekit.io/6wtwvtg6cyei"
            path="/logo.svg"
            loading="lazy"
            lquip={{ active: true, quality: 20, blur: 6 }}
            className='portfolio-header-logo'
            alt='Home' />
        </Link>
      </div>
      <div className='pfd-body'>
        <div className='container'>
          <div className='carousel-container' style={data.desktop ? { overflow: 'auto', borderRadius: "12px" } : {}}>{carousel()}</div>
          <p className='project-title'>{data.title}</p>
          <p className='project-description'>{data.des}</p>
          <p className='project-stack'>{data.stack}</p>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default PortfolioDetail
