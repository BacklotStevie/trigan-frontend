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
      <h4 class="text-center text-red-700 w-full pb-3">TRAVEL VIDEOS</h4>
        <div class="w-full md:w-1/2">
          <iframe class="mx-3" src="https://player.vimeo.com/video/537736986?embedparameter=value" width="90%" height="200" frameborder="0" allowfullscreen playfullscreen></iframe>
        </div>
        <div class="w-full md:w-1/2">
          <iframe class="mx-3" src="https://player.vimeo.com/video/537735923?embedparameter=value" width="90%" height="200" frameborder="0" allowfullscreen playfullscreen></iframe>
       </div>
        <div class="w-full md:w-1/2">
         <iframe class="mx-3" src="https://player.vimeo.com/video/537729922?embedparameter=value" width="90%" height="200" frameborder="0" allowfullscreen></iframe>
        </div>
      <h4 class="text-center text-red-700 w-full pt-6 pb-3">SPORTS</h4>
        <div class="w-full md:w-1/2">
          <iframe class="mx-3" src="https://player.vimeo.com/video/540764597?embedparameter=value" width="90%" height="200" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="w-full md:w-1/2">
          <iframe class="mx-3" src="https://player.vimeo.com/video/540759094?embedparameter=value" width="90%" height="200" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="w-full md:w-1/2">
          <iframe class="mx-3" src="https://player.vimeo.com/video/540758667?embedparameter=value" width="90%" height="200" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="w-full md:w-1/2">
          <iframe class="mx-3" src="https://player.vimeo.com/video/540755465?embedparameter=value" width="90%" height="200" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="w-full md:w-1/2">
          <iframe class="mx-3" src="https://player.vimeo.com/video/540754697?embedparameter=value" width="90%" height="200" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="w-full md:w-1/2">
          <iframe class="mx-3" src="https://player.vimeo.com/video/540753720?embedparameter=value" width="90%" height="200" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="w-full md:w-1/2">
          <iframe class="mx-3" src="https://player.vimeo.com/video/544717075?embedparameter=value" width="90%" height="200" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="w-full md:w-1/2">
          <iframe class="mx-3" src="https://player.vimeo.com/video/544718762?embedparameter=value" width="90%" height="200" frameborder="0" allowfullscreen></iframe>
        </div>
      <h4 class="text-center text-red-700 w-full pt-6 pb-3">MISC.</h4>
        <div class="w-full md:w-1/2">
          <iframe class="mx-3" src="https://player.vimeo.com/video/537728577?embedparameter=value" width="90%" height="200" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="w-full md:w-1/2">
          <iframe class="mx-3" src="https://player.vimeo.com/video/537736120?embedparameter=value" width="90%" height="200" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="w-full md:w-1/2">
          <iframe class="mx-3" src="https://player.vimeo.com/video/544718509?embedparameter=value" width="90%" height="200" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="w-full md:w-1/2">
          <iframe class="mx-3" src="https://player.vimeo.com/video/548480627?embedparameter=value" width="90%" height="200" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="w-full md:w-1/2">
          <iframe class="mx-3" src="https://player.vimeo.com/video/548480365?embedparameter=value" width="90%" height="200" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="w-full md:w-1/2">
          <iframe class="mx-3" src="https://player.vimeo.com/video/548480948?embedparameter=value" width="90%" height="200" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </Layout>
)

export default Portfolio
