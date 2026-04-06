import React from 'react'
import './styles/HabitInput.css'

function HabitInput() {
  return (
    <div>
        <input type="text" placeholder='Type your habit...' />
        <button>Add habit</button>
    </div>
  )
}

export default HabitInput