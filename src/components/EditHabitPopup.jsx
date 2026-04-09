import React from 'react'
import {useState} from 'react'
import './styles/EditHabitPopup.css'

function EditHabitPopup({ setEditHabitPopup, idToEdit, handleEditHabit, habits }) {
    const habit = habits.filter(h => h.id === idToEdit);

    const [newHabitName, setNewHabitName] = useState(habit[0].name);

  return (
    <div className='overlay'>
          <div className='delete-confirm-container'>
                <div className='congrats-message-div'>
                    <h2>Edit habit</h2>
                    <input onChange={(e) => {
                        setNewHabitName(e.target.value)
                    }} value={newHabitName} className='habit-input' type="text" placeholder='New habit...' />
                    {/* <p className='confirm-message'>You did all of your habits today!</p> */}
                </div>
              <div className='action-buttons-div'>
                  <button className='save-button'
                    onClick={() => {
                        handleEditHabit(newHabitName, habit[0].id);
                        if (newHabitName) setEditHabitPopup(false);
                    }}
                  >
                      Save
                  </button>
                  <button className='cancel-button'
                    onClick={() => {
                        setEditHabitPopup(false);
                    }}
                  >
                      Cancel
                  </button>
              </div>
          </div>
      </div>
  )
}

export default EditHabitPopup