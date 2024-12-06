import './App.css';
import SpeakerProfile from './SpeakerProfile';

const coolGuyName = 'Cody Pilot';

function App() {
  return (
    <div style={{backgroundColor: 'gray', margin:20, color:'white'}}>
      <SpeakerProfile />
      <h1>Welcome to Bizza Platform, {coolGuyName}</h1>
    </div>
  );
}

export default App;
