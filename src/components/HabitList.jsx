import React from 'react'
import './styles/HabitList.css'
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

function HabitList({ 
    habits, 
    handleCompleteHabit, 
    getCurrentDate, 
    // handleDeleteHabit,
    setDeleteHabitPopup,
    setIdToDelete,
    setEditHabitPopup,
    setIdToEdit,
    colorTheme
}) {
  return (
    <div className='habit-list'>
        {habits.map(habit => {
            return <div 
                className={
                    `${colorTheme === 'light' ? 'habit-container' : 'dark-habit-container'} 
                    ${habit.completedDates.includes(getCurrentDate()) ? `habit-completed` : ``}`
                    } key={habit.id}>
                    <div className='habit-actions-div'>
                        <input checked={habit.completedDates.includes(getCurrentDate())} onChange={() => handleCompleteHabit(habit.id)} className='checkbox' type="checkbox" />
                        <FaRegTrashAlt
                            className='delete-icon'
                            // onClick={() => handleDeleteHabit(habit.id)}
                            onClick={() => {
                                setDeleteHabitPopup(true);
                                setIdToDelete(habit.id);
                            }}
                        />
                        <FaRegEdit className='edit-icon'
                            onClick={() => {
                                setIdToEdit(habit.id);
                                setEditHabitPopup(true);
                            }}
                        />
                    </div>
                <p className='habit-name'>{habit.name}</p>
            </div>
        })}
    </div>
  )
}

export default HabitList