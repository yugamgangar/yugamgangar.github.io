import React from 'react'
import '../css/portfolio-detail.scss'
import { IKImage } from 'imagekitio-react'
import ReactCardCarousel from 'react-card-carousel';


const PortfolioDetail = ({ id, title, des, stack, desktop }) => {

  const carousel = () => {
    return (
      desktop ? (
        <IKImage
          urlEndpoint="https://ik.imagekit.io/6wtwvtg6cyei/"
          path={id[0]}
          loading="lazy"
          lquip={{ active: true, quality: 20, blur: 6 }}
          className='d-block w-100 img-fluid'
          id={id[0]}
          // transformation={[card_style]}
          style={{ borderRadius: '12px' }}
          alt='First slide' />
      ) : (
          <ReactCardCarousel spread="wide" autoplay={true} autoplay_speed={3000} >
            {id && id.map(item => {
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

  return (
    <div className='portfolioDetail-section'>

      {/* <div className='pfd-body'> */}
      <div className='row m-0 p-0' style={window.innerWidth < 500 ? { flexDirection: "column-reverse" } : {}}>
        <div className="col-lg-4 col-sm-12 py-5 pl-5">
          <p className='project-title'>{title}</p>
          <p className='project-description'>{des}</p>
          <p className='project-stack'>{stack}</p>
        </div>
        <div className=" col-lg-8 col-sm-12">
          {id && (
            <div className='carousel-container' style={desktop ? { overflow: 'auto', borderRadius: "12px" } : {}}>{carousel()}</div>
          )}
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default PortfolioDetail
