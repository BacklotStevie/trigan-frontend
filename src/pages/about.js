import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import triganeye from "../images/trigan eye.png"
import isho from "../images/Isho.jpeg"

const AboutPage = () => (
  <Layout>
    <SEO title="About Tri-Gan Visuals" />
    <>
        <div class="flex items-center flex-no-shrink text-white pt-3 justify-center">
            <img src={triganeye} alt="..." class="flex max-w-23 max-h-20 justify-self: center border-none"></img>
        </div>
        <div class="flex items-center text-white justify-center pt-3">
            <h2 class="text-white">ABOUT</h2>
        </div>
        <div class="row">
            <h4 class="flex items-center text-white justify-center pt-5 mt-5">Mauricio Carrasco</h4>
            <div class="flex justify-between grid-cols-2">
                <span class="cols-span-12 items-center text-white justify-center mt-3 pr-3">TRI-GAN, or “Three Eye” in English, perfectly encapsulates Mauricio’s outlook on videography - capturing everyday life not just through a camera, but through an extension of himself. With three years of experience in videography and editing, Mauricio’s love for the craft has led him through an incredible journey of self-discovery and knowledge. Completely self-taught from early travel montage videos, Mauricio has worked on a variety of projects for clients, including sporting events, music videos, charity events and business ventures. No request is too small or out of his comfort zone, as he is always looking for more stories to help tell through his TRI-GAN.</span>
                <img src={isho} alt="..." class="cols-span-12 max-h-80 max-w-80 border-none mt-3 pl-5"></img>
            </div>
        </div>
    </>
  </Layout>
)

export default AboutPage
