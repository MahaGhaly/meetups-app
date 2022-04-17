// import React from 'react';
import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm"

function NewMeetup() {
  const history = useHistory();

  function addMeetupHandler(meetup) {
    fetch('https://react-getting-started-e2869-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetup),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ).then(() => {
      history.replace('/');
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  )
}

export default NewMeetup