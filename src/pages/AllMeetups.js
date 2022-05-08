import React from 'react';
// import { Link } from 'react-router-dom';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];

// Renders a MeetupListComponent and passes props as meetups(DummyData) to MeetupListComponent which will render a list of the dummy data as MeetupItemComponents for each item in the list.
// Where is the data coming from?
// ---Currently: from DUMMY_DATA

const AllMeetupsPage = () => {
  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </div>
  );
};

export default AllMeetupsPage;
