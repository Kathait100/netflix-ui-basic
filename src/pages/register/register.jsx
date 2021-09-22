import React from 'react'
import './register.scss';
export default function Register() {
    return (
        <div className = "register">
            <div className="top">
                <div className="wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="src" />
                <button className = "Login">Sign in</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited Movies Tv Shows And More.</h1>
                <h2>Watch AnyWhere And Cancel Anytime</h2>
                <p>Ready To Enter? Sign In With your Email Address And Enjoy Watching Your Favourite</p>
                <div className="input">
                    <input type="email" placeholder = "Email Address" />
                    <button className = "registerbutton">Get Started</button>
                </div>
            </div>
        </div>
    )
}
