import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'

function About() {
  return (
    <div className="main-layout">
      <motion.h1
        className="hero-title"
        initial={{ x: '100vh' }}
        transition={{ type: 'tween' }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h1>
      <motion.p
        className="hero-para"
        initial={{ x: '100vh' }}
        transition={{ type: 'tween', delay: 0.4 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
      >
        Hi, I'm Daniel! I'm a Web Developer that loves creating immersive
        experiences for users. I've explored various different roles and jobs,
        until I fell in love with coding. Coding allows me to be creative, and
        create amazing applications for people to interact with. I have a deep
        passion for learning, and am always striving to teach myself new things.
        When I'm not coding, you can find me outdoors playing football.
      </motion.p>
    </div>
  )
}

export default About
