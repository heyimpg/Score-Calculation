// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCSI6wvZiguusCv-QvHibVlRgzAtxl7WXE",
authDomain: "score-calculation-98d41.firebaseapp.com",
projectId: "score-calculation-98d41",
storageBucket: "score-calculation-98d41.appspot.com",
messagingSenderId: "866522457455",
appId: "1:866522457455:web:10b52cb471939e33ce749a",
measurementId: "G-BV26H9B3KP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);