import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Stat = ({text, value}) => (
  <tr>
    <th>{text}</th>
    <th>{value}</th>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  const totalVotes = good + neutral + bad
  if(totalVotes > 0) {
    const avg = (good - bad)/totalVotes
    const positive = (good/totalVotes) * 100
    
    return (
      <table>
        <tbody>
          <Stat text={"Good"} value={good}/>
          <Stat text={"Neutral"} value={neutral}/>
          <Stat text={"Bad"} value={bad}/>
          <Stat text={"All"} value={totalVotes}/>
          <Stat text={"Average"} value={avg}/>
          <Stat text={"Positive"} value={(positive).toString() + " %"}/>
        </tbody>
      </table>
    )
  }

  return <>No feedback given</>
}

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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App