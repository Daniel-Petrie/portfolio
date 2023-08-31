import * as React from 'react'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'

import ContactMe from '../components/ContactMe'

import Footer from '../components/Footer'

export default function Home() {
  return (
    <Layout>
      <Hero />
      {/* <About /> */}
      <Projects />

      <ContactMe />
      {/* <Footer /> */}
    </Layout>
  )
}
