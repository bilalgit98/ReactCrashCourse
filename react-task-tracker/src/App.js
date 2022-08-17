// import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
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

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks Available!"
      )}
    </div>
  );
};

// function App() {
//   return (
//     <div className="container">
//       <Header />
//     </div>
//   );
// }

// class App extends React.Component {
//   render() {
//     return <h1> hello from a class</h1>;
//   }
// }

export default App;
