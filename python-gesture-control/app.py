# from flask import Flask, jsonify, request
# from flask_cors import CORS
# import threading
# import cv2
# import mediapipe as mp
# import pyautogui as p

# # Initialize Flask app
# app = Flask(__name__)
# CORS(app)  # Allow requests from other origins

# is_recognizing = False  # Global flag for gesture recognition

# mp_hands = mp.solutions.hands
# mp_draw = mp.solutions.drawing_utils

# def count_fingers(hand_landmarks):
#     tip_ids = [4, 8, 12, 16, 20]
#     fingers = []

#     if hand_landmarks.landmark[tip_ids[0]].x < hand_landmarks.landmark[tip_ids[0] - 1].x:
#         fingers.append(1)
#     else:
#         fingers.append(0)

#     for i in range(1, 5):
#         if hand_landmarks.landmark[tip_ids[i]].y < hand_landmarks.landmark[tip_ids[i] - 2].y:
#             fingers.append(1)
#         else:
#             fingers.append(0)

#     return fingers.count(1)

# def gesture_recognition():
#     global is_recognizing
#     cap = cv2.VideoCapture(0)

#     with mp_hands.Hands(min_detection_confidence=0.7, min_tracking_confidence=0.7) as hands:
#         while is_recognizing:
#             success, frame = cap.read()
#             if not success:
#                 print("Camera error!")
#                 break

#             frame = cv2.flip(frame, 1)
#             frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
#             results = hands.process(frame_rgb)

#             if results.multi_hand_landmarks:
#                 for hand_landmarks in results.multi_hand_landmarks:
#                     num_fingers = count_fingers(hand_landmarks)
#                     handle_gesture_action(num_fingers)

#         cap.release()

# def handle_gesture_action(num_fingers):
#     if num_fingers == 0:
#         print("Gesture: STOP")
#         p.press("space")
#     elif num_fingers == 1:
#         print("Gesture: PLAY/PAUSE")
#         p.press("space")
#     elif num_fingers == 2:
#         print("Gesture: VOLUME UP")
#         p.press("volumeup")
#     elif num_fingers == 3:
#         print("Gesture: VOLUME DOWN")
#         p.press("volumedown")
#     elif num_fingers == 4:
#         print("Gesture: FORWARD")
#         p.press("right")
#     elif num_fingers == 5:
#         print("Gesture: BACKWARD")
#         p.press("left")

# @app.route('/start', methods=['POST'])
# def start_recognition():
#     global is_recognizing
#     if not is_recognizing:
#         is_recognizing = True
#         thread = threading.Thread(target=gesture_recognition)
#         thread.start()
#         return jsonify({"status": "Gesture recognition started"})
#     return jsonify({"status": "Already running"})

# @app.route('/stop', methods=['POST'])
# def stop_recognition():
#     global is_recognizing
#     if is_recognizing:
#         is_recognizing = False
#         return jsonify({"status": "Gesture recognition stopped"})
#     return jsonify({"status": "Already stopped"})

# if __name__ == '__main__':
#     app.run(debug=True)




# from flask import Flask, Response, jsonify, request
# from flask_cors import CORS
# import cv2
# import mediapipe as mp

# app = Flask(__name__)
# CORS(app)

# # MediaPipe and OpenCV setup
# mp_hands = mp.solutions.hands
# mp_draw = mp.solutions.drawing_utils
# cap = None
# gesture = "No gesture detected"
# is_running = False

# def count_fingers(hand_landmarks):
#     tip_ids = [4, 8, 12, 16, 20]
#     fingers = []

#     # Thumb
#     if hand_landmarks.landmark[tip_ids[0]].x < hand_landmarks.landmark[tip_ids[0] - 1].x:
#         fingers.append(1)
#     else:
#         fingers.append(0)

#     # Other fingers
#     for i in range(1, 5):
#         if hand_landmarks.landmark[tip_ids[i]].y < hand_landmarks.landmark[tip_ids[i] - 2].y:
#             fingers.append(1)
#         else:
#             fingers.append(0)

#     return fingers.count(1)

# @app.route('/start', methods=['POST'])
# def start_recognition():
#     global cap, is_running
#     if cap is None:
#         cap = cv2.VideoCapture(0)
#         if not cap.isOpened():
#             return jsonify({"status": "Error: Camera not accessible"}), 500
#         is_running = True
#     return jsonify({"status": "Gesture recognition started"})

# @app.route('/stop', methods=['POST'])
# def stop_recognition():
#     global cap, is_running
#     if cap is not None:
#         cap.release()
#         cap = None
#         is_running = False
#     return jsonify({"status": "Gesture recognition stopped"})

# @app.route('/gesture', methods=['GET'])
# def get_gesture():
#     global cap, gesture, is_running
#     if not is_running or cap is None:
#         return jsonify({"gesture": "Gesture recognition is not running"})

#     with mp_hands.Hands(min_detection_confidence=0.7, min_tracking_confidence=0.7) as hands:
#         success, frame = cap.read()
#         if not success:
#             return jsonify({"gesture": "Camera feed not accessible"}), 500

#         frame = cv2.flip(frame, 1)
#         frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
#         results = hands.process(frame_rgb)

