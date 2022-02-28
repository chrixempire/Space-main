const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu")

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".navlink").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}));

function MyFunction(){
    document.getElementById("two").innerHTML = "SPACEPORT";
    document.getElementById("Three").innerHTML = 
    "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    document.getElementById("imag").src = "starter-code/assets/technology/image-spaceport-portrait (2).jpg" ;
    document.getElementById("buttn2").style.backgroundColor = "white";
    document.getElementById("buttn2").style.color= "black";
    document.getElementById("buttn1").style.backgroundColor = "transparent";
    document.getElementById("buttn1").style.color = "white";
    document.getElementById("buttn3").style.backgroundColor = "transparent";
    document.getElementById("buttn3").style.color = "white";
}

function MyFunction1(){
    document.getElementById("two").innerHTML = "SPACE CAPSULE";
    document.getElementById("Three").innerHTML = 
    "  A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where  you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    document.getElementById("imag").src = "starter-code/assets/technology/image-space-capsule-portrait (2).jpg" ;
    document.getElementById("buttn3").style.backgroundColor = "white";
    document.getElementById("buttn3").style.color= "black";
    document.getElementById("buttn1").style.backgroundColor = "transparent";
    document.getElementById("buttn1").style.color = "white";
    document.getElementById("buttn2").style.backgroundColor = "transparent";
    document.getElementById("buttn2").style.color = "white";
    document.getElementById("imag").style = "repeat" ;
}

function MyFunction2(){
    document.getElementById("two").innerHTML = "LAUNCH VEHICLE";
    document.getElementById("Three").innerHTML = 
    " A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!  ";
    document.getElementById("imag").src = "starter-code/assets/technology/image-launch-vehicle-portrait (2).jpg" ;
    document.getElementById("buttn1").style.backgroundColor = "white";
    document.getElementById("buttn1").style.color= "black";
    document.getElementById("buttn3").style.backgroundColor = "transparent";
    document.getElementById("buttn3").style.color = "white";
    document.getElementById("buttn2").style.backgroundColor = "transparent";
    document.getElementById("buttn2").style.color = "white";
}