const firebaseConfig = {
    apiKey: "",
    authDomain: "health-care-management-b8.firebaseapp.com",
    projectId: "health-care-management-b8",
    storageBucket: "health-care-management-b8.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
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
