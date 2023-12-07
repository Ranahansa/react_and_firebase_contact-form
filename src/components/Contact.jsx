import React from 'react';
import "../App.css";
import image13 from "../assets/13.webp";

const Contact = () => {
    return (
        <div>
            <img src={image13} className='image' alt="13" />
            <div className="container">
                <h1>Contact</h1>
                <hr />
                <label htmlFor="name"><input type="text" id="name" placeholder="What's your name?" /></label>
                <label htmlFor="email"><input type="email" id="email" placeholder="Please enter your email" /></label>
                <label htmlFor="mensaje"><textarea name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Leave us a message." /></label>
                <button className="button" type="submit" value="Send">Send</button>
            </div>
        </div>
    );
};

export default Contact;
