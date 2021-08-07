import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './components/Banner'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import '../src/css/style.scss'

const Index = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth)
  const getWidth = () => {
    setDeviceWidth(window.innerWidth)
  }
  window.onresize = getWidth

  return (
    <div className='App'>
      <Router>
        <Route exact path='/'>
          <Header windowWidth={deviceWidth} />
          <Banner />
          <About windowWidth={deviceWidth} />
          <Resume />
          <Portfolio />
          <Contact />
          <Footer />
        </Route>
      </Router>
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))

serviceWorker.unregister()
