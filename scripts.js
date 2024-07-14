 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBXPNQuxkGKdLnkN7vZEWM5TkQwhq_VV54",
   authDomain: "health-care-management-b8.firebaseapp.com",
   databaseURL: "https://health-care-management-b8-default-rtdb.firebaseio.com",
   projectId: "health-care-management-b8",
   storageBucket: "health-care-management-b8.appspot.com",
   messagingSenderId: "385742303212",
   appId: "1:385742303212:web:9fa61bb0df9dca805a1ac9",
   measurementId: "G-6G8QW431LX"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function showCreateAccount() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('create-account-container').style.display = 'block';
}

function showLogin() {
    document.getElementById('create-account-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('login-error');

    if (!email || !password) {
        errorElement.textContent = 'Please enter both email and password.';
        return;
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.href = 'home.html';
        })
        .catch((error) => {
            errorElement.textContent = 'Error: ' + error.message;
        });
}

function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const errorElement = document.getElementById('login-error');

    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            db.collection("users").doc(user.uid).set({
                email: user.email,
                name: user.displayName
            });
            window.location.href = 'home.html';
        })
        .catch((error) => {
            errorElement.textContent = 'Error: ' + error.message;
        });
}

function createAccount() {
    const email = document.getElementById('create-email').value;
    const password = document.getElementById('create-password').value;
    const name = document.getElementById('create-name').value;
    const errorElement = document.getElementById('create-error');

    if (!email || !password || !name) {
        errorElement.textContent = 'Please fill out all fields.';
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            db.collection("users").doc(user.uid).set({
                email: user.email,
                name: name
            });
            window.location.href = 'home.html';
        })
        .catch((error) => {
            errorElement.textContent = 'Error: ' + error.message;
        });
}
