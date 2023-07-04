import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "./config/firebase";

const Register = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [conpassword, setConPassword] = useState();
  
    const registerButton= (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password, conpassword)
        .then(() => {
          alert("Registered successfully");
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    return (
        <div >
            <div style={{textAlign:'center'}}>
                <h2>Welcome To Our Best Hotel</h2>
            </div>

            <div className="d-flex align-items-center justify-content-center" style={{padding:'8px',marginTop:'10%',marginBottom:'5%'}}>
            
            <div style={{backgroundColor:'white',padding:'12px'}}>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => setEmail(event.target.value)}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(event) => setConPassword(event.target.value)}/>
                </div>
                
                <button onClick={registerButton} style={{backgroundColor:'teal',color:"white"}} type="submit" className="btn">Submit</button>
                
            </form>
            <div className="row">
                <div className="col">
                    <Link  style={{color:"black"}} to={'/'}>Login</Link>
                </div>
                <div className="col">
                    <Link style={{color:"black"}} to={'/Forgotpassword'}>Forgot password</Link>
                </div>

            </div>

            
            
            </div>
        </div>

        </div>
        
    );
}

export default Register;