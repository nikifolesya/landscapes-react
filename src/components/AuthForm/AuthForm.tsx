import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { SignUpForm } from './SignUpForm';
import styles from './auth_form.module.css';



export const AuthForm: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const navigate = useNavigate();

  return (
    <div className={styles.content}>
      <div className={styles.gradient}>
          <img className={styles.gradient1} src="Vector.svg" alt="Red gradient" />
          <img className={styles.gradient2} src="Vector-2.svg" alt="Orange gradient" />
      </div>
      <div className={styles.container}>
        <h1><a onClick={() => navigate('/')}>Welcome to Travel Planner!</a> <br />Sign In or Sign Up to Plan Your Journey</h1>
        <div className={styles.main_form}>
          <div className={styles.header}>
            <button onClick={() => setIsSignUp(false)} className={!isSignUp ? styles.active : ''}>Sign in</button>
            <button onClick={() => setIsSignUp(true)} className={isSignUp ? styles.active : ''}>Sign up</button>
          </div>
          {isSignUp ? <SignUpForm /> : <LoginForm />}
        </div>
      </div>
    </div>
  );
};