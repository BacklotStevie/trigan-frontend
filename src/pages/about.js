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
            <h2 class="text-white">About</h2>
        </div>
        <div class="row">
            <h4 class="flex items-center text-white justify-center pt-5 mt-5">Mauricio Carrasco</h4>
            <div class="flex justify-between grid-cols-2">
                <span class="cols-span-12 items-center text-white justify-center mt-3 pr-3">Mauricio has 2 years of experience in filming and editing. Self teaching himself everything he knows, has only proven the love for the craft he has taken up. Beginning his path with travel-like / montage videos, Mauricio has broadened his styles with every opportunity presented. Having worked on a variety of videos ranging from sports, music videos, to events; no request is too small or out of his comfort zone. 
                    Being strongly influenced in the anime genre, Japanese culture has always fascinated him. Wanting to combine the love for the culture and videography, TRI-GAN was orginated. "TRI" meaning 3, and "GAN" being Japanese for eye. TRI-GAN Visuals invites you to see what stories Mauricio's "Third Eye" captures, being his camera lens.</span>
                <img src={isho} alt="..." class="cols-span-12 max-h-80 max-w-80 border-none mt-3 pl-5"></img>
            </div>
        </div>
    </>
  </Layout>
)

export default AboutPage
