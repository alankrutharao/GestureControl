import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const MainPage = () => {
  const navigate = useNavigate();
  const aboutRef = useRef(null);

  const handleAboutClick = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000", color: "#fff", fontFamily: "Arial, sans-serif" }}>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "linear-gradient(to right, #6a11cb, #2575fc)",
          color: "#fff",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ margin: "0", fontSize: "24px" }}>GestureSpeak</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <button
            onClick={() => navigate("/login")}
            style={{
              cursor: "pointer",
              border: "none",
              background: "none",
              color: "#fff",
              fontSize: "16px",
            }}
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            style={{
              cursor: "pointer",
              border: "none",
              background: "none",
              color: "#fff",
              fontSize: "16px",
            }}
          >
            Signup
          </button>
          <button
            onClick={handleAboutClick}
            style={{
              cursor: "pointer",
              border: "none",
              background: "none",
              color: "#fff",
              fontSize: "16px",
            }}
          >
            About
          </button>
          <button
            onClick={() => navigate("/Profile")}
            style={{
              cursor: "pointer",
              border: "none",
              background: "none",
              color: "#fff",
              fontSize: "16px",
            }}
          >
            <span role="img" aria-label="profile">
              👤
            </span>
            Profile
          </button>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <div
        style={{
          height: "400px",
          backgroundImage: "url('/1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: "20px",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          fontSize: "32px",
          fontWeight: "bold",
        }}
      >
        Experience the Future of Gesture Control
      </div>

      {/* Main Content */}
      <div style={{ textAlign: "center", margin: "40px 20px" }}>
        <h1>Welcome to GestureSpeak</h1>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          GestureSpeak is a cutting-edge platform that transforms the way we interact with technology. By harnessing
          the power of advanced gesture recognition, our application enables intuitive, touch-free control for devices
          and applications. Whether you're navigating a smart home, gaming, or accessing educational tools, GestureSpeak
          offers seamless, innovative solutions for a modern, connected world.
        </p>
        <h1>Why Choose GestureSpeak?</h1>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          <b>Gesture-Based Navigation:</b> Forget keyboards and touchscreens; control everything with simple hand
          movements. <br />
          <b>Smart Integration:</b> Works with a range of devices for a unified user experience. <br />
          <b>User-Centric Design:</b> Easy-to-use, responsive, and accessible for everyone.
        </p>
        <h1>Key Features</h1>
        <ul style={{ textAlign: "left", margin: "0 auto", maxWidth: "600px", lineHeight: "1.8" }}>
          <li>Effortlessly interact with devices and applications using intuitive hand gestures.</li>
          <li>Login or sign up to personalize your experience and manage your preferences securely.</li>
          <li>Keep your settings and preferences tailored to your needs with an easy-to-navigate profile system.</li>
          <li>Learn about the vision and technology behind GestureSpeak in our dedicated "About" section.</li>
          <li>Follow us on social media for updates, news, and insights about GestureSpeak.</li>
        </ul>
        <h1>Our Vision</h1>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          At GestureSpeak, we envision a world where technology adapts to human behavior, not the other way around. By
          pioneering gesture recognition, we aim to empower individuals and redefine the way we interact with our
          digital environments.
        </p>
      </div>

      {/* About Section */}
      <div
        ref={aboutRef}
        style={{
          marginTop: "50px",
          padding: "30px",
          textAlign: "center",
          backgroundColor: "#111",
          border: "1px solid #555",
          borderRadius: "12px",
          color: "#fff",
        }}
      >
        <h2>About GestureSpeak</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
          GestureSpeak is an innovative platform that enables gesture control for various applications. Our goal is to
          create intuitive and seamless interactions for users through advanced gesture recognition technology.
        </p>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "50px",
          padding: "20px",
          textAlign: "center",
          background: "linear-gradient(to right)",
          color: "white",
        }}
      >
        <h3>Get Social With Us</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
            marginTop: "10px",
          }}
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", fontSize: "24px", transition: "transform 0.2s" }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", fontSize: "24px", transition: "transform 0.2s" }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", fontSize: "24px", transition: "transform 0.2s" }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", fontSize: "24px", transition: "transform 0.2s" }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <FaLinkedinIn />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
