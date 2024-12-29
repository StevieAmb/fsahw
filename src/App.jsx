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

// import Note from "./components/Note"

// const App = (props) => {

//   const [notes, setNotes] = useState(props.notes)
//   const [newNote, setNewNote] = useState(
//     'a new note...'
//   ) 
//   const [showAll, setShowAll] = useState(true)

//   const notesToShow = showAll
//   ? notes
//   : notes.filter(note => note.important === true)

//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       important: Math.random() > 0.5,
//       id: String(notes.length + 1),
//     }
  
//     setNotes(notes.concat(noteObject))
//     setNewNote('')
//   }

//   const handleNoteChange = (event) => {
//     console.log(event.target.value)
//     setNewNote(event.target.value)
//   }

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important' : 'all' }
//         </button>
//       </div>  
//       {notesToShow.map(note => 
//         <Note 
//           key={note.id} 
//           note={note} 
//         />
//       )}
//       </ul>
//       <form onSubmit={addNote}>
//         <label>add note</label>
//         <input value={newNote} onChange={handleNoteChange}/>
//         <button type="submit">save</button>
//       </form>  
//     </div>
//   )
// }

// export default App

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [userNameSearch, setUserNameSearch] = useState('')

  const addNameAndNumber = (event) => {
    event.preventDefault()
    const newNameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    alertNameDuplicate(newNameObject)
    setNewName('')
  }

  const alertNameDuplicate = (newNameObject) => {
    const findDuplicateName = persons.find(person => person.name === newNameObject.name)
    findDuplicateName ? alert(`${newNameObject.name} is already added to the phonebook!`) : setPersons(persons.concat(newNameObject))
  }

  const handleNameAddition = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberAddition = (event) => {
    setNewNumber(event.target.value)
  }

  const phoneList = !userNameSearch ? persons : persons.filter(person => person.name.includes(userNameSearch))


  const allNames = phoneList.map(person => {
    return (
      <ul key={person.name}>
        <li>{person.name} {person.number}</li>
      </ul>
    )
  })



  //The filter has to go on an onChange in the input field for the search bar
  //Then, we can have a variable that takes the value ternary that checks
  //if there is a value in the user search field
  //If there is not, then it's going to return all of the persons
  //If there is, it's going to filter iterate and filter the person's name
  //That contains the thing in the search field
  //Then we'll iterate over the variable instead
  //Also add error handling if no name comes up for the search

  //Maybe the error handling is like, the variable && the error message (we can check and see if 
  //that works)


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNameAndNumber}>
        <div>
          name: <input value={newName} onChange={handleNameAddition}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberAddition}/>
        </div>
        <p>debug: {newNumber}</p>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Filter Numbers</h2>
        <div>
          search for a name with: <input value={userNameSearch} onChange={() => setUserNameSearch(event.target.value)}/>
        </div>
      <h2>Numbers</h2>
      {{allNames} && <p>There are no names that show up with that search</p>}
    </div>
  )

}

export default App

// const Course = ({ course }) => {
    
//   const courseParts = course.parts.map(part => {
//     return (
//       <Parts key={part.id} coursePart={part.name} courseExercise={part.exercises}/>
//     )
//   })

//   const totalExercises = course.parts.reduce((acc, part) => {
//     return acc + part.exercises
//   }, 0)

//   return (
//     <>
//       <h1>{course.name}</h1>
//       {courseParts}
//       <TotalView total={totalExercises} />
//     </>
//   )
// }

// const Parts = ({coursePart, courseExercise}) => {
//   return (
//     <p>{coursePart} {courseExercise}</p>
//   )
// }

// const TotalView = ({ total }) => {
//   return (
//     <h3>Total : {total}</h3>
//   )
// }

// const App = () => {
  
//   const course = [
//     {
//       name: 'Half Stack application development',
//       id: 1,
//       parts: [
//         {
//           name: 'Fundamentals of React',
//           exercises: 10,
//           id: 1
//         },
//         {
//           name: 'Using props to pass data',
//           exercises: 7,
//           id: 2
//         },
//         {
//           name: 'State of a component',
//           exercises: 14,
//           id: 3
//         },
//         {
//           name: 'Redux',
//           exercises: 11,
//           id: 4
//         }
//       ]
//     },
//     {
//       name: 'Node.js',
//       id: 2,
//       parts: [
//         {
//           name: 'Routing',
//           exercises: 3,
//           id: 1
//         },
//         {
//           name: 'Middlewares',
//           exercises: 7,
//           id: 2
//         }
//       ]
//     }
//   ]

// const listCourses = course.map(courseName => {
//   return (
//     <Course key={courseName.id} course={courseName} />
//   )
// })



//   return (
//     <div>
//       {listCourses}
//     </div>
//   )
// }

// export default App