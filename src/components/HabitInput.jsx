import React from 'react'
import './styles/HabitInput.css'

function HabitInput({colorTheme, habitName, setHabitName, handleAddHabit }) {
  return (
    <div className='habit-input-div'>
        <input className={`
        ${colorTheme === 'light' ? `habit-input` : 'dark-habit-input'

        }`} value={habitName} onChange={(e) => setHabitName(e.target.value)} type="text" placeholder='Type your habit...' />
        <button className={`${colorTheme === 'light' ? 'add-habit-button' : 'dark-add-habit-button'}`} onClick={() => {
          handleAddHabit();
          setHabitName('');
        }}>Add habit</button>
    </div>
  )
}

export default HabitInput