import './Contact.css';

import videoSource from '../Assets/video_1.mp4';

export function Contact()
{
    return(
        <div>
        <video className='background'  autoPlay loop muted>
          <source
            src={videoSource}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    )
}