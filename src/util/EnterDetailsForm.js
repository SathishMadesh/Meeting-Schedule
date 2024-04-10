// EnterDetails.js
import React, { useState } from 'react';

function EnterDetails({ onSchedule }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    onSchedule(name, email);
  };

  return (
    <div className="container">
      <h2>Enter Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email ID:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Schedule Event</button>
      </form>
    </div>
  );
}

export default EnterDetails;
