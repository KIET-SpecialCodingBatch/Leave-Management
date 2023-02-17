import React, { useState } from 'react';
import axios from 'axios';

const CreateLeaveLetter = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [reason, setReason] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newLeaveLetter = {
      employee_name: employeeName,
      reason: reason,
      start_date: startDate,
      end_date: endDate,
      status: status,
    };

    axios.post('http://localhost:8080/create_leave', newLeaveLetter)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    setEmployeeName('');
    setReason('');
    setStartDate('');
    setEndDate('');
    setStatus('');
  };

  return (
    <div>
      <h3>Create Leave Letter</h3>
        <div className="form-group">
          <label>Employee Name: </label>
          <input type="text" required value={employeeName} onChange={e => setEmployeeName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Reason: </label>
          <input type="text" required value={reason} onChange={e => setReason(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Start Date: </label>
          <input type="date" required value={startDate} onChange={e => setStartDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>End Date: </label>
          <input type="date" required value={endDate} onChange={e => setEndDate(e.target.value)} />
        </div>
        <div className="form-group">
    <label htmlFor="status">Status:</label>
    <input type="text" id="status" name="status" value="pending" readOnly />
        </div>
        <div className="form-group">
          <input onClick={handleSubmit} type="submit" value="Submit" />
        </div>
    </div>
  );
};

export default CreateLeaveLetter;
