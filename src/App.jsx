import { useState, useEffect } from 'react'
import './App.css'
import HabitInput from './components/HabitInput'
import HabitList from './components/HabitList';
import DailyProgressBar from './components/DailyProgressBar';
import ConfirmDeleteHabit from './components/ConfirmDeleteHabit';
import AllHabitsFinishedPopup from './components/AllHabitsFinishedPopup';
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [habits, setHabits] = useState(JSON.parse(localStorage.getItem('habits')) || []);
  const [habitName, setHabitName] = useState('');
  const [deleteHabitPopup, setDeleteHabitPopup] = useState(false);
  const [idToDelete, setIdToDelete] = useState('');
  const [dailyHabitsFinishedPopup, setDailyHabitsFinishedPopup] = useState(false);
  // const [habitId, setHabitId] = useState(uuidv4());

  const getCurrentDate = () => {
   
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  const handleCompleteHabit = (id) => {
    let habitsCopy;

    if (!localStorage.getItem('habits')) {
      habitsCopy = [...habits];
    } else {
      habitsCopy = [...JSON.parse(localStorage.getItem('habits'))];
    }

    let currentDate = getCurrentDate();

    for (let i = 0; i < habitsCopy.length; i++) {
      if (habitsCopy[i].id === id) {
        if (!habitsCopy[i].completedDates.includes(currentDate)) {
          habitsCopy[i].completedDates.push(currentDate);
        } else if (habitsCopy[i].completedDates.includes(currentDate)) {
          habitsCopy[i].completedDates.pop();
        }
      }
    }

    setHabits(habitsCopy);
    localStorage.setItem('habits', JSON.stringify(habitsCopy));
  }

  const handleAddHabit = () => {
    
    // setHabitId(uuidv4());
    if (!habitName) {
      return;
    }

    let habitsCopy;

    if (!localStorage.getItem('habits')) {
      habitsCopy = [...habits];
    } else {
      habitsCopy = [...JSON.parse(localStorage.getItem('habits'))];
    }

    const newHabit = {
      id: uuidv4(),
      name: habitName,
      completedDates: []
    }

    habitsCopy.push(newHabit);

    setHabits(habitsCopy);
    
    localStorage.setItem('habits', JSON.stringify(habitsCopy));
  }

  const handleDeleteHabit = (habitId) => {
    let habitsCopy;

    if (!localStorage.getItem('habits')) {
      habitsCopy = [...habits];
    } else {
      habitsCopy = [...JSON.parse(localStorage.getItem('habits'))];
    }

    const modifiedHabits = habitsCopy.filter(habit => habit.id !== habitId);
    
    setHabits(modifiedHabits);

    localStorage.setItem('habits', JSON.stringify(modifiedHabits));
  }

  let completedCnt = 0;

    for (let i = 0; i < habits.length; i++) {
        if (habits[i].completedDates.includes(getCurrentDate())) {
            completedCnt++;
        }
    }

    let progress = habits.length > 0 ? ((completedCnt / habits.length) * 100).toFixed(0) : 0;
    
    // console.log(progress);
    useEffect(() => {
        if (progress === '100') {
            setDailyHabitsFinishedPopup(true);
        }
    }, [progress])

  return (
    <div className='container'>
      {dailyHabitsFinishedPopup && <AllHabitsFinishedPopup 
          setDailyHabitsFinishedPopup={setDailyHabitsFinishedPopup}
          progress={progress}
        />}
      {deleteHabitPopup && <ConfirmDeleteHabit 
        handleDeleteHabit={handleDeleteHabit}
        setDeleteHabitPopup={setDeleteHabitPopup}
        idToDelete={idToDelete}
        habits={habits}
      />}
      <HabitInput 
        handleAddHabit={handleAddHabit}
        habitName={habitName}
        setHabitName={setHabitName}
        habits={habits}
      />
      <DailyProgressBar
        progress={progress}
        habits={habits}
      />
      <HabitList 
        handleCompleteHabit={handleCompleteHabit}
        habits={habits}
        getCurrentDate={getCurrentDate}
        handleDeleteHabit={handleDeleteHabit}
        deleteHabitPopup={deleteHabitPopup}
        setDeleteHabitPopup={setDeleteHabitPopup}
        setIdToDelete={setIdToDelete}
      />
    </div>
  )
}

export default App
