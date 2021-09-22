import { useState} from 'react';
import './listitem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
export default function Listitem({index}) {
    const[isHovered, setIsHovered] = useState(false);
    const trailer = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    return (
    <div className = "listitem"
      style = {{left:isHovered && index*225 -50 +index*2.5}}
      onMouseOver = {() => {setIsHovered(true)}}
      onMouseDown = {() => {setIsHovered(false)}}
      >
            <img src="https://images.pexels.com/photos/3811867/pexels-photo-3811867.jpeg?auto=compress&cs=tinysrgb&dpr=2&" 
            height = "100%" width = "100%"alt="" className="src" />
            {isHovered && (<>
                <video src={trailer} autoPlay = {true} progress controls />
                <div className="item-info">
                    <div className="icons">
                        <PlayArrowIcon className = "icon" />
                        <AddIcon className = "icon" />
                        <ThumbUpIcon  className = "icon" />
                        <ThumbDownIcon className = "icon" />
                    </div>
                     <div className="item-info-top">
                        <span>1 Hour 30 Min</span>
                        <span className = "limit">+50</span>
                        <span>2021</span>
                     </div>
                    <div className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, beatae illo officia quos possimus laborum. 
                    </div>
                    <div className="genre">
                        Action
                    </div>
            </div>

            </>)}
            
        </div>
    )
}
