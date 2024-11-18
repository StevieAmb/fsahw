import React, {useState} from "react"



const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}



const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [anecdoteVotes, setAnecdoteVotes] = useState({})

  let getRandomIndex = (array => Math.floor(Math.random() * array.length));

  const handleAnecdoteSelection = () => {
    const randomIndex = getRandomIndex(anecdotes)
    setSelected(randomIndex)
  }

  const handleAnecdoteVoting = () => {
    if(!anecdoteVotes[selected]) {
      anecdoteVotes[selected] = 1
    } else {
      anecdoteVotes[selected]
    }
  }

  //There needs to be an object that takes into account the selected anecdote (index)
  //And then is also able to add the votes as a property of selected.

  //We need to be able to store it in state so that we can pass it down as props.
  //How do I store the correct property, and then... how do I increase it?

  //So, we need to 

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Button 
        handleClick={handleAnecdoteSelection} 
        text='next anecdote' 
      />
      <Button 
        handleClick={null} 
        text='vote' 
      />
    </div>
  )
}

export default App