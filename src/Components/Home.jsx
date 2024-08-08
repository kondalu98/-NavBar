import '../Components/Home.css';

import { Section } from './Section';
import videoSource from '../Assets/video_1.mp4'; // Make sure the video file is in the correct path

export function Home() {
    return (
        <>
        <div className='video-container'>
            <video className='background-video' autoPlay loop muted>
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='content'>
                <h1>Visual configurator for Cytiva</h1>
                <p>
                    The future of learning involves interaction. To better understand
                    <br />
                    a product we need to do more than just read about it –
                    <br />
                    we need to move, try, and examine it.
                </p>
                <button className='primary-btn'>Click Me</button>
            </div>
            
        </div>
        <Section></Section>
        </>
    );
}
