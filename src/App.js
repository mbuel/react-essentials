import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log('It\'s emotion is ', {emotion});
  }, [emotion])

  useEffect(() => {
    console.log('It\'s emotion is ', {secondary});
  }, [secondary])

  return (
    <>
      <h1>Hello! My current emotion is {emotion} and I am {secondary}</h1>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button onClick={() => setEmotion("happy")}>Happy</button>
      <button onClick={() => setEmotion("enthusiastic")}>Enthused</button>
      <button onClick={() => setSecondary("crabby")}>Crabby!</button>

    </>
  ) 

}

export default App;
