import React from 'react';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

// Parent Component to MeetupItem
// -Takes in props.meetups(DummyData) and maps over that array to produce a new array.
// -New array is made up of a MeetupItemComponent for every item in the meetups array (DummyData)
// -Passes individual props down to MeetupItemComponent so that it has access to all the key value pairs in DummyData.

const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
