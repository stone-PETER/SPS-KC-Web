import React from "react";
import "./about.css";
const About = () => {
  return (
    <div id="about" className="about">
       <div class="divider">
       <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
       </svg>
     </div>
      <div className="container">
        <div className="row">     
          <img src="img/logo/sps kc png.png" alt="" id="sps"/>
          <div className>
            <div className="about-text">
              <h2>About IEEE SPS Kerala Chapter</h2>
              <p>
              The IEEE Signal Processing Society (SPS) Kerala Chapter is a lively, close-knit community, honored globally as the Best Chapter of the Year among all IEEE SPS branches worldwide. Our team includes 23 dedicated student leaders and 17 seasoned professionals—three of them VOLT graduates—all working under the guidance of an advisory body that brings clarity and direction to our vision. Together, we shape every event with purpose and creativity, striving to leave a genuine impact on this beautiful world, driven by something so uniquely human. Our chapter’s dedication is evident in the flourishing SPS student branches across Kerala, where we build lasting connections and share knowledge through regular collaborations. We’ve celebrated wins in prestigious ICIP and ICASSP video-making competitions, and some of our members are now part of the organizing team for ICASSP 2025, reflecting a commitment that reaches far beyond our region. Working hand in hand with other IEEE section chapters, we are building a network that reaches from the grassroots of Kerala to the world. Our chapter is more than a community—it’s a place where ideas flourish, people engage, and every endeavor holds a lasting purpose. Yes, that’s what we are: a family.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="img/logo/humtn logo png.png" alt="" />
          <div className>
            <div className="about-text">
              <h2>About IEEE HTB</h2>
              <p>
                The IEEE Humanitarian Technologies Board (HTB) inspires and
                empowers IEEE volunteers around the world carrying out and
                supporting impactful humanitarian technology activities at the
                local level. The IEEE HTB mission is to support impactful and
                ethically informed volunteer-led initiatives, programs and
                projects, and mutually beneficial partnerships, as well as to
                inform policy formulation that harness technology and innovation
                to address societal challenges (including disaster recovery) in
                a responsive, effective, and sustainable way.
              </p>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
};
export default About;
