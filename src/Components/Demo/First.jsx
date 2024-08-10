import './First.css'

import { Middle } from './Middle';
import React from 'react'
import imgs from '../Demo/Home.jpg';

export function First() {
  return (
  
    <div className='bgi'>
      <img src={imgs} alt='data' className='imgs'>
      </img>
      <div className='inf'>
        <h3>Get a free demo of the Animech real-time 3D configurator.</h3>
        <p>Discover the future of product visualization with Animech’s real-time 3D configurator.</p>
      </div>
   
    </div>
  )
}

