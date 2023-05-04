import * as React from 'react'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import NewProjects from '../components/NewProjects'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <NewProjects />
      <NewProjects />
    </Layout>
  )
}
