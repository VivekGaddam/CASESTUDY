import React from "react";
import RegisterForm from "./components/RegisterForm.jsx";
import AttendanceForm from "./components/AttendanceForm.jsx";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Attendance Management</h1>
      <RegisterForm />
      <hr />
      <AttendanceForm />
    </div>
  );
}

export default App;
