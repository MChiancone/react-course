import { useState, useEffect } from 'react';

import React from 'react';
// import { Link } from 'react-router-dom';
import MeetupList from '../components/meetups/MeetupList';

// Renders a MeetupListComponent and passes props as meetups(DummyData) to MeetupListComponent which will render a list of the dummy data as MeetupItemComponents for each item in the list.
// Where is the data coming from?
// ---Currently: from DUMMY_DATA

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-course-26342-default-rtdb.firebaseio.com/.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetupsPage;
