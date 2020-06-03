import React from 'react'

import './styles/Contact.css'
import contactImg from './img/contact.jpg'

const Contact = () => {
  return (
    <section id="contact">
      <div className="wrapper">
        <h2>Contact</h2>
        <div className="container">
          <figure className="contact-left-side">
            <iframe title="map" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.2829661085025!2d-0.14659108402717225!3d51.544710115795176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ae31c6380bd%3A0x4dfc89b2c981a7fd!2sLewis%20St%2C%20London%2C%20Wielka%20Brytania!5e0!3m2!1spl!2spl!4v1591031752836!5m2!1spl!2spl" width="450" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
          </figure>
          <aside className="contact-right-side">
            <span className="span-1">3AZ W5P</span>
            <span className="span-2">London</span>
            <span className="span-3">28 Lewis Street</span>
            <span className="span-4">3pm - 11pm</span>
            <span className="span-5">23 9618 6654</span>
            <img src={contactImg} className="contact-img" alt="Our place" />
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Contact