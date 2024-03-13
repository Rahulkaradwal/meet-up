import MeetupList from '@/components/meetups/MeetupList';
import React from 'react';

const Dummy_Meetups = [
  {
    id: 'm1',
    title: 'Toronto',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Toronto_-_ON_-_Humber_Bay_und_Humber_Bay_Arch_Bridge.jpg/1920px-Toronto_-_ON_-_Humber_Bay_und_Humber_Bay_Arch_Bridge.jpg',
    address: 'Toronto ON Canada',
    description: 'Come to Canada',
  },
  {
    id: 'm2',
    title: 'Toronto',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Toronto_-_ON_-_Humber_Bay_und_Humber_Bay_Arch_Bridge.jpg/1920px-Toronto_-_ON_-_Humber_Bay_und_Humber_Bay_Arch_Bridge.jpg',
    address: 'Toronto ON Canada',
    description: 'Come to Toronto',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: Dummy_Meetups,
    },
  };
}

export default HomePage;
