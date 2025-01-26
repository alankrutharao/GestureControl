import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Signup Successful!");
      } else {
        alert(data.message || "Signup failed.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during signup.");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          padding: "30px",
          borderRadius: "10px",
          backgroundColor: "#222",
          boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#fff",
            marginBottom: "20px",
            fontSize: "24px",
          }}
        >
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #444",
                borderRadius: "5px",
                fontSize: "16px",
                backgroundColor: "#333",
                color: "#fff",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #444",
                borderRadius: "5px",
                fontSize: "16px",
                backgroundColor: "#333",
                color: "#fff",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px", position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"} // Toggle password visibility
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #444",
                borderRadius: "5px",
                fontSize: "16px",
                backgroundColor: "#333",
                color: "#fff",
              }}
            />
            <span
              onClick={() => setShowPassword(!showPassword)} // Toggle show/hide password
              style={{
                position: "absolute",
                right: "10px",
                top: "12px",
                cursor: "pointer",
                color: "#aaa",
              }}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#6a11cb",
              color: "#fff",
              fontSize: "16px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </form>
        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            fontSize: "14px",
            color: "#aaa",
          }}
        >
          Already have an account?{" "}
          <span
            onClick={() => window.location.replace("/login")}
            style={{
              color: "#6a11cb",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
