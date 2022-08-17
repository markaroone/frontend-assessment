import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import styles from './Accordion.module.css';

const Accordion = ({ data }) => {
  const [isOpen, setIsOpen] = useState(0);

  const toggleAccordionHandler = (index) => {
    setIsOpen(index);
  };

  return (
    <div className={styles.accordion}>
      <ul className={styles['accordion__list']}>
        {data.map((element, index) => (
          <AccordionItem
            key={index}
            data={element}
            isOpen={index === isOpen}
            index={index}
            toggleAccordionHandler={toggleAccordionHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
