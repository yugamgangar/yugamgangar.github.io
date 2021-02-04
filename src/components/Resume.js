import React from 'react'
import '../css/style.css'
import { MdDevices, MdSchool } from 'react-icons/md'
import { FaChalkboardTeacher, FaSchool } from 'react-icons/fa'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { ProgressBar, Nav } from 'react-bootstrap'

const Resume = () => {
  const progressInstance = now => {
    return <ProgressBar max='100' now={now} label={`${now}%`} />
  }

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
                  <Nav.Link href='../assets/resume.pdf' download='resume.pdf' className='download-resume pl-0'>Detailed Resume</Nav.Link>
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
                  <p className='text-justify'>
                    Contributing in building functionality rich MERN stack based ed-tech platform from scratch.
                    Contributing in design, business and development aspects of product to enhance the product usability, core functionalities and user engagement.
                  </p>
                </div>
                <div className='text pl-3'>
                  <span className='date'>July 2019 - September 2019</span>
                  <h2>Full Stack Developer Intern</h2>
                  <span className='position'>Edunomics Tech Solutions</span>
                  <p className='text-justify'>
                    Worked on SASS based web application projects development
                    for serving client needs. Closely worked on the phases of
                    project requirements analyzing, software designing, &amp;
                    development of SDLC. Developed some android applications for
                    IOT based systems of clients according to business needs.
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
                  <p className='text-justify'>
                    “Akanksha” is an initiative taken up by a group of students
                    from Narsee Monjee College in the year 2017. The project is
                    about developing resources that seek to bridge the digital
                    divide and transform information-dark communities into
                    information-empowered communities.
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
                    <h4>HTML5</h4>
                    {progressInstance(95)}
                  </div>
                </div>
                <div className='col-md-6 animate-box'>
                  <div className='progress-wrap'>
                    <h3>Javascript</h3>
                    {progressInstance(90)}
                  </div>
                </div>
                <div className='col-md-6 animate-box'>
                  <div className='progress-wrap'>
                    <h3>React JS</h3>
                    {progressInstance(85)}
                  </div>
                </div>
                <div className='col-md-6 animate-box'>
                  <div className='progress-wrap'>
                    <h3>CSS3</h3>
                    {progressInstance(95)}
                  </div>
                </div>
                <div className='col-md-6 animate-box'>
                  <div className='progress-wrap'>
                    <h3>Node JS</h3>
                    {progressInstance(80)}
                  </div>
                </div>
                <div className='col-md-6 animate-box'>
                  <div className='progress-wrap'>
                    <h3>Python</h3>
                    {progressInstance(60)}
                  </div>
                </div>
                <div className='col-md-6 animate-box'>
                  <div className='progress-wrap'>
                    <h3>MongoDB</h3>
                    {progressInstance(90)}
                  </div>
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
                  <p className='text-justify'>
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
