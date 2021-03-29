import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import intromovie from "../images/intro logo movie.mp4"

const Home = () => (
  <Layout>
      <div className="Logo-Video">
          <video controls autostart autoPlay src={intromovie} type="video/mp4" />
      </div>
  </Layout>
)

export default Home
