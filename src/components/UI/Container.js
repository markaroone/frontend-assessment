import React from 'react';

const Container = ({ elementType }) => {
  let element = elementType?.toLowerCase() || 'section';

  return <div>Container</div>;
};

export default Container;
