import React from 'react'

import './styles/AllHabitsFinishedPopup.css'

function AllHabitsFinishedPopup({ colorTheme, setDailyHabitsFinishedPopup }) {
  return (
      <div className='overlay'>
          <div className={`${colorTheme === 'light' ? 'congrats-confirm-container' : 'dark-congrats-confirm-container'}`}>
                <div className='congrats-message-div'>
                    <h2>Congratulations! 🥳</h2>
                    <p className='confirm-message'>You did all of your habits today!</p>
                </div>
              <div className='action-buttons-div'>
                  <button className={`${colorTheme === 'light' ? 'nice-button' : 'dark-nice-button'}`}
                    onClick={() => setDailyHabitsFinishedPopup(false)}
                  >
                      Nice!
                  </button>
              </div>
          </div>
      </div>
    )
}

export default AllHabitsFinishedPopup