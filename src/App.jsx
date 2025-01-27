import React, {useState, useEffect} from "react"
import axios from "axios"

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

import Note from "./components/Note"
import noteServices from './services/notes'
import Notification from "./components/Notifications"

const App = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState(
    'a new note...'
  ) 
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('some error happened')
  
  const hook = () => {
    console.log('effect')
    noteServices.getAll()
      .then(initialNotes => {
        console.log('promise fulfilled')
        setNotes(initialNotes)
      })
  }
  
  useEffect(hook, [])

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important === true)

  const addNote = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }
  
      noteServices.create(noteObject)
      .then(addedNote => {
        setNotes(notes.concat(addedNote))
        setNewNote('')
      })
  }

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteServices
    .update(id, changedNote).then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
    .catch(error => {
      setErrorMessage(
        `Note '${note.content}' was already removed from server`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setNotes(notes.filter(n => n.id !== id))
    })
}

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <ul>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>  
      {notesToShow.map(note => 
        <Note 
          key={note.id} 
          note={note} 
          toggleImportance={() => toggleImportanceOf(note.id)}
        />
      )}
      </ul>
      <form onSubmit={addNote}>
        <label>add note</label>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>  
    </div>
  )
}

export default App

// import './index.css'

// import noteServices from './services/notes'

// const Notification = ({ message }) => {
//   if (message === null) {
//     return null
//   }

//   return (
//     <div className='error'>
//       {message}
//     </div>
//   )
// }


// const PersonForm = ({addNameAndNumber, newName, handleNameAddition, newNumber, handleNumberAddition }) => {
//   return (
//     <form onSubmit={addNameAndNumber}>
//       <div>
//         name: <input value={newName} onChange={handleNameAddition}/>
//       </div>
//       <div>
//         number: <input value={newNumber} onChange={handleNumberAddition}/>
//       </div>
//       <div>
//         <button type="submit">add</button>
//       </div>
//     </form>
//   )
// }

// const Filter = ({ userNameSearch, setUserNameSearch}) => {
//   return (
//     <>
//      <div>
//         search for a name with: <input value={userNameSearch} onChange={(event) => setUserNameSearch(event.target.value)}/>
//       </div>
//     </>
//   )
// }

// const List = ({id, person, number, deleteNameAndNumber}) => {
//   console.log(id)
//   return (
//     <ul>
//       <li className="note">{person} {number} <button onClick={() => deleteNameAndNumber(id)}>delete</button></li> 
//     </ul>
//   )
// }

// const App = () => {
//   const [persons, setPersons] = useState([])
//   const [newName, setNewName] = useState('')
//   const [newNumber, setNewNumber] = useState('')
//   const [userNameSearch, setUserNameSearch] = useState('')
//   const [errorMessage, setErrorMessage] = useState('some error happened...')

//   const hook = () => {
//         console.log('effect')
//         noteServices.getAll()
//           .then(initialNumbers => {
//             console.log('promise fulfilled')
//             setPersons(initialNumbers)
//           })
//       }
      
//       useEffect(hook, [])

    

//   const addNameAndNumber = (event) => {
//     event.preventDefault()
//     const newNameObject = {
//       name: newName,
//       number: newNumber,
//       id: persons.length + 1
//     }

//     alertNameDuplicate(newNameObject)
//     setNewName('')
//   }

//   const deleteNameAndNumber = (id) => {
//     const personToDelete = persons.find(person => person.id === id)

//     noteServices.removeItem(id, personToDelete)
//     .then(removedPerson => {
//       alert(`${personToDelete} has been removed!`)
//     })
//   }

//   const alertNameDuplicate = (newNameObject) => {
//     const findDuplicateName = persons.find(person => person.name === newNameObject.name)
//     findDuplicateName ? alert(`${newNameObject.name} is already added to the phonebook!`) : setPersons(persons.concat(newNameObject))
//   }

//   const handleNameAddition = (event) => { //refactor, check value type (number or string) to see where to add the value?
//     setNewName(event.target.value)
//   }

//   const handleNumberAddition = (event) => {
//     setNewNumber(event.target.value)
//   }

//   const phoneList = !userNameSearch ? persons : persons.filter(person => person.name.toLowerCase().includes(userNameSearch.toLowerCase()))


//   const allNames = phoneList.map(person => {
//     return (
//       <List 
//         key={person.name}
//         id={person.id}
//         person={person.name}
//         number={person.number}
//         deleteNameAndNumber={deleteNameAndNumber}
//       />
//     )
//   })

//   return (
//     <div>
//       <Notification message={errorMessage} />
//       <h2>Phonebook</h2>
//       <PersonForm 
//         addNameAndNumber={addNameAndNumber} 
//         newName={newName} 
//         newNumber={newNumber} 
//         handleNameAddition={handleNameAddition}
//         handleNumberAddition={handleNumberAddition}
//       />
//       <h2>Filter Numbers</h2>
//       <Filter 
//         userNameSearch={userNameSearch}
//         setUserNameSearch={setUserNameSearch}
//       />
//       <h2>Numbers</h2>
//       {allNames}
//     </div>
//   )
// }

// export default App

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