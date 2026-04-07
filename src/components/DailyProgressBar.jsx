import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

function DailyProgressBar({ progress, habits }) {
    // console.log(ProgressBar);
    
    // console.log(
    //     habits,
    //     habits.length,
    //     completedCnt,
    //     progress
    // );

  return (
    <div className='progress-bar-div'>
        {habits.length > 0 && <ProgressBar.default 
            className='progress-bar' 
            completed={progress}
            width="300px"
            bgColor="#000000"
        />}
    </div>
  )
}

export default DailyProgressBar