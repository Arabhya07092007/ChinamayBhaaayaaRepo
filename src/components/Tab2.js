// EmployeePage.jsx
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Tab2.css';

const Tab2 = () => {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    registeredUsers: '',
    phoneNumber: '',
    passkey: '',
    numberOfCarsScreened: 0,
  });

  // Assuming a function fetchEmployeesFromBackend fetches the employee data from the backend
  const fetchEmployeesFromBackend = async () => {
    try {
      // Replace the URL with your actual backend endpoint
      const response = await fetch('your_backend_endpoint');
      const data = await response.json();
      setEmployees(data); // Assuming the data has the structure similar to the employees state
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  useEffect(() => {
    fetchEmployeesFromBackend();
  }, []); // Fetch employees on component mount

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const addEmployee = () => {
    // Assuming you have an endpoint to add a new employee in the backend
    // You'll need to implement this as per your backend API
    // Also, update the state accordingly after successfully adding the employee
    // For now, I'm just updating the state to simulate the addition
    setEmployees((prevEmployees) => [...prevEmployees, { id: prevEmployees.length + 1, ...newEmployee }]);
    setNewEmployee({
      registeredUsers: '',
      phoneNumber: '',
      passkey: '',
      numberOfCarsScreened: 0,
    });
    closeModal();
  };

  const deleteEmployee = async (id) => {
    // Assuming you have an endpoint to delete an employee in the backend
    // You'll need to implement this as per your backend API
    // Also, update the state accordingly after successfully deleting the employee
    // For now, I'm just updating the state to simulate the deletion
    setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
  };

  const generatePasskey = () => {
    const passkey = Math.random().toString(36).substring(2, 8).toUpperCase();
    setNewEmployee((prevEmployee) => ({ ...prevEmployee, passkey }));
  };

  const EmployeeRow = ({ employee }) => {
    const { id, registeredUsers, phoneNumber, passkey, numberOfCarsScreened } = employee;

    const handleDelete = () => {
      deleteEmployee(id);
    };

    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{registeredUsers}</td>
        <td>{phoneNumber}</td>
        <td>{passkey}</td>
        <td>{numberOfCarsScreened}</td>
        <td>
          <button onClick={handleDelete} className="small-button">
            Delete
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="employee-page-container">
      <h1>Employee Table</h1>
      <button onClick={openModal} className="small-button">
        Add Employee
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add Employee Modal"
        ariaHideApp={false} // Disable the warning about accessibility
      >
        <h2>Add Employee</h2>
        <form onSubmit={addEmployee}>
          <label>
            Registered Users:
            <input
              type="text"
              name="registeredUsers"
              value={newEmployee.registeredUsers}
              onChange={(e) => setNewEmployee({ ...newEmployee, registeredUsers: e.target.value })}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={newEmployee.phoneNumber}
              onChange={(e) => setNewEmployee({ ...newEmployee, phoneNumber: e.target.value })}
            />
          </label>
          <label>
            Generated Passkey:
            <input
              type="text"
              name="passkey"
              value={newEmployee.passkey}
              readOnly
            />
          </label>
          <label>
            Number of Cars Screened:
            <input
              type="number"
              name="numberOfCarsScreened"
              value={newEmployee.numberOfCarsScreened}
              onChange={(e) => setNewEmployee({ ...newEmployee, numberOfCarsScreened: e.target.value })}
            />
          </label>
          <button type="button" onClick={generatePasskey} className="small-button">
            Generate Passkey
          </button>
          <button type="submit" className="small-button">
            Add Employee
          </button>
          <button className="close-modal" onClick={closeModal}>
            Close
          </button>
        </form>
      </Modal>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Registered Users</th>
              <th>Phone Number</th>
              <th>Generated Passkey</th>
              <th>Number of Cars Screened</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <EmployeeRow key={employee.id} employee={employee} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tab2;
