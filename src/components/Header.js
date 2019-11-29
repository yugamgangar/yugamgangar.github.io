import React, { useState, useRef, useEffect } from 'react'
import { Navbar, Nav, Tooltip, OverlayTrigger } from 'react-bootstrap'
import '../css/style.css'
import { AiOutlineMenu, AiOutlineClose, AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { IoIosMailUnread, IoIosArrowUp } from 'react-icons/io'
import { Link, animateScroll as scroll } from 'react-scroll'
import ClipboardJS from 'clipboard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = props => {
  const emailTooltip = useRef(null)
  const email = useRef(null)
  const [emailTooltipText, setEmailTooltipText] = useState('Click to copy my email address to your clipboard 😀')
  const [headerContainer, setHeaderContainer] = useState('')
  const [pageupBtn, setPageupBtn] = useState('pageup-btn d-flex justify-content-center')

  const handleScroll = () => {
    window.pageYOffset > 80 ? setHeaderContainer('fixed') : setHeaderContainer('')
    window.pageYOffset > 2050 ? setPageupBtn('d-flex justify-content-center show') : setPageupBtn('d-flex justify-content-center')
  }

  const openNav = () => {
    document.getElementById('sidebar').style.width = '55%'
    document.getElementById('mobileHeader').style.height = '0rem'
  }

  const closeNav = () => {
    document.getElementById('sidebar').style.width = '0'
    document.getElementById('mobileHeader').style.height = '2.25rem'
  }

  const demo = (clipboard) => {
    if (props.windowWidth >= 768) {
      clipboard.on('success', e => {
        setEmailTooltipText('Fantastic! My email address has been copied to your clipboard ✅')
        setTimeout(() => {
          setEmailTooltipText('Click to copy my email address to your clipboard 😀')
        }, 2000);

        e.clearSelection();
      })

      clipboard.on('error', e => {
        setTimeout(() => {
          setEmailTooltipText('Sorry, there was a technical glitch. Please try again.')
        }, 1500)
      })
    }
    if (props.windowWidth < 768) {
      clipboard.on('success', e => {
        toast.success('Fantastic! My email address has been copied to your clipboard ✅', {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: 'mobile-toast'
        })
        closeNav()
      })
    }

  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    toast.configure({
      draggable: false,
      pauseOnFocusLoss: false
    })
    const x = new ClipboardJS('.email')
    demo(x)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.windowWidth])

  const tooltip = () => { return <Tooltip className='my-tooltip' id='my-tooltip' ref={emailTooltip}>{emailTooltipText}</Tooltip> }

  const HeaderMenu = () => {
    return (
      <Navbar id='header'>
        <Nav className='ml-5'>
          <Link
            to='bannerpage-section'
            activeClass='active'
            spy
            smooth
            offset={-40}
            duration={700}
            className='navbar-link'>Home</Link>
          <Link
            to='aboutpage-section'
            activeClass='active'
            spy
            smooth
            offset={-40}
            duration={700}
            className='navbar-link'>About</Link>
          <Link
            to='resumepage-section'
            activeClass='active'
            spy
            smooth
            offset={-40}
            duration={700}
            className='navbar-link'>Resume</Link>
          <Link
            to='portfoliopage-section'
            activeClass='active'
            spy
            smooth
            offset={-40}
            duration={700}
            className='navbar-link'>Portfolio</Link>
          <Link
            to='contactpage-section'
            activeClass='active'
            spy
            smooth
            offset={-40}
            duration={700}
            className='navbar-link'>Contact</Link>
        </Nav>
        <Nav className='ml-auto mr-5'>
          <OverlayTrigger
            placement='bottom'
            delay={{ show: 150, hide: 150 }}
            overlay={tooltip()}
          >
            <Nav.Link href='#' ref={email} data-clipboard-text='gangaryugam@gmail.com' className='email navbar-sociallink '><IoIosMailUnread /></Nav.Link>
          </OverlayTrigger>
          <Nav.Link href='https://github.com/yugamgangar' className='git navbar-sociallink'><AiOutlineGithub /></Nav.Link>
          <Nav.Link href='https://www.linkedin.com/in/yugamgangar/' id='linkedin' className='linkedin navbar-sociallink'> <AiOutlineLinkedin /> </Nav.Link>
          <Nav.Link href='https://twitter.com/gangaryugam' id='twitter' className='twitter navbar-sociallink'> <AiOutlineTwitter /> </Nav.Link>
        </Nav>
      </Navbar>
    )
  }

  const SliderMenu = () => {
    return (
      <div>
        <div id='sidebar' className='sidenav'>
          <AiOutlineClose className='closebtn' onClick={closeNav} />
          <Link
            to='bannerpage-section'
            activeClass='active'
            spy
            smooth
            offset={-40}
            duration={1400}
            onClick={closeNav}
            className='sidenav-link'>Home</Link>
          <Link
            to='aboutpage-section'
            activeClass='active'
            spy
            smooth
            offset={-40}
            duration={1400}
            onClick={closeNav}
            className='sidenav-link'>About</Link>
          <Link
            to='resumepage-section'
            activeClass='active'
            spy
            smooth
            offset={-40}
            duration={1400}
            onClick={closeNav}
            className='sidenav-link'>Resume</Link>
          <Link
            to='portfoliopage-section'
            activeClass='active'
            spy
            smooth
            offset={-40}
            duration={1400}
            onClick={closeNav}
            className='sidenav-link'>Portfolio</Link>
          <Link
            to='contactpage-section'
            activeClass='active'
            spy
            smooth
            offset={-40}
            duration={1400}
            onClick={closeNav}
            className='sidenav-link'>Contact</Link>
          <div className='my-5 ml-2'>
            <span ref={email} data-clipboard-text='gangaryugam@gmail.com' className='d-inline email mobile-sociallink'> <IoIosMailUnread /></span>
            <Nav.Link className='d-inline git mobile-sociallink' href='https://github.com/yugamgangar'><AiOutlineGithub /></Nav.Link>
            <Nav.Link href='https://www.linkedin.com/in/yugamgangar/' className='d-inline linkedin mobile-sociallink'> <AiOutlineLinkedin /></Nav.Link>
            <Nav.Link className='d-inline twitter mobile-sociallink' href='https://twitter.com/gangaryugam'><AiOutlineTwitter /></Nav.Link>
          </div>
        </div>

        <div id='mobileHeader'>
          <div className='mobileMenu-btn text-center' onClick={openNav}>
            <AiOutlineMenu className='openbtn mt-2' />
          </div>
          <ToastContainer autoClose={1800} closeButton={false} hideProgressBar={true} />
          <div onClick={scroll.scrollToTop} id='pageup-btn' className={pageupBtn}><IoIosArrowUp /></div>
        </div>
      </div>
    )
  }

  return (
    <div id='headerContainer' className={headerContainer}>
      <div className='header-transition' />
      {props.windowWidth >= 768 && <HeaderMenu />}
      {props.windowWidth < 768 && <SliderMenu />}
    </div>
  )
}

export default Header
