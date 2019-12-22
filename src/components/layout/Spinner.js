import React, { Fragment } from 'react';
import spinner from './spinner.gif';

// rafce
const Spinner = () => {
  const style = {
    width: '200px',
    margin: 'auto',
    display: 'block'
  };

  return (
    <Fragment>
      <img src={spinner} alt='Loading...' style={style} />
    </Fragment>
  );
};

export default Spinner;
