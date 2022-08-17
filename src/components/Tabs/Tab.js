import React, { useState } from 'react';
import styles from './Tab.module.css';
import { Markup } from 'interweave';

const Tab = ({ data }) => {
  const [isOpen, setIsOpen] = useState(0);

  const toggleTabHandler = (index) => {
    setIsOpen(+index.target.getAttribute('data'));
  };

  return (
    <div className={styles.tab}>
      <div className={styles['tab__buttons--container']}>
        {data.map((element, index) => (
          <button
            key={index}
            data={index}
            className={`${styles['tab__button']} ${
              styles[`${index === isOpen ? 'open' : ''}`]
            }`}
            onClick={toggleTabHandler}
          >
            {element.title}
          </button>
        ))}
      </div>

      <div className={styles['tab__content']}>
        <Markup content={data[isOpen].content} />
      </div>
    </div>
  );
};

export default Tab;
