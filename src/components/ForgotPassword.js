import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import { useState } from "react";

const ForgotPassword = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const forgotpassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigate("/");
      })
      .catch((er) => {
        console.log(er);
      });
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2>Welcome To Our Best Hotel</h2>
      </div>

      <div
        className="d-flex align-items-center justify-content-center"
        style={{ padding: "8px", marginTop: "10%", marginBottom: "5%" }}
      >
        <div
          style={{ width: "500px", backgroundColor: "white", padding: "12px" }}
        >
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <button
              onClick={forgotpassword}
              style={{ backgroundColor: "teal", color: "white" }}
              type="button"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
