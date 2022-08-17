import React, { useState } from 'react';
import useWidth from '../../hooks/useWidth';
import data from '../../assets/data/data.json';
import accordionStyles from '../Accordion/Accordion.module.css';
import tabStyles from '../Tabs/Tab.module.css';
import AccordionItem from '../Accordion/AccordionItem';
import { Markup } from 'interweave';

const Data = () => {
  const windowWidth = useWidth();
  const isMobile = windowWidth < 768;

  const [openItemIndex, setOpenItemIndex] = useState(0);

  const onClickItemHandler = (index) => {
    setOpenItemIndex(index);
  };

  const renderAccordion = () => (
    <div className={accordionStyles.accordion}>
      <ul className={accordionStyles['accordion__list']}>
        {data.map((element, index) => (
          <AccordionItem
            key={index}
            data={element}
            isOpen={index === openItemIndex}
            index={index}
            toggleAccordionHandler={onClickItemHandler}
          />
        ))}
      </ul>
    </div>
  );

  const renderTab = () => (
    <div className={tabStyles.tab}>
      <div className={tabStyles['tab__buttons--container']}>
        {data.map((element, index) => (
          <button
            key={index}
            data={index}
            className={`${tabStyles['tab__button']} ${
              tabStyles[`${index === openItemIndex ? 'open' : ''}`]
            }`}
            onClick={(event) => {
              onClickItemHandler(+event.target.getAttribute('data'));
            }}
          >
            {element.title}
          </button>
        ))}
      </div>

      <div className={tabStyles['tab__content']}>
        <Markup content={data[openItemIndex].content} />
      </div>
    </div>
  );

  return (
    <>
      {isMobile && renderAccordion()}
      {!isMobile && renderTab()}
    </>
  );
};

export default Data;
