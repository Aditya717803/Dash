// AbsenteeForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AbsenteeForm = () => {
  const [date, setDate] = useState(''); // Store the attendance date

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the date to the backend to process absentees and send emails
      await axios.post('http://localhost:3000/sendAbsenteeEmails', {
        date,
      });
      alert('Emails sent to absent students.');
    } catch (error) {
      console.error('Error sending emails:', error);
      alert('Failed to send absentee emails.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Send Absentee Emails</h2>
      <label htmlFor="date">Select Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Send Emails</button>
    </form>
  );
};

export default AbsenteeForm;
