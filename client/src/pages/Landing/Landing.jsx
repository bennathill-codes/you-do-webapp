import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import landing from '../../assets/landing.jpg';
import styles from './Landing.module.css';
function Landing() {
  return (
    <div>
        <Navbar active={"home"}/>
        <div className={styles.landing__wrapper}>
            <div className={styles.landing__text}>
                <h1>Keep Your Tasks in Check with <span className="primaryText">You-Do!</span></h1>
                <h2>You Can Be More, You Can Achieve More, You Can Do More with You-Do</h2>
            <div className='btnWrapper'>
            <Link to="/regiser" className="primaryBtn">Register</Link>
                <Link to="/login" className='secondaryBtn'>Login</Link>
            </div>
            </div>

            <div className={styles.landing__img}>
                <img src={landing} alt="landing" />
            </div>
      </div>
    </div>
  )
}

export default Landing