import React, { useState } from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";


const Login = () => {
  const [detail, setDetail] = useState({ email: "", password: "" });
  let navigate= useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: detail.email, password: detail.password }),
    });
    
    const json = await response.json();
    console.log(json);

    if(response.ok){
      localStorage.setItem('token', json.authToken);
      navigate('/');
      toast.success("Logged in successfully");
    }else{
      toast.error("Enter valid credentials");
    }
  };

  const change = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  return (
    <div className="my-5 d-flex flex-column align-items-center">
      <h2 className="mb-5">Login to continue with Note Plate</h2>
      <form className="w-50 p-5 bg-dark text-light rounded" onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            onChange={change}
            value={detail.email}
            minLength={5}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={change}
            value={detail.password}
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
