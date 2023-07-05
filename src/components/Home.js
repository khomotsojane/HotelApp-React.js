import { useHistory, Link, useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "./config/firebase";


const Home = () => {
  //const history = useHistory('');
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Login =((e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(()=>{
      alert("Logged in");
      navigate('/About');
    }).catch((error)=>{
      console.log(error.message);
    })
    


  })

  return (
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
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

         
            <button
              onClick={Login}
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
              <Link style={{ color: "black" }} to={"/Forgotpassword"}>
                Forgot password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
