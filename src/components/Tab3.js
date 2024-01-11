// ComplaintTab.jsx
import React, { useState } from 'react';
import './Tab3.css';

const Tab3 = () => {
  const [currentComplaints, setCurrentComplaints] = useState([
    { id: 1, name: 'John Doe', phone: '123-456-7890', address: '123 Main St', complaint: 'Water leakage issue' },
    { id: 2, name: 'Jane Doe', phone: '987-654-3210', address: '456 Oak St', complaint: 'Power outage' },
  ]);

  const [inProgressComplaints, setInProgressComplaints] = useState([]);

  const [doneComplaints, setDoneComplaints] = useState([]);

  return (
    <div className="complaint-tab-container">
      <div className="complaint-list">
        <h5>Current Complaints</h5>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Complaint</th>
            </tr>
          </thead>
          <tbody>
            {currentComplaints.map((complaint) => (
              <tr key={complaint.id}>
                <td>{complaint.name}</td>
                <td>{complaint.phone}</td>
                <td>{complaint.address}</td>
                <td>{complaint.complaint}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="complaint-list">
        <h5>In Progress</h5>
        <table>
          {/* Add code for displaying complaints in progress */}
        </table>
      </div>

      <div className="complaint-list">
        <h5>Done</h5>
        <table>
          {/* Add code for displaying completed complaints */}
        </table>
      </div>
    </div>
  );
};

export default Tab3;
