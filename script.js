var firebaseConfig = {
	    apiKey: "AIzaSyCQb69lVpLgi62Erj1BK7l8fvpc03PDY6s",
	    authDomain: "cfgproject-5a81c.firebaseapp.com",
	    databaseURL: "https://cfgproject-5a81c.firebaseio.com",
	    projectId: "cfgproject-5a81c",
	    storageBucket: "",
	    messagingSenderId: "332561097117",
	    appId: "1:332561097117:web:2fe012c5193d867c"
	  };
firebase.initializeApp(firebaseConfig);


var database = firebase.database();
console.log(database);
console.log("connectect to db");


var questionref = database.ref();
// questionref.once("value").then(function(snapshot)
// {
// 	var data = (snapshot.val());
// 	for(var key in data)
// 	{
// 		console.log(key +"***" + data[key]);
// 	}


// })


