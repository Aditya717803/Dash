import React, { useState } from 'react';
import './App.css';
import './index.css';
import Table from './component/Table.jsx';
import Add from './component/Add.jsx';
import Navbar from './component/navbar.jsx'; 
import Send from './component/Send.jsx';


function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const sendDefaulterMail = () => {
    
    console.log("Defaulter mail sent!");
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <Table />
        
        {/* Buttons Container */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={toggleForm}
            className="rounded-md bg-[#0a0147] px-6 py-3 text-white hover:bg-[#0a0147]/80 transition duration-300 font-mono"
          >
            {showForm ? 'Hide Add Student Form' : 'Add Student'}
          </button>
          <button
            onClick={sendDefaulterMail}
            className="rounded-md bg-red-600 px-6 py-3 text-white hover:bg-red-500 transition duration-300 font-mono"
          >
            Send Defaulter Mail
          </button>
        </div>
        <div className='mt-11'>
          <Send/>
        </div>
        
        {showForm && (
          <div className="mt-6">
            <Add />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
