import React from "react";

// This is a Class Component
// class SpeakerProfile extends React.Component {
//   render() {
//     return <h1>This is the class component expression from Speaker Profile</h1>;
//   }
// }

//function component equivalent of the above class component
// const SpeakerProfile = () => {
//   return <h1>This is the function component equivalent to the class component</h1>;
// };
// export default SpeakerProfile;

const SpeakerProfile = (props) => {
  return (
    <>
      <h3>{props.name}</h3>
      <p>Position: {props.jobTitle}</p>
      <p>Company: {props.company}</p>
    </>
  );
}
export default SpeakerProfile;