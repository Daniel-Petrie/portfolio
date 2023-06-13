import { delay, motion } from 'framer-motion'
import React from 'react'

function Projects() {
  return (
    <div className="main-layout">
      <motion.div
        className="project-container-new"
        initial={{ x: '-500' }}
        transition={{ type: 'tween' }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
      >
        <h4 className="project-para-title-new">Coming Soon</h4>
      </motion.div>
    </div>
  )
}

export default Projects
