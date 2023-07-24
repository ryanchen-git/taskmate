export const AddTask = ({
  currentTask,
  setCurrentTask,
  taskList,
  setTaskList,
}) => {
  function handleSubmit(e) {
    e.preventDefault();

    const date = new Date();

    if (currentTask.id) {
      const newTaskList = taskList.map((list) => {
        if (currentTask.id === list.id) {
          return {
            ...currentTask,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
          };
        } else {
          return { ...list };
        }
      });
      setTaskList(newTaskList);
    } else {
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList, newTask]);
    }
    setCurrentTask({});
  }

  return (
    <div className='addTask'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='task'
          autoComplete='off'
          placeholder='add task'
          value={currentTask.name || ''}
          onChange={(e) => {
            setCurrentTask({
              ...currentTask,
              name: e.target.value,
            });
          }}
        />
        <button type='submit'>{currentTask.id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};
