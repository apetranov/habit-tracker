import { useState } from 'react'
import './App.css'
import HabitInput from './components/HabitInput'
import HabitList from './components/HabitList';

function App() {
  const [habits, setHabits] = useState([]);
  const [habitName, setHabitName] = useState('');
  const [habitId, setHabitId] = useState(0);

  const handleAddHabit = () => {
    if (!habitName) {
      return;
    }

    const habitsCopy = [...habits];

    const newHabit = {
      id: habitId,
      name: habitName,
      completedDates: []
    }

    habitsCopy.push(newHabit);

    setHabits(habitsCopy);
    setHabitId(id => id + 1);
  }

  return (
    <div className='container'>
      <HabitInput 
        handleAddHabit={handleAddHabit}
        habitName={habitName}
        setHabitName={setHabitName}
        habits={habits}
      />
      <HabitList habits={habits} />
    </div>
  )
}

export default App
