import './App.css';
import Task from './components/Tasks'
import AddTask from './components/AddTask'
import Header from './components/Header'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import About from './components/About';

function App() {

  //Global State
  const [TaskData, SetTaskData] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await FetchTask();
      SetTaskData(tasks);
    }
    getTasks();
  }, [TaskData]); // []Dependency Array


  const FetchTask = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    //Check logging data loop
    return data;
  }

  const FetchTaskById = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }

  // Delete Task
  const deletetask = async (id) => {
    console.log("Deleted ", id);
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    });
    SetTaskData(TaskData.filter((t) => t.id !== id));
  }
  // Change Reminder Status
  const ToggleReminder = async (id) => {
    const data = await FetchTaskById(id);
    const UpdateData = { ...data, reminder: !data.reminder } // change filed for testing

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(UpdateData)
    });

    const ChangedData = await res.json();

    SetTaskData(TaskData.map((task) => (task.id === id) ? { ...task, reminder: (ChangedData.reminder) } : task));
    // SetTaskData(TaskData.map((task) => (task.id === id) ? { ...task, reminder: (!task.reminder) } : task));
  }

  // Add Task
  const addTask = async (newTask) => {

    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newTask)
    });

    SetTaskData([...TaskData, await res.json()]);
    // SetTaskData([...TaskData, newTask]);

    // FetchTask();
    // const id = Math.floor(Math.random() * 1000) + 1;
    // const NewData = { id, ...newTask }

  }

  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={
          (
            <>
              <div className="container-fluid">
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-4 border border-1 border-success'>
                          <Header text="Task Tracker" Show={showAddTask} ClickEvent={() => setShowAddTask(!showAddTask)} />
                          {showAddTask && <AddTask onAdd={addTask} />}
                          {TaskData.length > 0 ? <Task data={TaskData} OnDelete={deletetask} OnToggle={ToggleReminder} /> : "No Tasks Found"}
                          <Footer />
                      
                    </div>
                    <div className='col-4'></div>
                </div>

                
              </div>
            </>
          )
        } />
      </Routes>
    </Router>
  );
}

export default App;
