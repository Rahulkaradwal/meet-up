import NewMeetupForm from '@/components/meetups/NewMeetupForm';

function NewMeetup() {
  function addMeetupHandler(meetup) {
    console.log(meetup);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetup;
