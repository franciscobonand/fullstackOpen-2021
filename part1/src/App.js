import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Stats = ({good, neutral, bad}) => (
  <>
    <p>Good {good}</p>
    <p>Neutral {neutral}</p>
    <p>Bad {bad}</p>
  </>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)  

  return (
    <>
      <h2>Give feedback</h2>
      <Button
        handleClick={() => setGood(good + 1)}
        text={"Good"}
      />
      <Button
        handleClick={() => setNeutral(neutral + 1)}
        text={"Neutral"}
      />
      <Button
        handleClick={() => setBad(bad + 1)}
        text={"Bad"}
      />
      <h2>Statistics</h2>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App