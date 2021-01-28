import React from 'react';
import bg1 from '../../assets/background_1.svg';
import bg2 from '../../assets/background_2.svg';
import apple from '../../assets/icons/apple.svg';
import google from '../../assets/icons/google-play.svg';
import * as styles from './hero.module.scss'
const Hero = () => {
    return <section>
        <div className={styles['container']}>
            <div className={styles['info-content']}>
                <h1 className={styles['title']}>
                    Quadpay
                    <br/>
                    anywhere
                </h1>
                <p className={styles['description']}>
                    Shop your favorite brands with the Quadpay
                    <br/>
                    app—online or in-store.
                </p>

                <div className={styles['buttons']}>
                    <button className={styles['button']}>
                        <img src={apple} alt="App Store"/>
                        <span>Get on the App Store</span>
                    </button>

                    <button className={styles['button']}>
                        <img src={google} alt="Google Play"/>
                        <span>Get on Google Play</span>
                    </button>
                </div>

            </div>

            <div className={styles['image-content']}>
                <img className={styles['decor']} src={bg1}/>
                <img className={styles['image']} src={bg2}/>
            </div>
        </div>
        <div></div>
    </section>
}

export default Hero;
