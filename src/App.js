import { useState } from 'react';

import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import { Header } from './components/Header';

function App() {
  const [currentTask, setCurrentTask] = useState({});
  const [taskList, setTaskList] = useState([]);

  return (
    <div className='App'>
      <Header />
      <AddTask
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <ShowTask
        setCurrentTask={setCurrentTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
}

export default App;
