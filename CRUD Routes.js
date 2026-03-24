
const express = require("express");
const app = express();

app.use(express.json());

// GET all users
app.get("/users", (req, res) => {
  res.status(200).json({ message: "All users fetched" });
});

// GET user by ID
app.get("/users/:id", (req, res) => {
  res.status(200).json({ message: `User ${req.params.id} fetched` });
});

// POST (create user)
app.post("/users", (req, res) => {
  res.status(201).json({ message: "User created", data: req.body });
});

// PUT (update user)
app.put("/users/:id", (req, res) => {
  res.status(200).json({
    message: `User ${req.params.id} updated`,
    data: req.body
  });
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  res.status(200).json({ message: `User ${req.params.id} deleted` });
});

app.listen(3000, () => console.log("Server running on port 3000"));
  

