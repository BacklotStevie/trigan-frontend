import * as React from "react"
import Layout from "./layout"
import SEO from "./seo"
import intromovie from "../images/intro logo movie.mp4"


const Home = () => (
  <Layout>
    <>
      {/* <div>
        <h3 class="flex text-white tracking-wider justify-center mt-6">FREELANCE VIDEOGRAPHY AND EDITING</h3>
      </div> */}

      <div className="Logo-Video" class="flex justify-center">
          <video id="TriganVid" muted timeupdate poster autostart autoPlay src={intromovie} type="video/mp4" class="max-h-35"/>
      </div>
    </>
  </Layout>
)


export default Home
