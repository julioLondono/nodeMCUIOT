(function() {
    // Set the configuration for your app
    var firebaseConfig = {
        apiKey: "xxxx",
        authDomain: "xxxxrebaseapp.com",
        databaseURL: "https:/xxx
        storageBucket: "xxxspot.com",
        messagingSenderId: "1792xxxxxxx388",
        appId: "1:1792800xxxx9f87786129",
        measurementId: "xxxxxxxx9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Get a reference to the database service
    var database = firebase.database();

    // Get element from the DOM
    const tempElement = document.getElementById('temperature');
    const humElement = document.getElementById('humidity');

    // Create temperature database reference
    const tempRef = database.ref('DHT11').child('Temperature');

    // Create humidity database reference
    const humRef = database.ref('DHT11').child('Humidity');

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
