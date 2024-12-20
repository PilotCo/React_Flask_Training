import './App.css';
import SearchSpeaker from './SearchSpeaker/SearchSpeaker';
import SpeakerProfile from './SpeakerProfile';
import React from 'react';



function App() {
  return (
    <div style={{backgroundColor: 'blue', margin:20, color: 'white'}}>
      <h1>Speaker Profile</h1>
      <SpeakerProfile 
        name='Cody Pilot'
        jobTitle='Professional Bad Ass'
        company='Bad Asses Incorporated'
      />
      <SearchSpeaker/>
    </div>
  );
}

export default App;
