import React from 'react'
import { motion } from 'framer-motion'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      'Full-Stack Developer',
      'Guy-who-loves-football.tsx',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <section className="hero-section">
      <div className="hero-section-left">
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'tween' }}
        >
          <h1 className="hero-title">Hi, I'm Daniel Petrie</h1>
        </motion.div>
        <motion.h2
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'tween', delay: 0.2 }}
          className="hero-desc"
        >
          {text} <Cursor cursorColor="#fff" />
        </motion.h2>
        <motion.p
          className="hero-para"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'tween', delay: 0.3 }}
        >
          As a Web Developer, my passion lies in crafting exceptional web
          applications that provide users with engaging experiences.
        </motion.p>

        <motion.button
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'tween', delay: 0.4 }}
          className="hero-button"
        >
          Let's Talk
        </motion.button>
        <a href="/DanielCV.jpg" download>
          <motion.button
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'tween', delay: 0.4 }}
            className="hero-button"
          >
            View My CV
          </motion.button>
        </a>
      </div>
      <motion.div
        className="hero-section-right"
        initial={{ x: '100vw' }}
        transition={{ type: 'tween' }}
        animate={{ x: 0 }}
      >
        <img
          src="/football.png"
          alt="myself playing football"
          className="football-image"
        />
      </motion.div>
    </section>
  )
}

export default Hero
