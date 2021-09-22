import React, { useRef, useState } from 'react';
import './lisst.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Listitem from "../listitem/listitem";
export default function List() {
    const listRef = useRef();
    let stepsL = 1;
    let stepsR = 1;
    const[ismoved, setIsmoved] = useState(false);
    const handelClick = (direction) => {
        setIsmoved(true);
        if(direction === "left" && stepsR > 1)
        {   
            listRef.current.style.transform = `translateX(${240*stepsL}px)`;
            listRef.current.style.transition = `all ease 1s`; 
            stepsL++;
            stepsR--;
        }
        else if(direction === "right" && stepsR < 5){
            listRef.current.style.transform = `translateX(${-240*stepsR}px)`;
            listRef.current.style.transition = `all ease 1s`; 
            stepsR++;
            stepsL--;
            console.log("stepsR"+stepsR);
            console.log("stepsL"+stepsL);
        }
    }
    return (
        <div className = "List">
            <span className="listTitle">Continue To Watch</span>
           <div className="wrapper">
                <ArrowBackIosIcon  className = "sliderArrow left" onClick = {() => handelClick("left")} 
                style = {{display:!ismoved && "none"}}
                />
                
                    <div className="container" ref={listRef}>
                        <Listitem index = {0} />
                        <Listitem  index = {1} />
                        <Listitem index = {2} />
                        <Listitem index = {3} />
                        <Listitem index = {4} />
                        <Listitem index = {5} />
                        <Listitem index = {6} />
                        <Listitem index = {7} />
                        <Listitem index = {8} />
                        <Listitem index = {9} />
                    </div>
                    <ArrowForwardIosIcon className = "sliderArrow right" onClick = {() => handelClick("right")} />
            </div>
        </div>
    )
}
 
    

