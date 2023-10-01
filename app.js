'use strict';


function getName(){
 const userName = prompt("What can I call you?");
 console.log (userName);
 return userName;
}

function greetUser(){
 document.write("Hello " + theirName + "! So glad you're here!"); 
}

function specialGreet(userName){
    console.log("userName: " + userName);
    if (userName == "" || userName == null){
        userName = prompt("Please??");
    }

    if (userName == "" || userName == null){
    userName = prompt("Pretty Please??"); 
    }
    if (userName == "Kassie"){
    document.write(" You're AMAZING Teach!!");
    } else if(userName == "Joey"){
    document.write(" Couldn't do it without you!");
    } else if(userName == "Ben"){
    document.write(" Couldn't do it without you!");
    } else if(userName == "Brandon"){
    document.write(" Couldn't do it without you!");
    } else {
    document.write(" The world is a better place with you in it!");
    }
}
function colorPicker(){
    var color = prompt("What color background would you like?");
    document.bgColor = color;
}