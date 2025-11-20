const express = require("express");
const app = express();

app.use(express.json());

let students = [
  { id: 1, name: "Lokesh", marks: 80 },
  { id: 2, name: "Anuj", marks:84},
  { id: 3, name: "Ankit", marks:75}
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  const { name, marks } = req.body;

  const newStudent = {
    id: students.length + 1,
    name,
    marks
  };

  students.push(newStudent);
  res.json(newStudent);
});

app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
