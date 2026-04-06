import { useState } from 'react'
import './App.css'
import HabitInput from './components/HabitInput'
import HabitList from './components/HabitList';

function App() {
  const [habits, setHabits] = useState(JSON.parse(localStorage.getItem('habits')) || []);
  const [habitName, setHabitName] = useState('');
  const [habitId, setHabitId] = useState(JSON.parse(localStorage.getItem('habitId')) || 0);

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
      id: habitId,
      name: habitName,
      completedDates: []
    }

    habitsCopy.push(newHabit);

    setHabits(habitsCopy);
    setHabitId(id => id + 1);
    localStorage.setItem('habitId', JSON.stringify(habitId));
    localStorage.setItem('habits', JSON.stringify(habitsCopy));
  }

  return (
    <div className='container'>
      <HabitInput 
        handleAddHabit={handleAddHabit}
        habitName={habitName}
        setHabitName={setHabitName}
        habits={habits}
      />
      <HabitList 
        handleCompleteHabit={handleCompleteHabit}
        habits={habits}
        getCurrentDate={getCurrentDate}
      />
    </div>
  )
}

export default App
