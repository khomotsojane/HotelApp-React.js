import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {db} from './config/firebase';
import { collection, addDoc } from "firebase/firestore";


import Image1 from "../media/ROOM1.jpg";
import Image2 from "../media/ROOM2.jpg";
import Image3 from "../media/ROOM3.jpg";
import Image4 from "../media/ROOM4.jpg";
import Image5 from "../media/ROOM5.jpg";
import Image6 from "../media/ROOM6.jpg";
import "../App.css";

const DoubleB = () => {
  const navigate = useNavigate();
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numAdults, setNumAdults] = useState(0);
  const [numChildren, setNumChildren] = useState(0);

  const add =(async()=>{

    try{
      const docRef = await addDoc(collection(db, "booking"),{
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        numAdults: numAdults,
        numChildren: numChildren,
      });
      alert("Added successfully");
    }catch{

    }
  
  })

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
   
    navigate("/Payment");
  };


  
  return (
    <div
      className="align-items-end justify-content-end"
      style={{ marginTop: "10%", marginBottom: "10%" }}
    >
     
      <div className="row">
        <div className="col">
        <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{paddingBotton : '5px'}}>
            <img src={Image1} style={{width: '700px'}}  alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Image2} style={{width: '700px'}}  alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Image3} style={{width: '700px'}}  alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Image4} style={{width: '700px'}}  alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Image5} style={{width: '700px'}}  alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Image6} style={{width: '700px'}}  alt="..." />
          </div>
          
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
        <h1 style={{ color: 'teal', background: 'white' }}>R3500 Double beds</h1>
      </div>
        </div>
        <div className="col">
        <form onSubmit={handleSubmit} className="doubleb-form">
        <h1 style={{ color: '#E11584', textAlign:'center'}}>Book now</h1>
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

        
          <button onClick={add} type="submit">Submit</button>
       
      </form>
        </div>
      </div>
      
    </div>
  );
};

export default DoubleB;
