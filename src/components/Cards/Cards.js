import React from 'react';
import styles from './Cards.module.css';
import mobileImagePlaceholder from '../../assets/img/400x300.png';

const Cards = () => {
  return (
    <section className={styles.card}>
      <ul className={styles['cards__list']}>
        <li className={styles['cards__item']}>
          <img src={mobileImagePlaceholder} alt='placeholder' />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <button>read more</button>
        </li>

        <li className={styles['cards__item']}>
          <img src={mobileImagePlaceholder} alt='placeholder' />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button>read more</button>
        </li>

        <li className={styles['cards__item']}>
          <img src={mobileImagePlaceholder} alt='placeholder' />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>

          <button>read more</button>
        </li>
      </ul>
    </section>
  );
};

export default Cards;
