import { useEffect, useState, useTransition } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [submitResult, setSubmitResult] = useState("failure");

  const handleFnameChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLnameChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmailChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setSubmitted(true);

    if (values.firstName && values.lastName && values.email) {
      setValid(true);
      setSubmitResult("success");
    }
    
    else {
      setValid(false);
      setSubmitResult("failure");
    }
  };

  return (
    <div className="wrapper">
      <div className="form-container" onSubmit={submitHandler}>
        <form className="register-form">
          {submitted ? (
            <div className={`${submitResult} message`}>
              {!valid
                ? "Could not register! Try again"
                : "Success! Thankyou for registering"}
            </div>
          ) : null}

          <input
            type="text"
            placeholder="First Name"
            value={values.firstName}
            onChange={handleFnameChange}
          />
          {submitted && !valid && !values.firstName ? (
            <span className="input-validator">Please enter a first name</span>
          ) : null}
        
          <input
            type="text"
            placeholder="Last Name"
            value={values.lastName}
            onChange={handleLnameChange}
          />
          {submitted && !valid && !values.lastName ? (
            <span className="input-validator">Please enter a last name</span>
          ) : null}
         
          <input
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleEmailChange}
          />
          {submitted && !valid && !values.email ? (
            <span className="input-validator">
              Please enter an email address{" "}
            </span>
          ) : null}

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
