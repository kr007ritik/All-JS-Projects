const toggleBtn = document.getElementById("toggleBtn");
const navbar = document.getElementById("navbar")

toggleBtn.addEventListener("click", function(){
    navbar.classList.toggle("displayNone");
})