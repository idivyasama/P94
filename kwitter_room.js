const firebaseConfig = {
    apiKey: "AIzaSyBDrcgJH8m21ppaZ_DYIJCI4qCV-c3Xx7A",
    authDomain: "class-94-60bd2.firebaseapp.com",
    databaseURL: "https://class-94-60bd2-default-rtdb.firebaseio.com",
    projectId: "class-94-60bd2",
    storageBucket: "class-94-60bd2.appspot.com",
    messagingSenderId: "845475922359",
    appId: "1:845475922359:web:b00f644274fca587a82832"
  };
  
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -" + Room_names);
    row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+= row;
    //End code
    });});}
getData();


function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name" 
});
localStorage.setItem("room_name",room_name);

window.location="kwitter_page.html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
}