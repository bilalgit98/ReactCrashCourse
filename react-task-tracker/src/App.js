// import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Tasks />
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
