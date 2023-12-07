import React from 'react';
import "../App.css";
import image13 from "../assets/13.webp";
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../firebase";

const Contact = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "contacts"), {
                name: name,
                email: email,
                message: message
            });

            alert("Message sent successfully!");
        } catch (error) {
            alert("error submitting form: ", error);
        }

        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div>
            <img src={image13} className='image' alt="13" />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Contact</h1>
                    <hr />
                    <label htmlFor="name">
                        <input type="text" value={name} id="name" placeholder="What's your name?" onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label htmlFor="email">
                        <input type="email" id="email" value={email} placeholder="Please enter your email" onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label htmlFor="mensaje">
                        <textarea name="mensaje" id="mensaje" value={message} cols="30" rows="10" placeholder="Leave us a message." onChange={(e) => setMessage(e.target.value)} />
                    </label>
                    <button className="button" type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;



