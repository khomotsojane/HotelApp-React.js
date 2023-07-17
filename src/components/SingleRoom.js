import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import { auth, db } from "./config/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";


import S1 from "../media/S1.jpg";
import S2 from "../media/s2.jpg";
import S3 from "../media/s3.jpg";
import S4 from "../media/s4.jpg";
import S5 from "../media/s5.jpg";
import S6 from "../media/s6.jpg";
import "../App.css";

const DoubleB = () => {
  const navigate = useNavigate();
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numAdults, setNumAdults] = useState(0);
  const [numChildren, setNumChildren] = useState(0);

  // useEffect =(()=>{
  //   getBookings();
  // })

  // const getBookings = async () => {
  //   try {
  //     const querySnapshot = await getDocs(collection(db, "bookings"));
  //     const bookingsData = querySnapshot.docs.map((doc) => ({
  //       ID: doc.ID,
  //       ...doc.data(),
  //     }));
  //     getBookings(bookingsData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const user = auth.currentUser;
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  const add = async () => {
    try {
      const docRef = await addDoc(collection(db, "booking"), {
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        numAdults: numAdults,
        numChildren: numChildren,
      });
      alert("Added successfully");
    } catch {}
  };

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
      numChildren,
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
              <div
                className="carousel-item active"
                style={{ paddingBotton: "5px" }}
              >
                <img src={S1} style={{ width: "700px" }} alt="..." />
              </div>
              <div className="carousel-item">
                <img src={S2} style={{ width: "700px" }} alt="..." />
              </div>
              <div className="carousel-item">
                <img src={S3} style={{ width: "700px" }} alt="..." />
              </div>
              <div className="carousel-item">
                <img src={S4} style={{ width: "700px" }} alt="..." />
              </div>
              <div className="carousel-item">
                <img src={S5} style={{ width: "700px" }} alt="..." />
              </div>
              <div className="carousel-item">
                <img src={S6} style={{ width: "700px" }} alt="..." />
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
            <h1 style={{ color: "teal", background: "white" }}>
              R5000 Single beds
            </h1>
          </div>
        </div>
        <div className="col">
          <form onSubmit={handleSubmit} className="doubleb-form">
            <h1 style={{ color: "#E11584", textAlign: "center" }}>Book now</h1>
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

            <button onClick={add} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoubleB;
