import './CarosuleSlider.css';

import background from "./Assests/Background.webp";
import background1 from "./Assests/Animech-Watch-Homepage-dimmed_922.jpeg";
import img1 from "./Assests/img2.jpg";
import {motion} from "framer-motion"

export function CarosuleSlider() {
  return (
    <>

       
        <div id="carouselExampleIndicators" className="carousel-out-one carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" style={{width:"900px"}} className="add active"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" style={{width:"900px"}} className="add"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" style={{width:"900px"}} className="add"></li>
          </ol>
          <div className="carousel-one carousel-inner">
            <div className="carousel-item active">
              <img className="sl d-block w-100" src={background} alt="First slide" />
              <div className="carousel-caption">
                <motion.div className="Heading1">
                  <motion.h1
                  initial={{y:-200,opacity:0}}
                  animate={{y:0,opacity:1}}
                  transition={{duration:3}}
                  >World-class Visualization</motion.h1>
                  <motion.h5
                  initial={{x:-300,y:200,opacity:0}}
                  animate={{x:[-300,-250,-200,0],y:0,opacity:1}}
                  transition={{duration:4}}
                  >Outstanding Real-time 3D Applications</motion.h5>
                </motion.div>
                <div className="Heading2">
                  <motion.p
                  initial={{x:-200,opacity:0}}
                  animate={{x:0,opacity:1}}
                  transition={{duration:2}}
                  >Technology</motion.p>
                  <motion.h1
                  initial={{y:200,opacity:0}}
                  animate={{y:0,opacity:1}}
                  transition={{duration:4}}
                  >The future engine of digital sales</motion.h1>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={background1} alt="Second slide" />
              <div className="carousel-caption ">
                <div className="Heading1">
                  <motion.h1
                  initial={{y:-200,opacity:0}}
                  animate={{y:0,opacity:1}}
                  transition={{duration:3}}
                  >World-class Visualization</motion.h1>
                  <motion.h5
                  initial={{x:-300,y:200,opacity:0}}
                  animate={{x:[-300,-250,-200,0],y:0,opacity:1}}
                  transition={{duration:4}}
                  >Outstanding Real-time 3D Applications</motion.h5>
                </div>
                <div className="Heading2">
                  <motion.p
                  initial={{x:-200,opacity:0}}
                  animate={{x:0,opacity:1}}
                  transition={{duration:2}}
                  >Technology</motion.p>
                  <motion.h1
                  initial={{y:200,opacity:0}}
                  animate={{y:0,opacity:1}}
                  transition={{duration:4}}
                  >The future engine of digital sales</motion.h1>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="sl d-block w-100" src={img1} alt="Third slide" />
              <div className="carousel-caption ">
                <div className="Heading1">
                  <motion.h1
                  initial={{y:-200,opacity:0}}
                  animate={{y:0,opacity:1}}
                  transition={{duration:3}}
                  >World-class Visualization</motion.h1>
                  <motion.h5
                  initial={{x:-300,y:200,opacity:0}}
                  animate={{x:[-300,-250,-200,0],y:0,opacity:1}}
                  transition={{duration:4}}
                  >Outstanding Real-time 3D Applications</motion.h5>
                </div>
                <div className="Heading2">
                  <motion.p
                   initial={{x:-200,opacity:0}}
                   animate={{x:0,opacity:1}}
                   transition={{duration:2}}
                  >Technology</motion.p>
                  <motion.h1
                  initial={{y:200,opacity:0}}
                  animate={{y:0,opacity:1}}
                  transition={{duration:4}}
                  >The future engine of digital sales</motion.h1>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden"></span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden"></span>
          </a>
        </div>
        
      
    </>
  );
}
