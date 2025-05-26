import React, { useState } from "react";

function AttendanceForm() {
  const [rollno, setRollno] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleMarkAttendance = async (e) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("http://localhost:5000/attendance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rollno, subject }),
    });

    const data = await res.json();
    setMessage(data.message || "Attendance marked!");
  };

  return (
    <form onSubmit={handleMarkAttendance}>
      <h2>Mark Attendance</h2>
      <input
        type="number"
        placeholder="Roll No"
        value={rollno}
        onChange={(e) => setRollno(e.target.value)}
        required
      />
      <br />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <br />
      <button type="submit">Mark Attendance</button>
      <p>{message}</p>
    </form>
  );
}

export default AttendanceForm;
