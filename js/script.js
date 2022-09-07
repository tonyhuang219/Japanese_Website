// document.getElementById("toggle-button").onclick = function(){
//     alert("Clicked");
// }

//getElementByClassName- Returns a list of the html element nodes
//getElemebtByID- Returns the FIRST object with the specified id.

const toggleButton = $("#toggle-button") 
const navbarLinks = $("#nav_links")

toggleButton.on("click", () => {
    alert("hello")
    navbarLinks.toggleClass("active")

});

