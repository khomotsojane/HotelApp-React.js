// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../App.css";

// const Contact = ({ handleContact }) => {
//   const [name, setName] = useState("");
//   const [surname, setSurname] = useState("");
//   const [email, setEmail] = useState("");
//   const [country, setCountry] = useState("");

//   const handleName = (e) => {
//     setName(e.target.value);
//   };
//   const handleSurname = (e) => {
//     setSurname(e.target.value);
//   };
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };
//   const handleCountries = (e) => {
//     setCountry(e.target.value);
//     var setCountry = document.getElementByValue(e);
//     var country = [
//       "Afghanistan",
//       "Albania",
//       "Algeria",
//       "Andorra",
//       "Angola",
//       "Antigua",
//       "Argentina",
//       "Armenia",
//       "Australia",
//       "Austria",
//       "Azerbaijan",
//       "The Bahamas",
//       "Bahrain",
//       "Bangladesh",
//       "Barbados",
//       "Barbuda",
//       "Belarus",
//       "Belgium",
//       "Belize",
//       "Benin",
//       "Bhutan",
//       "Bolivia",
//       "Bosnia",
//       "Botswana",
//       "Brazil",
//       "Brunei",
//       "Bulgaria",
//       "Burkina Faso",
//       "Burundi",
//       "Cabo Verde",
//       "Cambodia",
//       "Cameroon",
//       "Canada",
//       "Central African Republic",
//       "Chad",
//       "Chile",
//       "China",
//       "Colombia",
//       "Comoros",
//       "Congo",
//       "Costa Rica",
//       "Côte d’Ivoire",
//       "Croatia",
//       "Cuba",
//       "Cyprus",
//       "Czech Republic",
//       "Denmark",
//       "Djibouti",
//       "Dominica",
//       "Dominican Republic",
//       "East Timor (Timor-Leste)",
//       "Ecuador",
//       "Egypt",
//       "El Salvador",
//       "Equatorial Guinea",
//       "Eritrea",
//       "Estonia",
//       "Eswatini",
//       "Ethiopia",
//       "Fiji",
//       "Finland",
//       "France",
//       "Gabon",
//       "Gambia",
//       "Georgia",
//       "Germany",
//       "Ghana",
//       "Greece",
//       "Grenada",
//       "Guatemala",
//       "Guinea",
//       "Guinea-Bissau",
//       "Guyana",
//       "Haiti",
//       "Herzegovina",
//       "Honduras",
//       "Hungary",
//       "Iceland",
//       "India",
//       "Indonesia",
//       "Iran",
//       "Iraq",
//       "Ireland",
//       "Israel",
//       "Italy",
//       "Jamaica",
//       "Japan",
//       "Jordan",
//       "Kazakhstan",
//       "Kenya",
//       "Kiribati",
//       "Korea, North",
//       "Korea, South",
//       "Kosovo",
//       "Kuwait",
//       "Kyrgyzstan",
//       "Laos",
//       "Latvia",
//       "Lebanon",
//       "Lesotho",
//       "Liberia",
//       "Libya",
//       "Liechtenstein",
//       "Lithuania",
//       "Luxembourg",
//       "Madagascar",
//       "Malawi",
//       "Malaysia",
//       "Maldives",
//       "Mali",
//       "Malta",
//       "Marshall Islands",
//       "Mauritania",
//       "Mauritius",
//       "Mexico",
//       "Micronesia, Federated States of",
//       "Moldova",
//       "Monaco",
//       "Mongolia",
//       "Montenegro",
//       "Morocco",
//       "Mozambique",
//       "Myanmar (Burma)",
//       "Namibia",
//       "Nauru",
//       "Nepal",
//       "Netherlands",
//       "New Zealand",
//       "Nicaragua",
//       "Niger",
//       "Nigeria",
//       "North Macedonia",
//       "Norway",
//       "Oman",
//       "Pakistan",
//       "Palau",
//       "Panama",
//       "Papua New Guinea",
//       "Paraguay",
//       "Peru",
//       "Philippines",
//       "Poland",
//       "Portugal",
//       "Qatar",
//       "Romania",
//       "Russia",
//       "Rwanda",
//       "Saint Kitts and Nevis",
//       "Saint Lucia",
//       "Saint Vincent and the Grenadines",
//       "Samoa",
//       "San Marino",
//       "Sao Tome and Principe",
//       "Saudi Arabia",
//       "Senegal",
//       "Serbia",
//       "Seychelles",
//       "Sierra Leone",
//       "Singapore",
//       "Slovakia",
//       "Slovenia",
//       "Solomon Islands",
//       "Somalia",
//       "South Africa",
//       "Spain",
//       "Sri Lanka",
//       "Sudan",
//       "Sudan, South",
//       "Suriname",
//       "Sweden",
//       "Switzerland",
//       "Syria",
//       "Taiwan",
//       "Tajikistan",
//       "Tanzania",
//       "Thailand",
//       "Togo",
//       "Tonga",
//       "Trinidad and Tobago",
//       "Tunisia",
//       "Turkey",
//       "Turkmenistan",
//       "Tuvalu",
//       "Uganda",
//       "Ukraine",
//       "United Arab Emirates",
//       "United Kingdom",
//       "United States",
//       "Uruguay",
//       "Uzbekistan",
//       "Vanuatu",
//       "Vatican City",
//       "Venezuela",
//       "Vietnam",
//       "Yemen",
//       "Zambia",
//       "Zimbabwe",
//     ];

//     for (var i = 0; i < country.length; i++) {
//       var country = country[i];
//       var option = document.createElement("option");
//       option.setAttribute("value", country);
//       option.innerText = country;
//       setCountry.appendChild(option);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const details = {
//       name,
//       surname,
//       email,
//       country,
//     };
//     handleContact(details);
//   };

//   return (
//     <div
//       className="container"
//       style={{
//         width: "400px",
//         height: "20px",
//         paddingBottom: "100px",
//         paddingTop: "100px",
//       }}
//     >
//       <form>
//         <label htmlFor="fname">First Name</label>
//         <input
//           onChange={handleName}
//           type="text"
//           value="fname"
//           name="firstname"
//           placeholder="Your name.."
//           required
//         />
//         <label htmlFor="lname">Last Name</label>
//         <input
//           onChange={handleSurname}
//           type="text"
//           value="lname"
//           name="lastname"
//           placeholder="Your last name.."
//           required
//         />
//         <label htmlFor="email">Email address</label>
//         <input
//           onChange={handleEmail}
//           type="email"
//           value="email"
//           name="email"
//           placeholder="Your email address.."
//           required
//         />
//         <label htmlFor="country">Country</label>
//         <select
//           onChange={handleCountries}
//           value="country"
//           name="country"
//           style={{ width: "400px" }}
//         ></select>
//         <label htmlFor="subject">Subject</label>
//         <textarea
//           style={{ width: "400px", height: "200px" }}
//           value="subject"
//           name="message"
//           placeholder="Write something.."
//           defaultValue={""}
//         />
//         <button onClick={handleSubmit} value="submit" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
