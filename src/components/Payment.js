import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Payment = ({ handlePayment }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };
               
  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePayment();
  };

  return (
 
    <form onSubmit={handleSubmit}>
        <h1 style={{textAlign: 'center', color: "#AA336A", margin: "15px"}}>Pay for a double room</h1>
      <label htmlFor="cardNumber">Card Number:</label>
      <input
        type="text"
        id="cardNumber"
        value={cardNumber}
        onChange={handleCardNumberChange}
        required
      />


      <label htmlFor="expirationDate">Expiration Date:</label>
      <input
        type="text"
        id="expirationDate"
        value={expirationDate}
        onChange={handleExpirationDateChange}
        required
      />

      <label htmlFor="cvv">CVV:</label>
      <input
        type="text"
        id="cvv"
        value={cvv}
        onChange={handleCvvChange}
        required
      />

      <Link to='/Paid' style={{textDecorationLine: 'none'}}><button type="submit">Pay Now</button></Link>
    </form>
  );
};

export default Payment;
