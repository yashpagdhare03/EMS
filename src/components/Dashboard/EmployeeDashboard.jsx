import React, { useState } from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {

  const [data, setData] = useState(props.data);

  const handleAccept = (acceptedTask) => {
    setData((prevData) => {
      let newTaskCount = prevData.taskCount.newTask;
      let completedCount = prevData.taskCount.completed;
      let activeCount = prevData.taskCount.active;
      let failedCount = prevData.taskCount.failed;

      const updatedTasks = prevData.tasks.map((task) => {
        if (
          task.taskTitle === acceptedTask.taskTitle &&
          task.taskDate === acceptedTask.taskDate
        ) {
          if(task.newTask == true){
            newTaskCount -= 1;
            activeCount += 1;
            return { ...task, newTask: false, active: true };
          }
          else if(task.active == true){
            activeCount -= 1;
            completedCount += 1;
            return { ...task, active: false, completed: true };
          }
        }
        return task;
      });
      

      const updatedData = { 
          ...prevData, tasks: updatedTasks,
          taskCount: { newTask: newTaskCount, active: activeCount, completed: completedCount, failed: failedCount } 
        };

      // Update localStorage for persistence
      localStorage.setItem('employees', JSON.stringify(updatedData));

      return updatedData;
    });
  };

  const handleFailed = (acceptedTask) => {
    setData((prevData) => {
      let failedCount = prevData.taskCount.failed;
      let activeCount = prevData.taskCount.active;
      let newTaskCount = prevData.taskCount.newTask;
      let completedCount = prevData.taskCount.completed;
      const updatedTasks = prevData.tasks.map((task) => {
        if (
          task.taskTitle === acceptedTask.taskTitle &&
          task.taskDate === acceptedTask.taskDate
        ){
          failedCount += 1;
          activeCount -= 1;
          return { ...task, active: false, failed: true };
        }
        return task;
      });
      

      const updatedData = { ...prevData, tasks: updatedTasks
        , taskCount: { failed: failedCount, active: activeCount, newTask: newTaskCount, completed: completedCount }
       };

      // Update localStorage for persistence
      localStorage.setItem('employees', JSON.stringify(updatedData));

      return updatedData;
    });
  };

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header changeUser={props.changeUser} data={data} />
        <TaskListNumber changeUser={props.changeUser} data={data} />
        <TaskList changeUser={props.changeUser} data={data} onAccept={handleAccept} onFailed={handleFailed}/>
    </div>
  )
}

export default EmployeeDashboard