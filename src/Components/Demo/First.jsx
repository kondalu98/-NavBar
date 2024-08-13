import './First.css'

import { Middle } from './Middle';
import React from 'react'
import { fadeIn } from "../Test/Variants";
import imgs from '../Demo/Home.jpg';
import { motion } from 'framer-motion';

export function First() {
  return (
  
    <motion.div 
    variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}className='bgi'>
      <img src={imgs} alt='data' className='imgs'>
      </img>
      <div 
      
      className='inf'>
        <h3>Get a free demo of the Animech real-time 3D configurator.</h3>
        <p>Discover the future of product visualization with Animech’s real-time 3D configurator.</p>
      </div>
   
    </motion.div>
  )
}

