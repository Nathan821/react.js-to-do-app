import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]); // To hold the list of tasks
  const [inputValue, setInputValue] = useState(''); // To hold the current input value


  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue(''); // Clear the input after adding a task
    }
  };

  
  const handleRemoveTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>📝 Todo List</h1>
      
      <input
        type="text"
        placeholder="Enter a new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: '0.5rem', width: '300px' }}
      />
      <button onClick={handleAddTask} style={{ padding: '0.5rem 1rem', marginLeft: '10px' }}>
        ➕
      </button>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            {task}
            <button
              onClick={() => handleRemoveTask(index)}
              style={{
                marginLeft: '10px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.2rem',
              }}
            >
              ➖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
