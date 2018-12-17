// Initialize Firebase
//The project has been deleted in firebase
//fill in your own config info 
var config = {
    apiKey: "AIzaSyDLHMXDCA1s-mX8Q-_xLRu2jeNG7YnLtSk",
    authDomain: "light-93105.firebaseapp.com",
    databaseURL: "https://light-93105.firebaseio.com",
    projectId: "light-93105",
    storageBucket: "light-93105.appspot.com",
    messagingSenderId: "443156616701"
  };
firebase.initializeApp(config);

$(document).ready(function(){
  var database = firebase.database();
  var light;

  database.ref().on("value", function(snap){
    light = snap.val().light;
    if(light == 1){
      $(".lightStatus").text("전등의 상태 : 켜짐");
    } else {
      $(".lightStatus").text("전등의 상태 : 꺼짐");
    }
  });

  $(".lightButton").click(function(){
    var firebaseRef = firebase.database().ref().child("light");

    if(light == 1){
      firebaseRef.set(0);
      light = 0;
    } else {
      firebaseRef.set(1);
      light = 1;
    }
  });
});
