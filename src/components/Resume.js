import React from 'react'
import '../css/resume.scss'
import { MdDevices, MdSchool } from 'react-icons/md'
import { FaChalkboardTeacher, FaSchool } from 'react-icons/fa'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { Nav } from 'react-bootstrap'
import StarRatings from 'react-star-ratings';

const Resume = () => {

  return (
    <section className='resume-section goto-here' id='resume-section' name='resumepage-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <p className='resume-head m-0 p-0'>RESUME</p>
            <nav id='navi'>
              <ul>
                <li>
                  <Link
                    to='page-2'
                    activeClass='active'
                    spy
                    smooth
                    offset={-40}
                    duration={500}
                    name='experience'
                    className='resume-link'>
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    to='page-1'
                    activeClass='active'
                    spy
                    smooth
                    offset={-40}
                    duration={500}
                    name='education'
                    className='resume-link'>
                    Education
                  </Link>
                </li>
                <li>
                  <Link
                    to='page-3'
                    activeClass='active'
                    spy
                    smooth
                    offset={-40}
                    duration={500}
                    name='skills'
                    className='resume-link'>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to='page-4'
                    activeClass='active'
                    spy
                    smooth
                    offset={-40}
                    duration={500}
                    name='awards'
                    className='resume-link'>
                    Publications
                  </Link>
                </li>
                <li>
                  <Nav.Link href='resume.pdf' download='resume.pdf' className='download-resume pl-0'>Detailed Resume</Nav.Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='col-md-9'>
            <div name='page-2' className='page two'>
              <h2 className='heading'>Experience</h2>
              <div className='resume-wrap d-flex'>
                <div className='icon d-flex align-items-center justify-content-center'>
                  <MdDevices className='icon' />
                </div>
                <div className='text pl-3'>
                  <span className='date'>December 2019 - Present</span>
                  <h2>Full Stack Engineer</h2>
                  <span className='position'>CareerNinja</span>
                  <ul>
                    <li>
                      <p className='text-left'>
                        Responsible for building and managing the frontend of complete app suite at CareerNinja from scratch catering ~80k+ users with a team of 4 developers.
                    </p>
                    </li>
                    <li>
                      <p className='text-left'>
                        Experienced a product journey from 0 to 1. Built micro-frontend architecture for performance optimization and
                        increased product usability with UI/UX.
                    </p>
                    </li>
                    <li>
                      <p className='text-left'>
                        Worked on end to end implementation (Design, Development and Architect)
                        of various systems for better personalisation and content recommendations.
                    </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='resume-wrap d-flex'>
                <div className='icon d-flex align-items-center justify-content-center'>
                  <MdDevices className='icon' />
                </div>
                <div className='text pl-3'>
                  <span className='date'>July 2019 - September 2019</span>
                  <h2>Full Stack Developer Intern</h2>
                  <span className='position'>Edunomics Tech Solutions</span>
                  <p className='text-left'>
                    Contributed in development of ReactJS based quality management app used by all employees of the one of India's biggest readymix concrete company RDC Concrete with team of 3 developers.
                    </p>
                  <p className='text-left'>
                    Closely worked on the phases of project requirements analyzing, software designing, &amp; development of SDLC.
                  </p>
                </div>
              </div>

              <div className='resume-wrap d-flex'>
                <div className='icon d-flex align-items-center justify-content-center'>
                  <FaChalkboardTeacher className='icon' />
                </div>
                <div className='text pl-3'>
                  <span className='date'>June 2017 – July 2018</span>
                  <h2>Programme Leader &amp; Co-founder</h2>
                  <span className='position'>Initiative Akanksha</span>
                  <p className='text-left'>
                    “Akanksha” is an initiative about developing resources that seek to bridge the digital divide and transform information-dark communities into informationempowered communities.
                  </p>
                  <p className='text-left'>
                    Actively worked on Lab setup, Marketing and Course design vertical from
                    planning to execution.
                  </p>
                </div>
              </div>
            </div>

            <div name='page-1' className='page one'>
              <h2 className='heading'>Education</h2>
              <div className='resume-wrap d-flex'>
                <div className='icon d-flex align-items-center justify-content-center'>
                  <MdSchool className='icon' />
                </div>
                <div className='text pl-3'>
                  <span className='date'>2016-2019</span>
                  <h2>Bachelor of Science in Information Technology</h2>
                  <span className='position'>
                    Narsee Monjee College of Commerce &amp; Economics, Mumbai
                    University
                  </span>
                  <p>CGPI (7.4/10)</p>
                </div>
              </div>
              <div className='resume-wrap d-flex'>
                <div className='icon d-flex align-items-center justify-content-center'>
                  <FaSchool className='icon' />
                </div>
                <div className='text pl-3'>
                  <span className='date'>2014-2016</span>
                  <h2>Higher Secondary Education (XII)</h2>
                  <span className='position'>
                    Utkarsha Vidyalaya &amp; Junior College, Maharashtra State
                    Board
                  </span>
                  <p>78.31%</p>
                </div>
              </div>
              <div className='resume-wrap d-flex'>
                <div className='icon d-flex align-items-center justify-content-center'>
                  <FaSchool className='icon' />
                </div>
                <div className='text pl-3'>
                  <span className='date'>2014</span>
                  <h2>Secondary Education</h2>
                  <span className='position'>
                    St. Francis De Sales School, Maharashtra State Board
                  </span>
                  <p>69.80%</p>
                </div>
              </div>
            </div>

            <div name='page-3' className='page three'>
              <h2 className='heading'>Skills</h2>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='progress-wrap'>
                    <h4>Javascript</h4>
                    <StarRatings
                      rating={5}
                      starRatedColor="rgba(255,204,29)"
                      numberOfStars={5}
                      name='rating'
                      starDimension='24px'
                    />
                  </div>
                  <br />
                </div>
                <div className='col-md-6 animate-box'>
                  <div className='progress-wrap'>
                    <h3>React JS / Redux</h3>
                    <StarRatings
                      rating={5}
                      starRatedColor="rgba(255,204,29)"
                      numberOfStars={5}
                      name='rating'
                      starDimension='24px'
                    />
                  </div>
                  <br />
                </div>
                <div className='col-md-6 animate-box'>
                  <div className='progress-wrap'>
                    <h3>CSS / SCSS</h3>
                    <StarRatings
                      rating={5}
                      starRatedColor="rgba(255,204,29)"
                      numberOfStars={5}
                      name='rating'
                      starDimension='24px'
                    />
                  </div>
                  <br />
                </div>
                <div className='col-md-6 animate-box'>
                  <div className='progress-wrap'>
                    <h3>Node JS / Express JS</h3>
                    <StarRatings
                      rating={4}
                      starRatedColor="rgba(255,204,29)"
                      numberOfStars={5}
                      name='rating'
                      starDimension='24px'
                    />
                  </div>
                  <br />
                </div>
                <div className='col-md-6 animate-box'>
                  <div className='progress-wrap'>
                    <h3>MongoDB</h3>
                    <StarRatings
                      rating={4}
                      starRatedColor="rgba(255,204,29)"
                      numberOfStars={5}
                      name='rating'
                      starDimension='24px'
                    />
                  </div>
                  <br />
                </div>
                <div className='col-md-6 animate-box'>
                  <div className='progress-wrap'>
                    <h3>Java / C++</h3>
                    <StarRatings
                      rating={3}
                      starRatedColor="rgba(255,204,29)"
                      numberOfStars={5}
                      name='rating'
                      starDimension='24px'
                    />
                  </div>
                  <br />
                </div>
                <div className='col-md-6 animate-box'>
                  <div className='progress-wrap'>
                    <h3>UI Design</h3>
                    <StarRatings
                      rating={3}
                      starRatedColor="rgba(255,204,29)"
                      numberOfStars={5}
                      name='rating'
                      starDimension='24px'
                    />
                  </div>
                  <br />
                </div>
                <div className='col-md-6 animate-box'>
                  <div className='progress-wrap'>
                    <h3>UX Design</h3>
                    <StarRatings
                      rating={3}
                      starRatedColor="rgba(255,204,29)"
                      numberOfStars={5}
                      name='rating'
                      starDimension='24px'
                    />
                  </div>
                  <br />
                </div>
              </div>
            </div>
            <div name='page-4' className='page four'>
              <h2 className='heading'>Publications</h2>
              <div className='resume-wrap d-flex'>
                <div className='icon d-flex align-items-center justify-content-center'>
                  <AiOutlineFileSearch className='icon' />
                </div>
                <div className='text pl-3'>
                  <span className='date'>March 2019</span>
                  <h2>A Study on Tact-Guard using Haptic Feedback</h2>
                  <span className='position'>
                    Published under Indian Academicians and Researcher’s
                    Association
                  </span>
                  <p className='text-left'>
                    Published a short research paper at SIES College, Mumbai in
                    International Journal of Advance and Innovative Research
                    Volume 6. The paper was on an innovative conceptual product
                    of implementing haptic feedback for enhancing user
                    experience of various specialized activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
