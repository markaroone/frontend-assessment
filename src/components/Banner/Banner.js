import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner} role='img' aria-label='hero image'>
      <h1>Hello Developer!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
    </div>
  );
};

export default Banner;
