import './Section.css';

import imageSource from '../Assets/Home.webp'; // Make sure the image file is in the correct path

export function Section() {
    return (
        <div className='section-container'>
            <div className='section-image'>
                <img src={imageSource} alt="Sample" />
            </div>
            <div className='section-content'>
                <h1>Visual configurator </h1>
                <p>
                    The future of learning involves interaction. To better understand
                    <br />
                    a product we need to do more than just read about it –
                    <br />
                    we need to move, try, and examine it.
                </p>
             
            </div>
        </div>
    );
}
