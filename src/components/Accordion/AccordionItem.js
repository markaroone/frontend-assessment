import React from 'react';
import styles from './AccordionItem.module.css';
import { Markup } from 'interweave';

const AccordionItem = ({ data, isOpen, index, toggleAccordionHandler }) => {
  const onClickAccordion = () => {
    const indexToSend = isOpen ? -1 : index;
    toggleAccordionHandler(indexToSend);
  };

  return (
    <li
      className={`${styles['accordion__item']} ${
        styles[`${isOpen ? 'open' : ''}`]
      }
      `}
      onClick={onClickAccordion}
    >
      <i className={styles['accordion__item--icon']}>
        <ion-icon name={isOpen ? 'remove-sharp' : 'add-sharp'}></ion-icon>
      </i>
      <h3 className={styles['accordion__item--title']}>{data.title}</h3>

      <div className={styles['accordion__item--content']}>
        <div className={styles['accordion__item--content-container']}>
          <Markup content={data.content} />
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
