import React from 'react'
import './styles/ConfirmDeleteHabit.css'
import { FaRegTrashAlt } from "react-icons/fa";

function ConfirmDeleteHabit({ colorTheme ,handleDeleteHabit, setDeleteHabitPopup, idToDelete, habits }) {
  const habit = habits.filter(h => h.id === idToDelete)
  
    return (
    <div className='overlay'>
        <div className={`${colorTheme === 'light' ? 'delete-confirm-container' : 'dark-delete-confirm-container'}`}>
            <p className='confirm-message'>Are you sure you want to delete the "<i><b>{habit[0].name}</b></i>" habit? 🤔</p>
            <div className='action-buttons-div'>
                <button onClick={() => {
                    handleDeleteHabit(idToDelete);
                    setDeleteHabitPopup(false);
                }} className={`${colorTheme === 'light' ? 'delete-button' : 'dark-delete-button'}`}>
                    <FaRegTrashAlt />
                    <p>Yes, delete</p>
                </button>
                <button onClick={() => setDeleteHabitPopup(false)} className={`${colorTheme === 'light' ? 'cancel-button' : 'dark-cancel-button'}`}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmDeleteHabit