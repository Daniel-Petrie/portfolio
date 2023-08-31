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
              everything with the user experience in mind, it's going to ensure
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
        <motion.div
          className="project-container"
          initial={{ x: '-500' }}
          transition={{ type: 'tween', delay: 0.4 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
        >
          <motion.div className="project-text">
            <h4 className="project-para-title">boxr</h4>
            <p className="project-para">
              My biggest project yet! This project gave me a fundamental
              understanding of building a website from the ground up. One of the
              main things I wanted to focus on during this was my front end
              skills, and this was the perfect project for that.
            </p>
            <p className="project-para">
              One of the main things I wanted to learn during this project, was
              styled components. I found them very easy to use, and helpful in
              organizing the CSS for the project. I would definitley consider
              using them again, and if I were to rebuild my portfolio I would
              use them to aid the development.
            </p>
            <p className="project-para">
              Another main thing I wanted to focus on was practicing responsive
              design. I believe this is a massive part of how users interact
              with websites now days, so I think responsive design is a very
              important skill for developers to have.
            </p>
            <p className="project-para">
              Here is a link to the live hosted page for this project:{' '}
              <a
                href="https://illustrious-concha-c609a9.netlify.app/"
                className="project-link"
                target="_blank"
              >
                boxr
              </a>
            </p>
          </motion.div>
        </motion.div>
        <motion.img
          initial={{ x: '-500' }}
          whileInView={{ x: 0 }}
          transition={{ type: 'tween', delay: 0.4 }}
          viewport={{ once: true }}
          src="boxr-hero.PNG"
          alt="image of project"
          className="project-image"
        />

        {/* <motion.div
          className="project-container-new"
          initial={{ x: '-500' }}
          transition={{ type: 'tween' }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="project-para-title-new">Coming Soon</h4>
        </motion.div> */}
      </div>
    </div>
  )
}

export default Projects
