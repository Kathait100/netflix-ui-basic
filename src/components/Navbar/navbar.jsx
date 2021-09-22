import React, { useState } from 'react';
import "../Navbar/navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';
const Navbar = () => {
    const[isScrolled, setIsscrolled] = useState(false);
    window.onscroll = () => {
        setIsscrolled(window.pageYOffset === 0 ? false: true);
           return (window.onscroll = null);
    }
    console.log(isScrolled);
    return ( 
        <div className = {isScrolled? "Nav-component scrolled":"Nav-component"}>
         <div className="container">
            <div className="left-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="src" />
              <span>Homepage</span>
              <span>Series</span>
              <span>Movies</span>
              <span>New And Popular</span>
              <span>My List</span>
            </div>
            
            <div className="right-container">
                <SearchIcon className = "right" />
                <span>KID</span>
                <NotificationsIcon className = "right" />
                <PersonIcon  className = "right" />
             <div className="dropdown">
                <ArrowDropDownIcon className = "right" id = "drop-down" />
                <div className="inner-right">
                  <span>Setting</span>
                  <span>Logout</span>
                </div>
             </div>
            </div>
         </div>
      </div>
     );
}
 
export default Navbar;