#         if results.multi_hand_landmarks:
#             for hand_landmarks in results.multi_hand_landmarks:
#                 num_fingers = count_fingers(hand_landmarks)

#                 # Determine gesture
#                 if num_fingers == 0:
#                     gesture = "STOP"
#                 elif num_fingers == 1:
#                     gesture = "PLAY/PAUSE"
#                 elif num_fingers == 2:
#                     gesture = "VOLUME UP"
#                 elif num_fingers == 3:
#                     gesture = "VOLUME DOWN"
#                 elif num_fingers == 4:
#                     gesture = "FORWARD"
#                 elif num_fingers == 5:
#                     gesture = "BACKWARD"

#         return jsonify({"gesture": gesture})

# @app.route('/video_feed')
# def video_feed():
#     global cap
#     if cap is None:
#         cap = cv2.VideoCapture(0)
#         if not cap.isOpened():
#             return "Camera not accessible", 500

#     def generate():
#         while cap.isOpened():
#             success, frame = cap.read()
#             if not success:
#                 break
#             _, buffer = cv2.imencode('.jpg', frame)
#             frame = buffer.tobytes()
#             yield (b'--frame\r\n'
#                    b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

#     return Response(generate(), mimetype='multipart/x-mixed-replace; boundary=frame')

# if __name__ == '__main__':
#     app.run(debug=True, port=5000)






from flask import Flask, Response, jsonify, request
from flask_cors import CORS
import cv2
import mediapipe as mp
import pyautogui as p

app = Flask(__name__)
CORS(app)

# MediaPipe and OpenCV setup
mp_hands = mp.solutions.hands
mp_draw = mp.solutions.drawing_utils
cap = None
gesture = "No gesture detected"
is_running = False

def count_fingers(hand_landmarks):
    tip_ids = [4, 8, 12, 16, 20]
    fingers = []

    # Thumb
    if hand_landmarks.landmark[tip_ids[0]].x < hand_landmarks.landmark[tip_ids[0] - 1].x:
        fingers.append(1)
    else:
        fingers.append(0)

    # Other fingers
    for i in range(1, 5):
        if hand_landmarks.landmark[tip_ids[i]].y < hand_landmarks.landmark[tip_ids[i] - 2].y:
            fingers.append(1)
        else:
            fingers.append(0)

    return fingers.count(1)

def perform_action(gesture):
    """Perform system-level actions based on the detected gesture."""
    print(f"Performing action for gesture: {gesture}")
    try:
        if gesture == "STOP":
            p.press("space")  # Play/Pause
        elif gesture == "PLAY/PAUSE":
            p.press("space")  # Play/Pause
        elif gesture == "VOLUME UP":
            p.press("volumeup")  # Increase volume
        elif gesture == "VOLUME DOWN":
            p.press("volumedown")  # Decrease volume
        elif gesture == "FORWARD":
            p.press("right")  # Skip forward
        elif gesture == "BACKWARD":
            p.press("left")  # Skip backward
    except Exception as e:
        print(f"Error performing action: {e}")

@app.route('/start', methods=['POST'])
def start_recognition():
    global cap, is_running
    if cap is None:
        cap = cv2.VideoCapture(0)
        if not cap.isOpened():
            return jsonify({"status": "Error: Camera not accessible"}), 500
        is_running = True
    return jsonify({"status": "Gesture recognition started"})

@app.route('/stop', methods=['POST'])
def stop_recognition():
    global cap, is_running
    if cap is not None:
        cap.release()
        cap = None
        is_running = False
    return jsonify({"status": "Gesture recognition stopped"})

@app.route('/gesture', methods=['GET'])
def get_gesture():
    global cap, gesture, is_running
    if not is_running or cap is None:
        return jsonify({"gesture": "Gesture recognition is not running"})

    with mp_hands.Hands(min_detection_confidence=0.7, min_tracking_confidence=0.7) as hands:
        success, frame = cap.read()
        if not success:
            return jsonify({"gesture": "Camera feed not accessible"}), 500

        frame = cv2.flip(frame, 1)
        frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = hands.process(frame_rgb)

        if results.multi_hand_landmarks:
            for hand_landmarks in results.multi_hand_landmarks:
                mp_draw.draw_landmarks(frame, hand_landmarks, mp_hands.HAND_CONNECTIONS)
                num_fingers = count_fingers(hand_landmarks)

                # Determine gesture
                if num_fingers == 0:
                    gesture = "STOP"
                elif num_fingers == 1:
                    gesture = "PLAY/PAUSE"
                elif num_fingers == 2:
                    gesture = "VOLUME UP"
                elif num_fingers == 3:
                    gesture = "VOLUME DOWN"
                elif num_fingers == 4:
                    gesture = "FORWARD"
                elif num_fingers == 5:
                    gesture = "BACKWARD"

                # Perform the action
                perform_action(gesture)

        print(f"Detected Gesture: {gesture}")
        return jsonify({"gesture": gesture})

@app.route('/video_feed')
def video_feed():
    global cap
    if cap is None:
        cap = cv2.VideoCapture(0)
        if not cap.isOpened():
            return "Camera not accessible", 500

    def generate():
        while cap.isOpened():
            success, frame = cap.read()
            if not success:
                break
            _, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

    return Response(generate(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
