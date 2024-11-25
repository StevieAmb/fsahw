import React, {useState} from "react"

// const Header = ({text}) => {
//   return (
//     <h1>{text}</h1>
//   )
// }

// const Button = ({handleClick, text}) => {
//   return (
//     <button onClick={handleClick}>{text}</button>
//   )
// }

// const VoteDisplay = ({numOfVotes}) => {
//   if(!numOfVotes) {
//     return (
//       <p>anecdote has no votes yet</p>
//     )
//   }

//   return (
//     <p>has {numOfVotes} votes</p>
//   )
// }

// const PopularAnecdoteDisplay = ({winningAnecdote}) => {
//   return (
//     <p>{winningAnecdote}</p>
//   )
// }

// const App = () => {
  
//   const anecdotes = [
//     'If it hurts, do it more often.',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
//     'The only way to go fast, is to go well.'
//   ]
   
//   const [selected, setSelected] = useState(0)
//   const [anecdoteVotes, setAnecdoteVotes] = useState({})
//   const [highestVotedAnecdote, setHighestVotedAnecdote] = useState('')

//   let getRandomIndex = (array => Math.floor(Math.random() * array.length));

//   const handleAnecdoteSelection = () => {
//     const randomIndex = getRandomIndex(anecdotes)
//     setSelected(randomIndex)
//   }

//   const handleAnecdoteVoting = () => {
//     // Calculate the updated votes
//     const updatedVoteCount = anecdoteVotes[selected]
//       ? anecdoteVotes[selected] + 1
//       : 1;
  
//     const updatedVotes = {
//       ...anecdoteVotes,
//       [selected]: updatedVoteCount,
//     };
  
//     // Update the state
//     setAnecdoteVotes(updatedVotes);

  
//     // Determine the highest-voted anecdote using the updated state
//     getAnecdoteWithHighestVote(updatedVotes);
//   };
  
//   const getAnecdoteWithHighestVote = (updatedVotes) => {
//     let highestVote = 0;
//     let highestKey = null;
  
//     Object.keys(updatedVotes).forEach((key) => {
//       if (updatedVotes[key] > highestVote) {
//         highestVote = updatedVotes[key];
//         highestKey = key;
//       }
//     });
  
//     if (highestKey !== null) {
//       setHighestVotedAnecdote(anecdotes[highestKey]);
//     }
//   };

//   // const handleAnecdoteVoting = () => { //doesn't set a vote until two button clicks
//   //   const updatedVoteCount = anecdoteVotes[selected]
//   //   ? anecdoteVotes[selected] + 1
//   //   : 1;

//   // const updatedVotes = {
//   //   ...anecdoteVotes,
//   //   [selected]: updatedVoteCount,
//   // };

//   // setAnecdoteVotes(updatedVotes)

//   //   // if(!anecdoteVotes[selected]) {
//   //   //   setAnecdoteVotes({...anecdoteVotes, [selected] : 1})
//   //   // } else {
//   //   //   const updatedVote = anecdoteVotes[selected] + 2
//   //   //   setAnecdoteVotes({...anecdoteVotes, [selected]: updatedVote})
//   //   // }
//   //   console.log('voting', anecdoteVotes)
//   //     getAnecdoteWithHighestVote()
//   // }

//   // let anecdoteKeys = Object.keys(anecdoteVotes)

//   // const getAnecdoteWithHighestVote = () => { //needs to be called on a specific tme, user input
//   //   let highestKey;
//   //   for(let i = 0; i < anecdoteKeys.length; i++) {
//   //     let highest = 0
//   //     if(anecdoteVotes[anecdoteKeys[i]] > highest) {
//   //       console.log(anecdoteVotes[anecdoteKeys[i]])
//   //       highest = anecdoteVotes[anecdoteKeys[i]]
//   //       highestKey = anecdoteKeys[i]
//   //     }
//   //   }
//   //   setHighestVotedAnecdote(anecdotes[highestKey]);
//   //   console.log('rating', anecdoteVotes)
//   // }


//   return (
//     <div>
//       <Header text='Anecdote of the day' />
//       <p>{anecdotes[selected]}</p>
//       <VoteDisplay numOfVotes={anecdoteVotes[selected] ? anecdoteVotes[selected] : null} />
//       <Button 
//         handleClick={handleAnecdoteSelection} 
//         text='next anecdote' 
//       />
//       <Button 
//         handleClick={handleAnecdoteVoting} 
//         text='vote' 
//       />
//       <Header text='Anecdote with the most votes' />
//       <PopularAnecdoteDisplay anecdotes={anecdotes} winningAnecdote={highestVotedAnecdote} />
//     </div>
//   )
// }

// export default App

const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <li>
            {note.content}
          </li>
        )}
      </ul>
    </div>
  )
}

export default App