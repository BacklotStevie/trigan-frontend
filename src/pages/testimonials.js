import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import triganeye from "../images/trigan eye.png"
import isho from "../images/Isho.jpeg"
import mater from "../images/mater.png"
import dbhoops from "../images/dbhoops.png"
import didi from "../images/didi.jpeg"

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
            <img src={didi} alt="..." class="flex max-w-23 max-h-20 justify-self: center border-none"></img> 
            <p class="text-white w-full md:w-2/3">"Working with Trigan Visuals was, and continues to be, an awesome experience! As a visual artist myself, I've had the pleasure of working alongside and with Trigan Visuals for my personal brand. Trigan always gives their clients full transparency while meeting all your expectations. Dedication, professionalism & creativity are just some of the many words I'd use to describe them! I would highly recommend Trigan Visuals to anyone looking for high-quality videography!" - <span class='text-red-700'>Desiree Prieto, <i>Artistic Desire</i></span></p>
        </div>
        <div class='flex justify-around flex-wrap pt-4'>
            <img src={mater} alt="..." class="flex max-w-23 max-h-20 justify-self: center border-none"></img>
            <p class="text-white w-full md:w-2/3">"Mauricio is truly passionate which shows with TRI-GAN. I used him for my high school girls basketball video and it was worth every dime. He is someone I can truly say puts his "ALL" into his work." - <span class='text-red-700'>Gus Peleaz, <i>Mater Lakes Academy</i></span></p>
        </div>
        <div class='flex justify-around flex-wrap pt-4'>
            <img src={dbhoops} alt="..." class="flex max-w-23 max-h-20 justify-self: center border-none"></img>
            <p class="text-white w-full md:w-2/3">"Trigan Visuals has been EXCEPTIONAL in every form!!! From the quality of work, communication, professionalism, timeliness, and creativity. We have collaborated with Trigan Visuals on a few video projects for our youth basketball academy and individual video highlight mixes for individual players. It has truly been a delight working with them. We get excited to think of the next project we would collaborate on. Each time we complete a project and unveil the finished product to our members and potential members, we receive a high increase in impressions via social media and website. They really give us a great boost to promote our brand! The future is bright for Trigan Visuals and we plan on supporting them every step of the way!" - <span class='text-red-700'>Delwin Liranzo, <i>DBHoops Academy</i></span></p>
        </div>
    </>
  </Layout>
)

export default Testimonials