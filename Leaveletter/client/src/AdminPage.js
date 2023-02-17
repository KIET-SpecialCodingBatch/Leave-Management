import React, { useState, useEffect } from 'react';

const AdminPage = () => {
  const [leaveLetters, setLeaveLetters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:8080/leave_letters');
      const data = await res.json();
      setLeaveLetters(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Leave Letters</h2>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Reason</th>
            <th>Start Date</th>
            <th>End Date</th>
  
          </tr>
        </thead>
        <tbody>
          {leaveLetters.map((leaveLetter, index) => (
            <tr key={index}>
              <td>{leaveLetter.employee_name}</td>
              <td>{leaveLetter.reason}</td>
              <td>{leaveLetter.start_date}</td>
              <td>{leaveLetter.end_date}</td>
          
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
