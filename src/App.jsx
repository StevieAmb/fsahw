import React, {useState} from "react"

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const VoteDisplay = ({numOfVotes}) => {
  if(!numOfVotes) {
    return (
      <p>anecdote has no votes yet</p>
    )
  }

  return (
    <p>has {numOfVotes} votes</p>
  )
}

const PopularAnecdoteDisplay = ({anecdotes, anecdoteVotes}) => {
  return (
    <p>I'm popular</p>
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
      setAnecdoteVotes({...anecdoteVotes, [selected]: 1})
    } else {
      setAnecdoteVotes({...anecdoteVotes, [selected]: anecdoteVotes[selected] + 1})
    }
  }



  //To find the anecdote with the most popular vote, I need to look through the object,
  //And find the property that holds the highest value
  //So I need to get the keys of the object (object.keys), and iterate through 
  //each one within the object.
  //Then I use that same property and then add it to the anecdote list,
  //In order to pull out the saying.
  //Where do I put the function?

  

  return (
    <div>
      <Header text='Anecdote of the day' />
      <p>{anecdotes[selected]}</p>
      <VoteDisplay numOfVotes={anecdoteVotes[selected] ? anecdoteVotes[selected] : null} />
      <Button 
        handleClick={handleAnecdoteSelection} 
        text='next anecdote' 
      />
      <Button 
        handleClick={handleAnecdoteVoting} 
        text='vote' 
      />
      <Header text='Anecdote with the most votes' />
    </div>
  )
}

export default App