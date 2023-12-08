import { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

export const AppStorage = ({ children }) => {
  const [taskList, setTasklist] = useState(() => {
    const data = localStorage.getItem("taskList"); //"", porque esta em um banco de dados
    return data ? JSON.parse(data) : [];
  });

  const [progressBarValue, setProgressBarValue] = useState(0);

  const handleAddTask = (taskName) => {
    const newTaskList = [...taskList];
    newTaskList.push({
      id: taskList.length + 1,
      name: taskName,
      done: false,
    });
    setTasklist(newTaskList);
  };

  const handleTaskDelete = (id) => {
    const newTaskList = taskList
      .filter((task) => task.id !== id)
      .map((task, index) => {
        task.id = index + 1;
        return task;
      });
    setTasklist(newTaskList);
  };

  const handleTaskEdit = (id, done) => {
    const newTaskList = [...taskList];
    newTaskList.forEach((task) => {
      if (task.id === id) {
        task.done = done;
      }
      setTasklist(newTaskList);
    });
  };

  useEffect(() => {
    const handleProgressChange = () => {
      if (taskList.length) {
        const completedTasks = taskList.filter((task) => task.done);
        const progressBarValue = Number(
          ((completedTasks.length * 100) / taskList.length).toFixed()
        );
        setProgressBarValue(progressBarValue);
      } else setProgressBarValue(0);
    };
    handleProgressChange();
  }, [taskList]);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <AppContext.Provider
      value={{
        taskList,
        setTasklist,
        progressBarValue,
        handleAddTask,
        handleTaskDelete,
        handleTaskEdit,
      }}>
        {children}
      </AppContext.Provider>
  );
};
