import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { registerApi } from "../../apis/Api";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");

  // Error state
  const [fnameError, setFnameError] = useState("");
  const [lnameError, setLnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [passError, setPassError] = useState("");
  const [pass2Error, setPass2Error] = useState("");

  const validate = () => {
    let isValid = true;

    if (fname === "") {
      setFnameError("Firstname is required");
      isValid = false;
    } else {
      setFnameError("");
    }

    if (lname === "") {
      setLnameError("Lastname is required");
      isValid = false;
    } else {
      setLnameError("");
    }

    if (email === "") {
      setEmailError("Email is required");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (phone === "") {
      setPhoneError("Phone number is required");
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      setPhoneError("Phone number must be 10 digits");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (address === "") {
      setAddressError("Address is required");
      isValid = false;
    } else {
      setAddressError("");
    }

    if (pass === "") {
      setPassError("Password is required");
      isValid = false;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
      setPassError("Password must contain at least one special character");
      isValid = false;
    } else {
      setPassError("");
    }

    if (pass2 === "") {
      setPass2Error("Confirm password is required");
      isValid = false;
    } else if (pass !== pass2) {
      setPass2Error("Passwords don't match");
      isValid = false;
    } else {
      setPass2Error("");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      registerApi({
        fname,
        lname,
        email,
        phone,
        address,
        password: pass,
        password2: pass2,
      })
        .then((res) => {
          toast.success("User registered successfully");
        })
        .catch((err) => {
          console.log(err);
          toast.error("User registration failed");
        });
    } catch (error) {
      toast.error("Registration failed");
    }
  };

  return (
    <div className="container">
      <div className="col-md-5">
        <h1>Register a user</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fname">Firstname</label>
            <input
              onChange={(e) => setFname(e.target.value)}
              type="text"
              name="fname"
              id="fname"
              className="form-control"
            />
            {fnameError && <div className="text-danger">{fnameError}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="lname">Lastname</label>
            <input
              onChange={(e) => setLname(e.target.value)}
              type="text"
              name="lname"
              id="lname"
              className="form-control"
            />
            {lnameError && <div className="text-danger">{lnameError}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              className="form-control"
            />
            {emailError && <div className="text-danger">{emailError}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              name="phone"
              id="phone"
              className="form-control"
            />
            {phoneError && <div className="text-danger">{phoneError}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              name="address"
              id="address"
              className="form-control"
            />
            {addressError && <div className="text-danger">{addressError}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPass(e.target.value)}
              type="password"
              name="password"
              id="password"
              className="form-control"
            />
            {passError && <div className="text-danger">{passError}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
              onChange={(e) => setPass2(e.target.value)}
              type="password"
              name="password2"
              id="password2"
              className="form-control"
            />
            {pass2Error && <div className="text-danger">{pass2Error}</div>}
          </div>
          <button type="submit" className="btn btn-primary mt-3 w-100">
            Register
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
