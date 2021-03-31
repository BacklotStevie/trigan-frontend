import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import intromovie from "../images/intro logo movie.mp4"


const Home = () => (
  <Layout>
    <>
      <div>
        <h3 class="flex text-white tracking-wider justify-center mt-6">FREELANCE VIDEOGRAPHY AND EDITING</h3>
      </div>

      <div className="Logo-Video" class="flex justify-center">
          <video id="TriganVid" muted timeupdate poster autostart autoPlay src={intromovie} type="video/mp4" class="max-h-35"/>
      </div>
    </>
  </Layout>
)

// video.addEventListener("timeupdate", function(){
//   if(this.currentTime >= 1 * 4) {
//       this.pause();
//   }
// });

// let intro=document.querySelectorAll('.video');
// intro.forEach((video)=>{
//  video.addEventListener('timeupdate', function(){
//    if(this.currentTime === 1 * 6) {
//      this.pause();
//    }
//  })
// });

window.onload=function(){
  let video=document.getElementById("TriganVid");
    video.addEventListener("timeupdate", function(){
      if(this.currentTime >= 6){
        video.pause();
    }
    });
  }

export default Home
