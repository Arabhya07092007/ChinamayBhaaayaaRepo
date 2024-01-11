// ProfilePage.jsx
import React, { useState } from 'react';
import './Tab4.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Tab4 = () => {
  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    customerSince: 'January 1, 2022',
    phoneNumber: '123-456-7890',
    email: 'john.doe@example.com',
    homeAddress: '123 Main St, City',
    mpin: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  return (

    <div>

      <Card className='tab4-warning-card'>
        <Card.Body>
          <Card.Title>For any changes please contact the Authority</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>


      <div className="profile-page-container">
        <div className="profile-header">
          <h5>User Profile</h5>
        </div>

        <div className="profile-content">
          <div className="profile-details">
            <div className="form-group">
              <label>Name:</label>
              <p>{userDetails.name}</p>
            </div>

            <div className="form-group">
              <label>Customer Since:</label>
              <p>{userDetails.customerSince}</p>
            </div>

            <div className="form-group">
              <label>Phone Number:</label>
              <p>{userDetails.phoneNumber}</p>
            </div>

            <div className="form-group">
              <label>Email:</label>
              <p>{userDetails.email}</p>
            </div>

            <div className="form-group">
              <label>Home Address:</label>
              <p>{userDetails.homeAddress}</p>
            </div>
          </div>

          <div className="profile-icon">
            {/* You can add a profile icon here */}
            <img
              src="https://via.placeholder.com/150"
              alt="Profile Icon"
              className="profile-image"
            />

            <div className="form-group">
              <label>MPIN (4 digits):</label>
              <input
                type="password"
                name="mpin"
                value={userDetails.mpin}
                maxLength={4}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Tab4;
