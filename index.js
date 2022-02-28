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

























    function myFunction0(){
        document.getElementById("demo").innerHTML =  "MOON";
        document.getElementById("image").src = "starter-code/assets/destination/image-moon (2).webp" ;
        document.getElementById("p-moon").innerHTML =  "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
        document.getElementById("h-flex").innerHTML =  "384,400 KM";
        document.getElementById("h-flex1").innerHTML =  "3 DAYS";
        document.getElementById("bttn1").style.borderBottomWidth = "3px"
        document.getElementById("bttn1").style.borderBottomStyle = "solid"
        document.getElementById("bttn1").style.color = "white";
        document.getElementById("bttn1").style.borderBottomColor = "white";

    }
    function myFunction1(){
        document.getElementById("demo").innerHTML =  "EUROPA";
        document.getElementById("image").src = "starter-code/assets/destination/image-europa (2).webp" ;
        document.getElementById("p-moon").innerHTML =  
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
        document.getElementById("h-flex").innerHTML =  " 628 mil. km";
        document.getElementById("h-flex1").innerHTML =  "3 years";
        document.getElementById("bttn1").style.border = "none";
        document.getElementById("bttn1").style.color = "rgba(208, 214, 249, 1)";
    }


    function myFunction(){
        document.getElementById("demo").innerHTML =  "MARS";
        document.getElementById("image").src = "space-tourism-website-main/starter-code/assets/destination/image-mars.webp" ;
        document.getElementById("p-moon").innerHTML =  "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
        document.getElementById("h-flex").innerHTML =  "225 MIL. km";
        document.getElementById("h-flex1").innerHTML =  "9 months";
        document.getElementById("bttn1").style.border = "none";
        document.getElementById("bttn1").style.color = "rgba(208, 214, 249, 1)";
    }
    function myFunction2(){
        document.getElementById("demo").innerHTML =  "TITAN";
        document.getElementById("image").src = "starter-code/assets/destination/image-titan (2).webp" ;
        document.getElementById("p-moon").innerHTML =  "  The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
        document.getElementById("h-flex").innerHTML =  "1.6 bil. km";
        document.getElementById("h-flex1").innerHTML =  "7 years";
        document.getElementById("bttn1").style.border = "none";
        document.getElementById("bttn1").style.color = "rgba(208, 214, 249, 1)";
    }

    function Function1(){
        document.getElementById("rank").innerHTML = "MISSION SPECIALIST";
        document.getElementById("name").innerHTML = "MARK SHUTTLEWORTH";
        document.getElementById("smbtn1").style.backgroundColor = "White";
        document.getElementById("smbtn").style.backgroundColor = "grey";
        document.getElementById("smbtn2").style.backgroundColor = "grey";
        document.getElementById("smbtn3").style.backgroundColor = "grey";
        document.getElementById("speech").innerHTML = "  Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        document.getElementById("creww").src = "starter-code/assets/crew/image-mark-shuttleworth (2).webp" ;
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
        document.getElementById("spech").style.width = "1500px";
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
    }
    
    