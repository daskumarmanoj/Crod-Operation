import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Createe() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const Navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://6673db3c75872d0e0a940330.mockapi.io/Crud", {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        Navigate("/");
      });
  };
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-3 mt-3">
            <Link to="/">
              <button className="btn btn-primary">View Data</button>
            </Link>
          </div>
          <div className="bg-primary p-4 text-center">
            <h1>Create Data</h1>
          </div>
          <form onSubmit={handelSubmit}>
            <div className="form-group">
              <label>Enter Your Name :</label>
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Enter Your Age:</label>
              <input
                type="number"
                placeholder="Age"
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Enter Your Email:</label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="d-grid">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
          {name}
          <br />
          {age}
          <br />
          {email}
        </div>
      </div>
    </>
  );
}

export default Createe;
