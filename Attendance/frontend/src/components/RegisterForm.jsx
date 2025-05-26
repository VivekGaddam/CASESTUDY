import React, { useState } from "react";

function RegisterForm() {
  const [rollno, setRollno] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rollno, name }),
    });

    const data = await res.json();
    setMessage(data.message || "Registered!");
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register Student</h2>
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
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />
      <button type="submit">Register</button>
      <p>{message}</p>
    </form>
  );
}

export default RegisterForm;
