import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ayushi", score: 75 },
    { id: 2, name: "Rahul", score: 32 },
  ]);

  const updateScore = (id, newScore) => {
    setStudents(students.map(s =>
      s.id === id ? { ...s, score: Number(newScore) } : s
    ));
  };

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score)
    };
    setStudents([...students, newStudent]);
  };

  return (
    <div className="app-container">
      <Header />
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;