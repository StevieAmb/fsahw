
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
    <tr>
      <td>
        <p>{text}: </p>
      </td>
      <td>
        <p>{value}</p>
      </td>
    </tr>
  )

}

const Statistics = ({goodReviews, badReviews, neutralReviews}) => {
  return (
      <table>
        <StatisticLine text='good' value={goodReviews} />
        <StatisticLine text='neutral' value={neutralReviews} />
        <StatisticLine text='bad' value={badReviews} />
        <StatisticLine text='all' value={goodReviews + neutralReviews + badReviews} />
        <StatisticLine text='positive' value={goodReviews / (goodReviews + neutralReviews + badReviews)} />
      </table>
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
      {!good && !bad && !neutral ? <p>No feedback given</p> : <Statistics goodReviews={good} badReviews={bad} neutralReviews={neutral} />}
    </div>
  )
}

export default App