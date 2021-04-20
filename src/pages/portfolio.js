import * as React from "react"
import triganeye from "../images/trigan eye.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <div class="flex items-center flex-no-shrink text-white pt-3 justify-center">
            <img src={triganeye} alt="..." class="flex max-w-23 max-h-20 justify-self: center border-none"></img>
    </div>
    <div class="flex items-center text-white justify-center pt-3">
            <h2 class="text-white">PORTFOLIO</h2>
    </div>
    <div class="mt-5">
      <div class="flex justify-around flex-wrap">
      <h4 class="text-center text-white w-full pb-3">Travel Videos</h4>
      <div class="w-full md:w-1/2 lg:w-1/3">
        <iframe src="https://player.vimeo.com/video/537736986?embedparameter=value" width="100%" height="200" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3">
        <iframe src="https://player.vimeo.com/video/537735923?embedparameter=value" width="100%" height="200" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3">
        <iframe src="https://player.vimeo.com/video/537729922?embedparameter=value" width="100%" height="200" frameborder="0" allowfullscreen></iframe>
      </div>
      </div>
    </div>
  </Layout>
)

export default Portfolio
