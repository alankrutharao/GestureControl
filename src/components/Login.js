// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert("Login Successful!");
//         navigate("/gesture-control");
//       } else {
//         alert(data.message || "Invalid credentials");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("An error occurred while logging in.");
//     }
//   };

//   return (
//     <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#000", fontFamily: "Arial, sans-serif" }}>
//       <div style={{ width: "100%", maxWidth: "400px", padding: "30px", borderRadius: "10px", backgroundColor: "#222", boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)" }}>
//         <h1 style={{ textAlign: "center", color: "#fff", marginBottom: "20px" }}>Login</h1>
//         <form onSubmit={handleLogin}>
//           <div style={{ marginBottom: "15px" }}>
//             <label style={{ display: "block", fontSize: "14px", color: "#aaa", marginBottom: "5px" }}>Email:</label>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: "100%", padding: "10px", border: "1px solid #444", borderRadius: "5px", fontSize: "16px", backgroundColor: "#333", color: "#fff" }} />
//           </div>
//           <div style={{ marginBottom: "20px" }}>
//             <label style={{ display: "block", fontSize: "14px", color: "#aaa", marginBottom: "5px" }}>Password:</label>
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: "100%", padding: "10px", border: "1px solid #444", borderRadius: "5px", fontSize: "16px", backgroundColor: "#333", color: "#fff" }} />
//           </div>
//           <button type="submit" style={{ width: "100%", padding: "12px", backgroundColor: "#6a11cb", color: "#fff", fontSize: "16px", border: "none", borderRadius: "5px", cursor: "pointer" }}>Login</button>
//         </form>
//         <div style={{ marginTop: "20px", textAlign: "center", fontSize: "14px", color: "#aaa" }}>
//           Don't have an account?{" "}
//           <span onClick={() => navigate("/signup")} style={{ color: "#6a11cb", cursor: "pointer", textDecoration: "underline" }}>Sign up</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (email, password) => {
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         // Store user info (use context, Redux, or localStorage)
//         localStorage.setItem("user", JSON.stringify(data.user));
//         alert("Login successful!");
//         navigate("/profile"); // Navigate to the profile page
//       } else {
//         alert(data.message || "Login failed");
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//       alert("An error occurred during login.");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleLogin(email, password);
//   };

//   return (
//     <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#111", color: "#fff" }}>
//       <form onSubmit={handleSubmit} style={{ padding: "20px", border: "1px solid #555", borderRadius: "8px", backgroundColor: "#222" }}>
//         <h2 style={{ textAlign: "center" }}>Login</h2>
//         <div style={{ marginBottom: "10px" }}>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{ width: "100%", padding: "8px", margin: "5px 0", borderRadius: "4px" }}
//             required
//           />
//         </div>
//         <div style={{ marginBottom: "10px" }}>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ width: "100%", padding: "8px", margin: "5px 0", borderRadius: "4px" }}
//             required
//           />
//         </div>
//         <button type="submit" style={{ width: "100%", padding: "10px", borderRadius: "4px", backgroundColor: "#2575fc", color: "#fff" }}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Login successful!");
        navigate("/profile"); // Navigate to the profile page
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred during login.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111",
        color: "#fff",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "20px",
          border: "1px solid #555",
          borderRadius: "8px",
          backgroundColor: "#222",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px", margin: "5px 0", borderRadius: "4px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "10px", position: "relative" }}>
          <label>Password:</label>
          <input
            type={showPassword ? "text" : "password"} // Toggle password visibility
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              margin: "5px 0",
              borderRadius: "4px",
            }}
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)} // Toggle show/hide password
            style={{
              position: "absolute",
              right: "10px",
              top: "38px",
              cursor: "pointer",
              color: "#888",
            }}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            backgroundColor: "#2575fc",
            color: "#fff",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
