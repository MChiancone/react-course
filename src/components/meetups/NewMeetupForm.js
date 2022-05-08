// How to use useRef() Hook
//
// React allows us to set up references to DOM elements.
// To set up such a connection we:
// First Import useRef
// Second, create a variable for each ref and assign the useRef() function call to it.
// Third, use the ref prop on the form inputs you want setup with useRef and make the connection to your variable from second step.
// Fourth, Create a variable for each enteredFormInputs and assign it to the Ref's current value to grab user input.
// Fifth, Create a new object to store the above variables as values.
// Console.log or sent object data to a server/database.

import { useRef } from 'react';

import React from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

//
// NewMeetupForm Component - that is used in NewMeetup Page Component & rendered
// by the NewMeetupPage Component.
const NewMeetupForm = () => {
  //
  // Set variables = useRef Object for use on HTML Input Element.
  // This creates a useRef() object and stores it in a variable.
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  // Create Function, submitHandler, to get form data that a user submits on NewMeetupPage.
  function submiteHandler(event) {
    // Stop browser default from refreshing screen.
    event.preventDefault();
    // Read (formInput) entered values using "refs" current value from event object.
    // Extract what the user entered to "entered" Variable.
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    // Create a new object data structure to store enteredUserInputValues as values.
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    //Log to console just to test, eventually send to server
    console.log(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submiteHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
