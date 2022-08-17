import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Appointment 1",
      day: "Feb 11th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Appointment 2",
      day: "Feb 11th at 2:30pm",
      reminder: true,
    },
  ]);
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
