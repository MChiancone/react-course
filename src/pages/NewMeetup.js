import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

// NewMeetupPage Component Renders the NewMeetupForm Component & is used for the creation of Data, using the NewMeetupForm, which is sent to a server.

// The server data will be used to render those meetups on the AllMeetupsPage using the server data instead of the DUMMYDATA.

// Take input from User and post to server. Then use that userCreatedData and render it on AllMeetupsPage

const NewMeetupPage = () => {
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm />
    </section>
  );
};

export default NewMeetupPage;
