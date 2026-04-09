import React from 'react'
import {useState} from 'react'
import './styles/EditHabitPopup.css'

function EditHabitPopup({ colorTheme, setEditHabitPopup, idToEdit, handleEditHabit, habits }) {
    const habit = habits.filter(h => h.id === idToEdit);

    const [newHabitName, setNewHabitName] = useState(habit[0].name);

  return (
    <div className='overlay'>
          <div className={`${colorTheme === 'light' ? 'edit-confirm-container' : 'dark-edit-confirm-container'}`}>
                <div className='congrats-message-div'>
                    <h2>Edit habit</h2>
                    <input onChange={(e) => {
                        setNewHabitName(e.target.value)
                    }} value={newHabitName} className={`${colorTheme === 'light' ? 'habit-input' : 'dark-habit-input'}`} type="text" placeholder='New habit...' />
                    {/* <p className='confirm-message'>You did all of your habits today!</p> */}
                </div>
              <div className='action-buttons-div'>
                  <button className={`${colorTheme === 'light' ? 'save-button' : 'dark-save-button'}`}
                    onClick={() => {
                        handleEditHabit(newHabitName, habit[0].id);
                        if (newHabitName) setEditHabitPopup(false);
                    }}
                  >
                      Save
                  </button>
                  <button className={`${colorTheme === 'light' ? 'cancel-button' : 'dark-cancel-button'}`}
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