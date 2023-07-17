import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { auth, db } from "./config/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const Payment = ({ handlePayment }) => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const user = auth.currentUser;
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  const add = async () => {
    try {
      const docRef = await addDoc(collection(db, "booking"), {
        cardNumber: cardNumber,
        expirationDate: expirationDate,
        cvv: cvv,
      });
      alert("Paid successfully");
    } catch {}
  };

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

  navigate("/Paid");

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

     <button onClick={add} type="submit">Pay Now</button>
    </form>
  );
};

export default Payment;
