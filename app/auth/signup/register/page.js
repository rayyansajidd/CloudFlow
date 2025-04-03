import React from 'react';
import styles from '../register/register.module.css';

function Register() {
    return (
        <div className={styles.main}>
            <div className={styles.leftPanel}>
                <img src="/logo.png" alt="Cloud Flow Logo" className={styles.logo} />
            </div>
            <div className={styles.rightPanel}>
                <img src="/bit.png" className={styles.smallImage} />
                <h2 className={styles.title}>Login to your Account</h2>
                <p className={styles.subtitle}>See what is going on with your business</p>
                <button className={styles.googleButton} >
                    <img src="/image 2.png" alt="Cloud Flow Logo" className={styles.googleicon} />
                    Continue with Google
                </button>
                <div className={styles.orSignIn}>-------- or Sign in with Email --------</div>

                {/* Email Label and Input */}
                <label className={styles.inputLabel}>Email</label>
                <input
                    type="email"
                    placeholder="mail@abc.com"
                    className={styles.inputField}
                />

                {/* Password Label and Input */}
                <label className={styles.inputLabel}>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    className={styles.inputField}
                />

                <label className={styles.rememberMe}>
                    <input type="checkbox" /> Remember Me
                </label>

                <button className={styles.loginButton}>Login</button>
                <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
                <div className={styles.signupPrompt}>
                    <span className={styles.greyText}>Not Registered Yet?  </span>
                    <a href="#" className={styles.blackText}> Create an account </a>
                </div>
            </div>
        </div>
    );
}

export default Register;