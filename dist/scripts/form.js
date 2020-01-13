const firebaseConfig = {
    apiKey: "AIzaSyBAtpRgdVJPAsgf0CiGyP8rdg7JHKQ8wEE",
    authDomain: "contactform-42ef7.firebaseapp.com",
    databaseURL: "https://contactform-42ef7.firebaseio.com",
    projectId: "contactform-42ef7",
    storageBucket: "contactform-42ef7.appspot.com",
    messagingSenderId: "105779101985",
    appId: "1:105779101985:web:409ba0619479e0fbbafe60",
    measurementId: "G-85K3NV7KSK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Reference messages collection
  const messagesRef = firebase.database().ref('messages');


//submit form
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    //Get Values

    const name = getInputVal('name');
    const subject = getInputVal('subject');
    const email = getInputVal('email');
    const message = getInputVal('message');
    //save message
    saveMessage(name,subject,email,message);

    //show alert
    document.querySelector('.alert').style.display ='block';

    //hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display ='none';
    }, 6000);
    
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
    
}

// save massage to firbase

function saveMessage(name,subject,email,message) {
    const newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        subject: subject,
        email: email,
        message: message
    });
}