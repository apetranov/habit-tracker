import React from 'react'
import './styles/HabitList.css'

function HabitList({ habits, handleCompleteHabit, getCurrentDate }) {
  return (
    <div className='habit-list'>
        {habits.map(habit => {
            return <div 
                className={
                    `habit-container 
                    ${habit.completedDates.includes(getCurrentDate()) ? `habit-completed` : ``}`
                    } key={habit.id}>
                <input checked={habit.completedDates.includes(getCurrentDate()) ? true : false} onClick={() => handleCompleteHabit(habit.id)} className='checkbox' type="checkbox" />
                <p className='habit-name'>{habit.name}</p>
            </div>
        })}
    </div>
  )
}

export default HabitList