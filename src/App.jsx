
import { useState } from 'react'

const Header = ({ text }) => {
  return (
    <header>{text}</header>
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
    let updatedGoodReviews = good + 1
    setGood(updatedGoodReviews)
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
    </div>
  )
}

export default App