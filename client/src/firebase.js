import firebase from "firebase/app";
import "firebase/auth";
require("dotenv").config();

const app = firebase.initializeApp({
  apiKey: "AIzaSyDilS6PzUoo224poCIgv05OOKYIshQq1AI",
  authDomain: "test-dashboard-a4764.firebaseapp.com",
  projectId: "test-dashboard-a4764",
  storageBucket: "test-dashboard-a4764.appspot.com",
  messagingSenderId: "493879712195",
  appId: "1:493879712195:web:152e9d3df4e962fff10576",
  measurementId: "G-FXD6160NRP",
});

export const auth = app.auth();
export default app;
