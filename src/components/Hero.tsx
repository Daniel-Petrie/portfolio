import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
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
          Full-Stack Developer
        </motion.h2>
        <motion.p
          className="hero-para"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'tween', delay: 0.3 }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          voluptatum accusantium neque? Harum possimus reiciendis iure
          aspernatur commodi quis, perferendis laudantium suscipit molestias
          alias nulla dolorem, ut ex! Illum, laboriosam.
        </motion.p>
        <motion.button
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'tween', delay: 0.4 }}
          className="hero-button"
        >
          Let's Talk
        </motion.button>
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
