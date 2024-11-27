import Image from "next/image"
import Link from "next/link"

import hero_thumb from "@/assets/img/update/hero/onconetwork-banner.gif"
import CountdownClock from "@/ui/CountDownClock"

const Hero = () => {
   return (
      <div className="hero-wrapper hero-1">
         <div className="hero-bg-gradient">
         </div>
         <div className="ripple-shape">
            <span className="ripple-1"></span>
            <span className="ripple-2"></span>
            <span className="ripple-3"></span>
            <span className="ripple-4"></span>
            <span className="ripple-5"></span>
         </div>

         <div className="container">
            <div className="hero-style1">
               <div className="row flex-row-reverse">
                  <div className="col-lg-3">
                     <div className="hero-thumb alltuchtopdown">
                        <Image src={hero_thumb} alt="img" />
                     </div>
                  </div>
                  <div className="col-lg-9">
                     <h1 className="hero-title">Data That Fights Cancer</h1>
                     <p>Transform the fight against cancer.</p>
                     <div className="btn-wrap"> 
                        <Link target="_blank" href="/assets/onconetwork.pdf" className="btn btn-two" >
                           White Paper
                        </Link>
                     </div>
                  </div>

               </div>
            </div>

            {/*
            <div className="hero-countdown-wrap">
               <h2 className="hero-countdown-wrap-title">Pre-Sale</h2>
               <ul className="skill-feature_list">
                  <li><span>Value</span> of technology invested</li>
                  <li><span>Private</span> sale</li>
                  <li><h4>ICO</h4></li>
               </ul>
               <div className="skill-feature">
                  <div className="progress">
                     <div className="progress-bar" style={{ width: "80%" }}>
                     </div>
                  </div>
                  <div className="progress-value-max">100 Min $</div>
               </div>
               <ul className="skill-feature_list style2">
                  <li>7.75 Min</li>
                  <li>1.5 Min</li>
                  <li>140,000 $ chosen</li>
               </ul>
               <div className="banner-countdown-wrap">
                  <div className="coming-time" data-countdown="2024/8/29">
                  <CountdownClock />
                  </div>
               </div>
            </div>
            */}

         </div>
      </div>
   )
}

export default Hero
