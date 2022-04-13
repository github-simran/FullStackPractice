import logo from './logo.svg';
import './App.css';
import {  useState } from 'react';

function App() {
  const [userInput, setSomething] = useState({
    name:         "",
    usn:          "",
    university:   "",
    gender:       "",
    phoneNumber:  ""
  });
  const [shouldIShowValue, setShouldIShowValue] = useState(false);
  



  const handleNameChange = (event) => {
    const newObject = {
      name:         event.Target.value,
      usn:          userInput.usn,
      university:   userInput.university,
      gender:       userInput.gender,
      phoneNumber:  userInput.phoneNumber
    }
    setSomething(newObject)
  }

  const handleDataVisibility = () => {
    setShouldIShowValue(true);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <input 
          placeholder='Name'
          onChange = {handleNameChange} 
          value = {userInput.name}     />

          {
            shouldIShowValue
            ?
            <h1>{userInput.name}</h1>
            :
            null
          }

          <button onClick = {handleDataVisibility} > Show Name</button>
      </header>
    </div>
  );
}

export default App;
