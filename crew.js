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


function Function1(){
    document.getElementById("rank").innerHTML = "MISSION SPECIALIST";
    document.getElementById("name").innerHTML = "MARK SHUTTLEWORTH";
    document.getElementById("smbtn1").style.backgroundColor = "White";
    document.getElementById("smbtn").style.backgroundColor = "grey";
    document.getElementById("smbtn2").style.backgroundColor = "grey";
    document.getElementById("smbtn3").style.backgroundColor = "grey";
    document.getElementById("speech").innerHTML = "  Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    document.getElementById("creww").src = "starter-code/assets/crew/image-mark-shuttleworth (2).webp" ;
    document.getElementById("creww").style.margin = "auto";
}


function Function2(){
    document.getElementById("rank").innerHTML = "PILOT";
    document.getElementById("name").innerHTML = "VICTOR GLOVER";
    document.getElementById("smbtn2").style.backgroundColor = "White";
    document.getElementById("smbtn").style.backgroundColor = "grey";
    document.getElementById("smbtn1").style.backgroundColor = "grey";
    document.getElementById("smbtn3").style.backgroundColor = "grey";
    document.getElementById("speech").innerHTML = "  Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
    document.getElementById("creww").src = "starter-code/assets/crew/image-victor-glover (2).webp" ;
    // document.getElementById("spech").style.width = "500px";
    document.getElementById("creww").style.margin = "auto";
}

function Function3(){
    document.getElementById("rank").innerHTML = "FLIGHT ENGINEER";
    document.getElementById("name").innerHTML = "ANOUSHEN ANSARI";
    document.getElementById("smbtn3").style.backgroundColor = "White";
    document.getElementById("smbtn").style.backgroundColor = "grey";
    document.getElementById("smbtn1").style.backgroundColor = "grey";
    document.getElementById("smbtn2").style.backgroundColor = "grey";
    document.getElementById("speech").innerHTML = 
    "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
    document.getElementById("creww").src = "starter-code/assets/crew/image-anousheh-ansari (2).webp" ;
    document.getElementById("creww").style.margin = "auto";
}

function Function0(){
    document.getElementById("rank").innerHTML = "COMMANDER";
    document.getElementById("name").innerHTML = "DOUGLAS HURLEY";
    document.getElementById("smbtn").style.backgroundColor = "White";
    document.getElementById("smbtn2").style.backgroundColor = "grey";
    document.getElementById("smbtn1").style.backgroundColor = "grey";
    document.getElementById("smbtn3").style.backgroundColor = "grey";
    document.getElementById("speech").innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    document.getElementById("creww").src = "starter-code/assets/crew/image-douglas-hurley.webp" ;
    document.getElementById("creww").style.marginLeft = "70px";
}
