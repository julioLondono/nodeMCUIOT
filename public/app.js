(function() {
    // Set the configuration for your app
    var config = {
        apiKey: "AIzaSyDGPhGJBk2GP-FbJ8WW7Mcae8vAAcMeUkM",
        authDomain: "iotdemo-ae02f.firebaseapp.com",
        databaseURL: "https://iotdemo-ae02f.firebaseio.com",
        projectId: "iotdemo-ae02f",
        storageBucket: "iotdemo-ae02f.appspot.com",
        messagingSenderId: "179280005388",
        appId: "1:179280005388:web:d6d60eed07059f87786129"
    };

    firebase.initializeApp(config);

    // Get a reference to the database service
    var database = firebase.database();

    // Get element from the DOM
    const tempElement = document.getElementById('temperature');
    const humElement = document.getElementById('humidity');

    // Create temperature database reference
    const tempRef = database.ref('dht11').child('temperature');

    // Create humidity database reference
    const humRef = database.ref('dht11').child('humidity');

    // Sync objects changes
    tempRef.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("temperature: " + childData);
            tempElement.innerText = childData;
        });
    });
    humRef.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("humidity: " + childData);
            humElement.innerText = childData;
        });
    });

}());
