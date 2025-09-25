
import React, { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/tasks")
      .then(res => res.json())
      .then(setTasks);
  }, []);

  async function addTask() {
    const res = await fetch("http://localhost:4000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
    setText("");
  }

  return (
    <div style={{maxWidth:"600px",margin:"2rem auto",fontFamily:"Arial"}}>
      <h1>🚀 Portal DevOps - Tareas</h1>
      <ul>{tasks.map(t => <li key={t.id}>{t.text}</li>)}</ul>
      <input value={text} onChange={e=>setText(e.target.value)} />
      <button onClick={addTask}>Agregar</button>
    </div>
  );
}
export default App;
