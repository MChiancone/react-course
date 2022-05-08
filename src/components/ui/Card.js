import React from 'react';
import classes from './Card.module.css';

// UI Card (WRAPPER) Component that renders any children through props. Can be used like a Bootstrap Card Component if you will.

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
