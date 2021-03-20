import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import Meta from '../components/Meta'

const Home = () => {
  return (
    <div>
      <Meta title="Home" />
      <Layout>
        <h1>The Great Gatsby Bootcamp</h1>
        <h2>I'm Amartaivan, fullstack developer</h2>
        <p>
          Need a developer?
          <Link to="/contact">Contact me.</Link>
        </p> 
      </Layout>
    </div>
  )
}

export default Home
