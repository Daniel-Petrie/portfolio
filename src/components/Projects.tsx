import { delay, motion } from 'framer-motion'
import React from 'react'

function Projects() {
  return (
    <div className="main-layout" id="projects">
      <div className="project-background">
        <motion.h1
          className="hero-title"
          initial={{ x: '-500' }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'tween' }}
        >
          My Projects (Hover for Details)
        </motion.h1>
        <motion.div
          className="project-container"
          initial={{ x: '-500' }}
          transition={{ type: 'tween', delay: 0.4 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
        >
          <motion.div className="project-text">
            <h4 className="project-para-title">Club Connect</h4>
            <p className="project-para">
              This was a group project designed by two other students and I at
              Dev Academy. I was in charge of working on the member side of
              things, which included creating an easy to use, interative
              interface for users to navigate through. I was the agile
              facilitator for this project. Because of this role, I also learned
              valuable soft skills, having to collaborate with other members of
              the group and run the scrum meetings.
            </p>
            <p className="project-para">
              I used many different types of technology to bring this project
              together. I used HTML, CSS, TypeScript, React, Node.js, Express,
              SQlite3, Knex, and SuperTest.
            </p>
            <p className="project-para">
              There were many valuable things I learned during this project. I
              gained a much greater understanding of the tech stack that we
              specialized in. I also really understood how important it is to
              think from a user side when building a project. If you build
              everything with the user experience in mind, it's going to insure
              that the app you build is going to be intuitive for anyone to use.{' '}
            </p>
            <p className="project-para">
              Here is a link to the GitHub Repo for this project:{' '}
              <a
                href="https://github.com/tohora-2023/ClubConnect"
                className="project-link"
                target="_blank"
              >
                ClubConnect
              </a>
            </p>
          </motion.div>
        </motion.div>
        <motion.img
          initial={{ x: '-500' }}
          whileInView={{ x: 0 }}
          transition={{ type: 'tween', delay: 0.4 }}
          viewport={{ once: true }}
          src="clubconnecthome.PNG"
          alt="image of project"
          className="project-image"
        />
      </div>
    </div>
  )
}

export default Projects
