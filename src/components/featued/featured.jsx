import React from 'react';
import './featured.scss';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
export default function Featured({ type }) {
    return (
        <div className = "featured-container">
          {type && <div className = "category">
            <span>{type === "movie"? "movies":"series"}</span>
            <select name="genere" id="genere">
              <option >Genere</option>
              <option value="Adventure">Adventure</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Historical">Historical</option>
              <option value="Horror">Horror</option>
              <option value="Thriller">Thriller</option>
            </select>
            </div>}
          <div className="info">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" height = "30px"   alt="Netflix" className="src" />
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique expedita corrupti sapiente corporis esse a hic fugit dolores aut excepturi earum facilis repudiandae voluptate nobis quaerat, odit repellendus porro omnis!
          </div>
          <div className="button">
            <button className="play">
                <PlayCircleFilledIcon />
                <span>Play</span>
            </button>
            <button className="info-inn">
                <InfoOutlinedIcon />
                <span>Info</span>
            </button>
          </div>
          </div>
        </div>
    )
}
