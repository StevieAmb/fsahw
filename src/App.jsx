
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

//conditionally render at top level the UI of the state when no feedback is given,
//and pull it out of the statistics component.

const StatisticLine = ({text, value}) => {
  return (
    <p>{text}: {value}</p>
  )

}

const Statistics = ({goodReviews, badReviews, neutralReviews}) => {

  if( !goodReviews && !badReviews && !neutralReviews) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <>
      <p>good: {goodReviews}</p>
      <p>bad: {badReviews}</p>
      <p>neutral: {neutralReviews}</p>
      <p>all: {goodReviews + badReviews + neutralReviews}</p>
      <p>positive: {goodReviews / (goodReviews + badReviews + neutralReviews)}%</p>
    </>
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
    let updatedNeutralReviews = neutral + 1
    setNeutral(updatedNeutralReviews)
  }

  return (
    <div>
      <Header
      text='Give Feedback'
      />
      <Button handleClick={handleGoodReviewClicks} text='good' />
      <Button handleClick={handleNeutralReviewClicks} text='neutral' />
      <Button handleClick={handleBadReviewClicks} text='bad' />
      <Header
      text='Statistics'
      />
      <section className='stats'>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={good + neutral + bad} />
        <StatisticLine text='positive' value={good / (good + neutral + bad)} />

      </section>
    </div>
  )
}

export default App