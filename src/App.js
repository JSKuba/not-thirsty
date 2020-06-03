import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Header from './Header'
import Start from './Start'
import Menu from './Menu'
import Random from './Random'
import Result from './Result'
import About from './About'
import Contact from './Contact'
import './styles/fonts.css'

function addClassOnce(element, classToAdd) {
  if(!element.classList.contains(classToAdd)) {
    return element.classList.add(classToAdd)
  } else {
    return null
  }
}

function removeClassOnce(element, classToAdd) {
  if(element.classList.contains(classToAdd)) {
    return element.classList.remove(classToAdd)
  } else {
    return null
  }
}

function setClassWhenTop(element, classToSet) {
  if(window.pageYOffset > 0) {
    if(!element.classList.contains(classToSet)) {
      return element.classList.add(classToSet)
    } else {
      return null
    }
  } else {
    return element.classList.remove(classToSet)
  }
}

function setClassWhenVisible(elementsArray, classToAdd) {
  elementsArray = [...elementsArray]
  elementsArray.map(element => {
    if(window.pageYOffset + window.innerHeight / 2 > document.getElementById(element.innerText.toLowerCase()).offsetTop && window.pageYOffset + window.innerHeight / 2 < document.getElementById(element.innerText.toLowerCase()).offsetTop + document.getElementById(element.innerText.toLowerCase()).getBoundingClientRect().height) {
      return addClassOnce(element, classToAdd)
    } else {
      return removeClassOnce(element, classToAdd)
    }
  })
}

function App() {
  
  useEffect(() => {

    document.getElementsByClassName('main-nav')[0].addEventListener('click', (event) => {
      if(event.target.tagName === 'LI') {
        window.scrollTo(0, document.getElementById(event.target.textContent.toLowerCase()).offsetTop)
      }
    })

    document.getElementsByClassName('hamburger-container')[0].addEventListener('click', () => {
      const nav = document.getElementsByClassName('main-header')[0]
      nav.classList.toggle('nav-hidden')
    })

    window.addEventListener('scroll', () => {
      addClassOnce(document.getElementById('scroll-indicator'), 'hide')
      setClassWhenTop(document.getElementsByClassName('main-header')[0], 'shrink-main-header')
      setClassWhenVisible(document.getElementsByClassName('nav-item'), 'nav-item-active')
    })

    document.getElementById('scroll-indicator').addEventListener('click', () => {
      window.scrollTo(0, document.getElementsByTagName('section')[1].offsetTop)
    })

  },[])

  return (
    <HelmetProvider>
      <Helmet>
        <title>!Thirsty</title>
        <meta name="description" content="!Thirsty website" />
        <meta name="theme-color" content="#E2007A" />
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css2?family=Galada&family=Montserrat&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div className="App">
        <Header />
        <main>
          <Start />
          <Menu />
          <Random />
          <Result />
          <About />
          <Contact />
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;
