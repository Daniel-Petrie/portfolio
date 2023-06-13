import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'

function ContactMe() {
  const formRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)

  function submitForm(e) {
    e.preventDefault()
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbwslOSxkg_70ZcvULvQ1NmvQDcqNWurvxzGjglY0M3Xomfelb2VnGUTBlJpMbMqL9z-Ww/exec'
    const form = e.target
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
        console.log('Success!', response)
        form.reset()
        setSubmitted(true)
      })
      .catch((error) => console.error('Error!', error.message))
  }

  useEffect(() => {
    const form = formRef.current
    form.addEventListener('submit', submitForm)

    return () => {
      form.removeEventListener('submit', submitForm)
    }
  }, [])

  return (
    <div className="main-layout center" id="contact-me">
      <div className="row">
        <motion.div
          initial={{ x: '-500' }}
          transition={{ type: 'tween' }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          className="contact-left"
        >
          <h1 className="hero-title">Contact Me</h1>
          <p>
            <span className="icons">
              <FaEnvelope />
            </span>
            danielpetrie07@gmail.com
          </p>
          <p>
            <span className="icons">
              <FaPhone />
            </span>
            020 40 282 494
          </p>{' '}
          <a href="/DanielCV.jpg" download>
            <button className="hero-button form-button">Download My CV</button>
          </a>
        </motion.div>

        <motion.div
          initial={{ x: '500' }}
          transition={{ type: 'tween' }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          className="contact-right"
        >
          {submitted ? (
            <div>
              <p className="thank-you-message">
                Thank you for submitting the form!
              </p>
              <form ref={formRef}>
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="Message"
                  rows="6"
                  placeholder="Your Message"
                ></textarea>
                <button className="hero-button form-button" type="submit">
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <form ref={formRef}>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
              ></textarea>
              <button className="hero-button form-button" type="submit">
                Submit
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default ContactMe
