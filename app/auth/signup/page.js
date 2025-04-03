import React from 'react';
import styles from '../signup/signup.module.css'; 

function Signup() {
    return (
        <div className={styles.main}>
            <div className={styles.leftPanel}>
                <img src="/logo.png" alt="Cloud Flow Logo" className={styles.logo} />
            </div>

            <div className={styles.rightPanel}>
                {/* Small Picture Above the Heading */}
                <img src="/bit.png" className={styles.smallImage} />

                <h1 className={styles.title}>Register your Account</h1>
                <p className={styles.subtitle}>See what is going on with your business</p>

                <form className={styles.form}>
                    <label htmlFor="fullName" className={styles.label}>Full name</label>
                    <input type="text" id="fullName" placeholder="Full name" className={styles.input} required />

                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input type="email" id="email" placeholder="Email" className={styles.input} required />

                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input type="password" id="password" placeholder="Password" className={styles.input} required />

                    <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
                    <input type="password" id="confirmPassword" placeholder="Confirm Password" className={styles.input} required />

                    <button type="submit" className={styles.submitButton}>Register</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;