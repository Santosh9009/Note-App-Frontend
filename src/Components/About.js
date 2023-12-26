import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [userData, setUserData] = useState(null);
  let navigate=useNavigate();

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/auth/getuser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        });
        const json = await response.json();
        setUserData(json);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if(localStorage.getItem('token')){
      console.log(localStorage.getItem('token'));
      fetchData();
    }else{
      navigate('/login');
    }
    
  }, []); 

  return (
    <div className="container my-5">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <i className="fa-solid fa-user my-3"></i>
          {userData ? ( 
            <>
              <h5 className="card-title my-3">{userData.name}</h5>
              <p className="card-text">
                Email: {userData.email}!
              </p>
              <p className="card-text">
                Date Created : {userData.date.slice(0,10)}
              </p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
