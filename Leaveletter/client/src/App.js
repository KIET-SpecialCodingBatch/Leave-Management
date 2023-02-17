import React, { useState } from 'react';
import UserPage from './UserPage';
import AdminPage from './AdminPage';
import './App.css';

const App = () => {
  const [selectedPage, setSelectedPage] = useState('user');

  return (
    <div className="container">
      
  
      <center>
      <h1 className="text-center my-3">Leave Letter System</h1>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary mx-3" onClick={() => setSelectedPage('user')}>User</button>
        <button className="btn btn-primary mx-3" onClick={() => setSelectedPage('admin')}>Admin</button>
      </div>
      {selectedPage === 'user' ? <UserPage /> : <AdminPage />}
      </center>
      
    </div>
  );
};

export default App;
