// ParkingApp.jsx
import React, { useState, useEffect, Component } from 'react'
import Button from 'react-bootstrap/Button'
import './Tab1.css';
import firebase from "firebase/app";
import config from '../config';
import { getDatabase, ref, onValue } from "firebase/database";



const Tab1 = () => {
  const [parkingData, setParkingData] = useState([]);
  const [database, setDatabase] = useState(null);
  const [conected, setConnected] = useState(false);

  componentDidMount = async () => {
    firebase.initializeApp(config);
    setDatabase(firebase.database);
  }


  function readData() {         
    // const db = getDatabase();
    const starCountRef = ref(database, 'Parking/' + "bookings" );
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      console.log("fetched the data")
    });
  }




  return (
    <div className="parking-app-container">
            <Button variant="primary" onClick={readData()}>Primary</Button>{' '}
      <h1>Parking Details</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Owner Name</th>
              <th>Car Number</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Available Status</th>
            </tr>
          </thead>
          <tbody>
            {parkingData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.ownerName}</td>
                <td>{item.carNumber}</td>
                <td>{item.checkIn}</td>
                <td>{item.checkOut}</td>
                <td>{item.availableStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tab1;
