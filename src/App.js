import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [todolist, setodolist] = useState([]);

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setodolist(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="App">
      <div className="checkboxlist">
      {todolist.length > 0 && (
        <ul>
          <input type="text" placeholder="Create new task" className="task-creator"/>
          <button>Add</button>
          {todolist.map((user) => (
            <div className="checks">
              <input type="checkbox" />
              <li key={user.userId}>{user.title}</li>
            </div>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
}

export default App;
