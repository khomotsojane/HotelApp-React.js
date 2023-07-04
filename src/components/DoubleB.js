import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../media/ROOM2.jpg';
import '../App.css';


const DoubleB = ({ handleDoubleBSubmit }) => {
  const navigate = useNavigate();
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numAdults, setNumAdults] = useState(0);
  const [numChildren, setNumChildren] = useState(0);

  const handleCheckInDateChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const handleNumAdultsChange = (e) => {
    setNumAdults(e.target.value);
  };

  const handleNumChildrenChange = (e) => {
    setNumChildren(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      checkInDate,
      checkOutDate,
      numAdults,
      numChildren
    };
    handleDoubleBSubmit(details);
    navigate('/Payment');
  };

  return (

    <div className="align-items-end justify-content-end" style={{marginTop:'10%',marginBottom:'10%', }}>
        
    <form onSubmit={handleSubmit} className="doubleb-form">
      <h1 style={{color: '#AA336A'}}>R3500 Double beds</h1>
      <div className="form-group"> 
        <label htmlFor="checkInDate">Check-in Date:</label>
        <input
          type="date"
          id="checkInDate"
          value={checkInDate}
          onChange={handleCheckInDateChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="checkOutDate">Check-out Date:</label>
        <input
          type="date"
          id="checkOutDate"
          value={checkOutDate}
          onChange={handleCheckOutDateChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="numAdults">Number of Adults:</label>
        <input
          type="number"
          id="numAdults"
          value={numAdults}
          onChange={handleNumAdultsChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="numChildren">Number of Children:</label>
        <input
          type="number"
          id="numChildren"
          value={numChildren}
          onChange={handleNumChildrenChange}
          required
        />
      </div>

      <Link to='/Payment' style={{textDecoration: "none"}}><button type="submit">Submit</button></Link>
    </form>
    <img src={Image}  style={{width: '100%'}} />

    </div>
  );
};

export default DoubleB;
