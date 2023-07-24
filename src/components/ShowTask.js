export const ShowTask = ({ setCurrentTask, taskList, setTaskList }) => {
  function deleteCurrntTask(id) {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  }

  return (
    <section className='showTask'>
      <p className='head'>
        <span>
          <span className='title'>Todo</span>
          <span className='count'>{taskList && taskList.length}</span>
        </span>
        <span
          className='clearAll'
          onClick={() => {
            setTaskList([]);
          }}
        >
          Clear All
        </span>
      </p>
      <ul>
        {taskList &&
          taskList.map((task) => {
            return (
              <li key={task.id}>
                <p>
                  <span className='name'>{task.name}</span>
                  <span className='time'>{task.time}</span>
                </p>
                <i
                  className='bi bi-pencil-square'
                  onClick={() => setCurrentTask(task)}
                ></i>
                <i
                  className='bi bi-trash'
                  onClick={() => deleteCurrntTask(task.id)}
                ></i>
              </li>
            );
          })}
      </ul>
    </section>
  );
};
