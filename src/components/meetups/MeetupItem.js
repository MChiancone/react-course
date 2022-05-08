import React from 'react';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';

//  Child Component of MeetupList and getting props from there.
//  Renders out a Card Component of DummyData that was passed down from AllMeetupsPage-->MeetupList-->here(MeetupItem) as props.
// Card Component is used for simple styling around the MeetupItemComponent(DummyData).

const MeetupItem = (props) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div>
          <button className={classes.action}>To Favorites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
