import React from 'react'
import './styles/HabitList.css'

function HabitList({ habits }) {
  return (
    <div className='habit-list'>
        {habits.map(habit => {
            return <div className='habit-container' key={habit.id}>
                <input type="checkbox" />
                <p>{habit.name}</p>
            </div>
        })}
    </div>
  )
}

export default HabitList