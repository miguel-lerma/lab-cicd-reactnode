
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

let tasks = [{ id: 1, text: "Primera tarea de prueba" }];

app.get("/tasks", (req, res) => res.json(tasks));
app.post("/tasks", (req, res) => {
  const text = (req.body?.text || "").toString().trim();
  if (!text) return res.status(400).json({ error: "text is required" });
  const newTask = { id: tasks.length + 1, text };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.get("/health", (_req, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend listening at http://localhost:${PORT}`));
