import "./ContactFooter.css";

import React from "react";
import { fadeIn } from "../Test/Variants";
import { motion } from 'framer-motion';
import one from "../ContactPages/1.jpg";
import three from "../ContactPages/2.jpg";
import two from "../ContactPages/4.jpg";

export function ContactFooter() {
  return (

    <div className="bgsm">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}


        className="clients">
        <img src={one} className="one"></img>
        <img src={two} className="one"></img>
        <img src={two} className="one"></img>
      </motion.div>

      <div className="grid-contain">

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}

          className="main-column">
          <div className="main-content">
            <h1>We are Animech</h1>
            <p>
              We are Animech – a leader in advanced visualization tools that
              redefine digital commerce. With our expertise, we strive for
              tailor-made solutions that improve sales and customer experience for
              our partners.
            </p>
            <br></br>
            <p>Ekeby Bruk 4J</p>
            <p>752 63 Uppsala</p>
            <p>Sweden</p>
            <br></br>
            <p>
              T: <span style={{ textDecoration: 'underline', fontSize: 'bold' }}>+46 (0) 18 53 92 20</span>
            </p>
            <p>
              E:<span style={{ textDecoration: 'underline', fontSize: 'bold' }}> hello@animech.com</span>
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="sub-columns">
          <div class="sub-column">

            <h3>This is us.</h3>
            <p>About us</p>
            <p>Careers</p>
            <p>Articles</p>
            <p>Contact us</p>
          </div>
          <div className="sub-column">
            <h3>Work</h3>
            <p>Elfa</p>
            <p>Cytia</p>
            <p>volkswegan</p>
            <p>KIA</p>
          </div>
          <div className="sub-column">
            <h3>Products</h3>
            <p>Anipart</p>
            <p>Aniconfigrator</p>
            <p>showroom</p>
          </div>
        </motion.div>
      </div>
      <hr></hr>
      <p className="copy">© 2024 Copyright Xstream AB, 556730-9132 | Developed by Xstreamminds</p>
    </div>
  );
}
