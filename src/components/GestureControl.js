// import React, { useState } from "react";
// import axios from "axios";

// const GestureControl = () => {
//   const [viewCamera, setViewCamera] = useState(false);
//   const [videoStream, setVideoStream] = useState(null);

//   const startRecognition = async () => {
//     try {
//       const response = await axios.post("http://127.0.0.1:5000/start");
//       alert(response.data.status);
//     } catch (error) {
//       console.error("Error starting gesture recognition:", error);
//     }
//   };

//   const stopRecognition = async () => {
//     try {
//       const response = await axios.post("http://127.0.0.1:5000/stop");
//       alert(response.data.status);
//     } catch (error) {
//       console.error("Error stopping gesture recognition:", error);
//     }
//     // Stop the video stream if active
//     if (videoStream) {
//       videoStream.getTracks().forEach((track) => track.stop());
//       setVideoStream(null);
//     }
//   };

//   const handleCameraToggle = async (e) => {
//     setViewCamera(e.target.checked);
//     if (e.target.checked) {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         setVideoStream(stream);
//         const videoElement = document.getElementById("cameraFeed");
//         if (videoElement) {
//           videoElement.srcObject = stream;
//           videoElement.play();
//         }
//       } catch (error) {
//         console.error("Error accessing camera:", error);
//         alert("Unable to access camera.");
//         setViewCamera(false);
//       }
//     } else {
//       // Stop the video stream when camera view is disabled
//       if (videoStream) {
//         videoStream.getTracks().forEach((track) => track.stop());
//         setVideoStream(null);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Gesture Control</h1>
//       <label>
//         <input
//           type="checkbox"
//           checked={viewCamera}
//           onChange={handleCameraToggle}
//         />
//         View Camera
//       </label>
//       {viewCamera && <video id="cameraFeed" style={{ width: "100%", height: "auto", marginTop: "10px" }} />}
//       <div style={{ marginTop: "20px" }}>
//         <button onClick={startRecognition}>Start Recognition</button>
//         <button onClick={stopRecognition}>Stop Recognition</button>
//       </div>
//     </div>
//   );
// };

// export default GestureControl;























// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const GestureControl = () => {
//   const [currentGesture, setCurrentGesture] = useState("No gesture detected");

//   const startRecognition = async () => {
//     try {
//       const response = await axios.post("http://127.0.0.1:5000/start");
//       alert(response.data.status);
//       setCurrentGesture("Waiting for gesture...");
//     } catch (error) {
//       console.error("Error starting gesture recognition:", error);
//     }
//   };

//   const stopRecognition = async () => {
//     try {
//       const response = await axios.post("http://127.0.0.1:5000/stop");
//       alert(response.data.status);
//       setCurrentGesture("Gesture recognition stopped.");
//     } catch (error) {
//       console.error("Error stopping gesture recognition:", error);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:5000/gesture");
//         setCurrentGesture(response.data.gesture || "No gesture detected");
//       } catch (error) {
//         console.error("Error fetching gesture:", error);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <h1>Gesture Control</h1>
//       <img
//         src="http://127.0.0.1:5000/video_feed"
//         alt="Camera Feed"
//         style={{ width: "100%", height: "auto", marginTop: "10px" }}
//       />
//       <div style={{ marginTop: "20px" }}>
//         <button onClick={startRecognition}>Start Recognition</button>
//         <button onClick={stopRecognition}>Stop Recognition</button>
//       </div>
//       <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
//         Current Gesture: {currentGesture}
//       </div>
//     </div>
//   );
// };

// export default GestureControl;








// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const GestureControl = () => {
//   const [currentGesture, setCurrentGesture] = useState("No gesture detected");

//   const startRecognition = async () => {
//     try {
//       const response = await axios.post("http://127.0.0.1:5000/start");
//       alert(response.data.status);
//       setCurrentGesture("Waiting for gesture...");
//     } catch (error) {
//       console.error("Error starting gesture recognition:", error);
//     }
//   };

//   const stopRecognition = async () => {
//     try {
//       const response = await axios.post("http://127.0.0.1:5000/stop");
//       alert(response.data.status);
//       setCurrentGesture("Gesture recognition stopped.");
//     } catch (error) {
//       console.error("Error stopping gesture recognition:", error);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:5000/gesture");
//         setCurrentGesture(response.data.gesture || "No gesture detected");
//       } catch (error) {
//         console.error("Error fetching gesture:", error);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <h1>Gesture Control</h1>
//       <img
//         src="http://127.0.0.1:5000/video_feed"
//         alt="Camera Feed"
//         style={{
//           width: "300px", // Set a smaller width
//           height: "auto", // Maintain aspect ratio
//           marginTop: "10px",
//         }}
//       />
//       <div style={{ marginTop: "20px" }}>
//         <button onClick={startRecognition}>Start Recognition</button>
//         <button onClick={stopRecognition}>Stop Recognition</button>
//       </div>
//       <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
//         Current Gesture: {currentGesture}
//       </div>
//     </div>
//   );
// };

// export default GestureControl;


import React, { useState, useEffect } from "react";
import axios from "axios";

const GestureControl = () => {
  const [currentGesture, setCurrentGesture] = useState("No gesture detected");

  const startRecognition = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/start");
      alert(response.data.status);
      setCurrentGesture("Waiting for gesture...");
    } catch (error) {
      console.error("Error starting gesture recognition:", error);
    }
  };

  const stopRecognition = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/stop");
      alert(response.data.status);
      setCurrentGesture("Gesture recognition stopped.");
    } catch (error) {
      console.error("Error stopping gesture recognition:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/gesture");
        setCurrentGesture(response.data.gesture || "No gesture detected");
      } catch (error) {
        console.error("Error fetching gesture:", error);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Gesture Control</h1>
      <img
        src="http://127.0.0.1:5000/video_feed"
        alt="Camera Feed"
        style={{
          width: "500px",  // Increased width
          height: "auto",  // Maintain aspect ratio
          marginTop: "20px",
          borderRadius: "8px",  // Optional: Add rounded corners to the image
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",  // Optional: Add shadow for aesthetics
        }}
      />
      <div style={{ marginTop: "20px" }}>
        <button onClick={startRecognition}>Start Recognition</button>
        <button onClick={stopRecognition}>Stop Recognition</button>
      </div>
      <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
        Current Gesture: {currentGesture}
      </div>
    </div>
  );
};

export default GestureControl;
