import React from 'react';
import styles from "./index.module.scss";

export default function Contact() {
    return (
        <div className={styles.form}>
            <h1>Contact with us</h1>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email"/>
            <label htmlFor="message">Message:</label>
            <textarea name="" id="message" cols="30" rows="10"></textarea>
            <button className={styles.button}>Submit</button>
        </div>
    )
}

