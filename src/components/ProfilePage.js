// import React from "react";

// const ProfilePage = () => {
//   return (
//     <div style={{ minHeight: "100vh", backgroundColor: "#000", color: "#fff", padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Profile Page</h1>
//       <div style={{ textAlign: "center" }}>
//         <p style={{ fontSize: "18px" }}>Welcome to your profile!</p>
//         <p style={{ fontSize: "16px" }}>This is where you can manage your settings, preferences, and account details.</p>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;


// import React, { useEffect, useState } from "react";

// const ProfilePage = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       try {
//         setUser(JSON.parse(storedUser)); // Only parse if data exists
//       } catch (error) {
//         console.error("Error parsing user data:", error);
//       }
//     }
//   }, []);

//   return (
//     <div style={{ minHeight: "100vh", backgroundColor: "#000", color: "#fff", padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Profile Page</h1>
//       {user ? (
//         <div style={{ textAlign: "center" }}>
//           <p style={{ fontSize: "18px" }}>Welcome, {user.name}!</p>
//           <p style={{ fontSize: "16px" }}>Your email: {user.email}</p>
//         </div>
//       ) : (
//         <p style={{ textAlign: "center", fontSize: "18px" }}>Loading your profile...</p>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleGetStarted = () => {
    navigate("/gesture-control"); // Navigate to the GestureControl page
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000", // Background set to black
        color: "#fff",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#222",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
          padding: "20px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>My Profile</h1>
        {user ? (
          <div style={{ textAlign: "center" }}>
            <img
              src="https://via.placeholder.com/120"
              alt="Profile"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                marginBottom: "15px",
              }}
            />
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              <strong>Name:</strong> {user.name}
            </p>
            <p style={{ fontSize: "16px", marginBottom: "20px" }}>
              <strong>Email:</strong> {user.email}
            </p>
            <div style={{ marginTop: "20px" }}>
              <button
                onClick={handleLogout}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#FF4D4D",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                Logout
              </button>
              <button
                onClick={handleGetStarted}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#28A745",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        ) : (
          <p style={{ textAlign: "center", fontSize: "18px" }}>
            Loading your profile...
          </p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
