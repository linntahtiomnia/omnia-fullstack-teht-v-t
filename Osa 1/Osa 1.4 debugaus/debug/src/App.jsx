import { useState } from "react"

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Clicks = (props) => {
  return (
    <div>
      props.clicks
    </div>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  const [allClicks, setAllClicks] = useState([])

  const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right
    }
    setClicks(newClicks)
    setAllClicks(allClicks.concat('L'))
  }

  const handleRightClick = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1
    }
    setClicks(newClicks)
    setAllClicks(allClicks.concat('R'))
  }

  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {props.text}
    </button>
  )

  return (
        <div>
            {clicks.left}
            <Button onClick={handleLeftClick} text="Left" />
            <Button onClick={handleRightClick} text="Right" />
            {clicks.right}
        </div>
        <History allClicks={allClicks} />
        <Clicks clicks={clicks} />
  )
}

export default App