import cv2
import mediapipe as mp

class GestureRecognition:
    def __init__(self):
        self.cap = None
        self.hands = mp.solutions.hands.Hands()
        self.mp_draw = mp.solutions.drawing_utils

    def start(self):
        self.cap = cv2.VideoCapture(0)

    def stop(self):
        if self.cap:
            self.cap.release()
            self.cap = None

    def get_frame(self):
        if not self.cap:
            return None
        
        ret, frame = self.cap.read()
        if not ret:
            return None

        frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = self.hands.process(frame_rgb)

        if results.multi_hand_landmarks:
            for hand_landmarks in results.multi_hand_landmarks:
                self.mp_draw.draw_landmarks(frame, hand_landmarks, mp.solutions.hands.HAND_CONNECTIONS)
        
        return frame
