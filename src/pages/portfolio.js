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
  </Layout>
)

export default Portfolio
