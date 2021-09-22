import React from 'react';
import './watch.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function Watch() {
    return (
        <div className = "Watch">
            <div className="back">
              <ArrowBackIcon />
              Home
            </div>
            <video className = "video" autoplay progress controls 
            src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            />
        </div>
    )
}
