const firebaseConfig = {
    apiKey: "AIzaSyBXPNQuxkGKdLnkN7vZEWM5TkQwhq_VV54",
    authDomain: "health-care-management-b8.firebaseapp.com",
    projectId: "health-care-management-b8",
    storageBucket: "health-care-management-b8.appspot.com",
    messagingSenderId: "385742303212",
    appId: "1:385742303212:web:9fa61bb0df9dca805a1ac9",
    measurementId: "G-6G8QW431LX"
  };

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        window.location.href = 'index.html';
    }
});

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = 'index.html';
    }).catch((error) => {
        alert('Error: ' + error.message);
    });
}
