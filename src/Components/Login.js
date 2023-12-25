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

    if(json.authToken){
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
    <div className="my-5 d-flex justify-content-center">
      <form className="w-50" onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
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
            id="password"
            name="password"
            onChange={change}
            value={detail.password}
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
