import { useHistory, Link, useNavigate} from "react-router-dom";
import { signInWithEmailAndText } from "firebase/auth";
import React, {useState} from "react"; 
import { auth } from "./config/firebase";   




const Contact =()=>{

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');


  
 

  
    return(

        <div>
      <div>
        <h1 style={{ textAlign: "center", color: "#AA336A" }}>
          Welcome To Our Best Hotel
        </h1>
      </div>

      <div
        className="d-flex align-items-center justify-content-center"
        style={{ padding: "8px", marginTop: "10%", marginBottom: "5%" }}
      >
        <div style={{ backgroundColor: "white", padding: "12px" }}>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputText1" className="form-label">
                Send message
              </label>
              <input
                type="Text"
                className="form-control"
                id="exampleInputText1"
                onChange={(event) => setText(event.target.value)}
                required
              />
            </div>

         
            <button
            
              style={{ backgroundColor: "teal", color: "white" }}
              type="submit"
              className="btn"
            >
              Submit
            </button>
         
          </form>
          <div className="row">
            <div className="col">
              <Link style={{ color: "black" }} to={"/Register"}>
                Register
              </Link>
            </div>
            <div className="col">
              <Link style={{ color: "black" }} to={"/ForgotText"}>
                Forgot Text
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>


    );


}
export default Contact;


