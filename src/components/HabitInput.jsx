import React from 'react'
import './styles/HabitInput.css'

function HabitInput({ habitName, setHabitName, handleAddHabit }) {
  return (
    <div className='habit-input-div'>
        <input className='habit-input' value={habitName} onChange={(e) => setHabitName(e.target.value)} type="text" placeholder='Type your habit...' />
        <button className='add-habit-button' onClick={() => {
          handleAddHabit();
          setHabitName('');
        }}>Add habit</button>
    </div>
  )
}

export default HabitInput