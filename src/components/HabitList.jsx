import React from 'react'
import './styles/HabitList.css'
import { FaRegTrashAlt } from "react-icons/fa";

function HabitList({ habits, handleCompleteHabit, getCurrentDate, handleDeleteHabit }) {
  return (
    <div className='habit-list'>
        {habits.map(habit => {
            return <div 
                className={
                    `habit-container 
                    ${habit.completedDates.includes(getCurrentDate()) ? `habit-completed` : ``}`
                    } key={habit.id}>
                    <div className='habit-actions-div'>
                        <input checked={habit.completedDates.includes(getCurrentDate())} onChange={() => handleCompleteHabit(habit.id)} className='checkbox' type="checkbox" />
                        <FaRegTrashAlt
                            className='delete-icon'
                            onClick={() => handleDeleteHabit(habit.id)} 
                        />
                    </div>
                <p className='habit-name'>{habit.name}</p>
            </div>
        })}
    </div>
  )
}

export default HabitList