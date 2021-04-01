import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const random = (max) =>  Math.floor(Math.random() * max)
  const addVote = (elem) => {
    let temp = [...votes]
    temp[elem] += 1
    return temp
  }
  const displayMostVoted = () => {
    var max = votes[0];
    var maxIndex = 0;

    for (var i = 1; i < votes.length; i++) {
        if (votes[i] > max) {
            maxIndex = i;
            max = votes[i];
        }
    }

    return anecdotes[maxIndex];
}

  console.log()
  return (
    <>
      <h1>Anectode of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button
        handleClick={() => setVotes(addVote(selected))}
        text={"Vote"}
      />
      <Button
        handleClick={() => setSelected(random(anecdotes.length))}
        text={"Next anecdote"}
      />
      <h1>Anectode with most votes</h1>
      {displayMostVoted()}
    </>
  )
}

export default App