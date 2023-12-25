import React, { useEffect, useState } from "react";

const About = () => {
  const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:5000/api/auth/getuser`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "auth-token": localStorage.getItem("token"),
  //         },
  //       });
  //       const json = await response.json();
  //       setUserData(json);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []); 

  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <i className="fa-solid fa-user"></i>
          {userData ? ( // Check if userData is not null
            <>
              <h5 className="card-title">{userData.name}</h5>
              <p className="card-text">
                Welcome, {userData.email}! {/* Adjust the property based on your API response */}
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
