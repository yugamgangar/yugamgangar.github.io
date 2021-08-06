import React from 'react'
import '../css/contact.scss'
import { Col, Row, Container, Nav } from 'react-bootstrap'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { IKImage } from 'imagekitio-react'

const Contact = () => {
  return (
    <section className='w-100 h-100 contact-section' name='contactpage-section'>
      <div className='contact-upper-container'>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='image-section' >
              <p className='contact-head m-0 p-0'>CONTACT</p>

              <IKImage
                urlEndpoint="https://ik.imagekit.io/6wtwvtg6cyei/"
                path={"contact-subject.png"}
                loading="lazy"
                lquip={{ active: true, quality: 20, blur: 6 }}
                className='d-block w-100 img-fluid'
                style={{ borderRadius: '12px' }} />

              {/* <img className='img-fluid' src={require('../assets/contact-subject.png')} alt='Contact Me' /> */}
            </Col>
            <Col className='contact-left'>
              <p> Let's do something amazing.</p>
              <Row className='align-items-center mx-auto'>
                <div className='contact-icon-container d-flex justify-content-center align-items-center' id='linkedin'>
                  <FaLinkedinIn className='icon' />
                </div>
                <Nav.Link href='https://www.linkedin.com/in/yugamgangar/' className='ml-3 linkedin'>Connect with me on LinkedIn</Nav.Link>
              </Row>
              <Row className='align-items-center mx-auto my-3'>
                <div className='contact-icon-container d-flex justify-content-center align-items-center' id='twitter'>
                  <FaTwitter className='icon' />
                </div>
                <Nav.Link href='https://twitter.com/gangaryugam' className='ml-3 twitter' >Follow me on Twitter</Nav.Link>
              </Row>
              <Row className='align-items-center mx-auto'>
                <div className='contact-icon-container d-flex justify-content-center align-items-center' id='gmail'>
                  <MdMail className='icon' />
                </div>
                <Nav.Link href="mailto:gangaryugam@gmail.com" className='ml-3 gmail' >Connect with me on Gmail</Nav.Link>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <div className='contact-lower-container'>
        <Container>
          <p>Have something to talk about?</p>
          <p style={{ fontSize: '2rem' }}>Let's grab a coffee together.</p>
          <Form>
            <Form.Row>
              <Col lg='6' md='6' sm='12' className='px-auto'>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type='email' placeholder='Name' />
                </Form.Group>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type='email' placeholder='Email' />
                </Form.Group>
              </Col>
              <Col lg='6' md='6' sm='12'>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control as='textarea' rows='8' placeholder='Message' />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Button variant='primary' size='md' className='contact-btn' type='submit'>Send</Button>
            </Form.Row>
          </Form>
        </Container>
      </div> */}

    </section>
  )
}

export default Contact
