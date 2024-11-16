
import { useState } from 'react'

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodReviewClicks = () => {
    let updatedGoodReviews = good + 1
    setGood(updatedGoodReviews)
  }

  const handleBadReviewClicks = () => {
    let updatedBadReviews = bad + 1
    setBad(updatedBadReviews)
  }

  const handleNeutralReviewClicks = () => {
    let updatedGoodReviews = good + 1
    setGood(updatedGoodReviews)
  }

  return (
    <div>
      <Header
      text='Give Feedback'
      />
      <Button handleClick={handleGoodReviewClicks} text='good' />
      <Button handleClick={handleBadReviewClicks} text='bad' />
      <Header
      text='Statistics'
      />
      <p>good: {good}</p>
      <p>bad: {bad}</p>
      <p></p>
    </div>
  )
}

export default App