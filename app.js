'use strict';

console.log("Peak a Boo");
alert("Welcome Home!");

const username = prompt("What can I call you?");
console.log(username);

document.write("Hello " + username + "! So glad you're here!"); 

if (username == "Kassie"){
    document.write(" You're AMAZING Teach!!");
} else if(username == "Joey"){
    document.write("Couldn't do it without you!");
}else if(username == "Ben"){
    document.write("Couldn't do it without you!");
} else if(username == "Brandon"){
    document.write("Couldn't do it without you!");
}
var color = prompt("What color background would you like?");
document.bgColor = color;