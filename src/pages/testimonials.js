import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import triganeye from "../images/trigan eye.png"
import isho from "../images/Isho.jpeg"

const Testimonials = () => (
  <Layout>
    <SEO title="About Tri-Gan Visuals" />
    <>
        <div class="flex items-center flex-no-shrink text-white pt-3 justify-center">
            <img src={triganeye} alt="..." class="flex max-w-23 max-h-20 justify-self: center border-none"></img>
        </div>
        <div class="flex items-center text-white justify-center pt-3">
            <h2 class="text-white">TESTIMONIALS</h2>
        </div>
        <div class='flex justify-around flex-wrap pt-4'>
            <p class="text-white w-full md:w-1/3">"Working with Trigan Visuals was, and continues to be, an awesome experience! As a visual artist myself, I've had the pleasure of working alongside and with Trigan Visuals for my personal brand. Trigan always gives their clients full transparency while meeting all your expectations. Dedication, professionalism & creativity are just some of the many words I'd use to describe them! I would highly recommend Trigan Visuals to anyone looking for high-quality videography!" - <span class='text-red-700'>Desiree Prieto, <i>Artistic Desire</i></span></p>
        </div>
    </>
  </Layout>
)

export default Testimonials