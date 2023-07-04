import { Link, useNavigate } from "react-router-dom";

import "../App.css";

const About = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "#AA336A" }}>
        Payment Successful
      </h1>

      <table>
        <tr style={{ font: "Bold", padding: "5px", color: "white" }}>
          <th>Banking</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Amount paid</th>
          <th>Transaction id</th>
        </tr>
        <tr>
          <td>Capitec app</td>
          <td>0711844702</td>
          <td>khomotsojane27@gmail.com</td>
          <td>R3500</td>
          <td>o986544548558767</td>
        </tr>
      </table>
     
    </div>
  );
};

export default About;
