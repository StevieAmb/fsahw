
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log('content', props.courses[0].part1)
  return (
    <>
      <Part course={props.courses[0].part1} exercise={props.courses[0].exercises1} />
      <Part course={props.courses[1].part2} exercise={props.courses[1].exercises2} />
      <Part course={props.courses[2].part3} exercise={props.courses[2].exercises3} />
    </>
  )
}

const Part = (props) => {
  return (
    <p>{props.course} {props.exercise}</p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const courseParts = [
    {part1: 'Fundamentals of React', exercises1: 10}, 
    {part2: 'Using props to pass data', exercises2: 7}, 
    {part3: 'State of a component', exercises3: 14} 
  ]

  return (
    <div>
      <Header course={course}/>
      <Content courses={courseParts}/>
      <Total total={exercises1+exercises2+exercises3} />
    </div>
  )
}

export default App