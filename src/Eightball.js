import React, {useState} from 'react'
import answersArr from './Answers'
import './Eightball.css'

const Eightball = ({answers=answersArr}) => {
  const idx = Math.floor(Math.random() * answersArr.length)
  const click = () => {
    setMsg(answers[idx].msg)
    setColor(answers[idx].color)
  }

  const [ msg, setMsg ] = useState('Think of a question.')
  const [ color, setColor ] = useState('black')

  return (
    <div
      onClick={click}
      className="Eightball"
      style={{ backgroundColor: color }}
    >
      <p className="Eightball-msg">{msg}</p>
    </div>
  )
}

export default Eightball