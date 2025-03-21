// Function to open the dropdown menu
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

// Function to close the dropdown menu
function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Event listeners for the hamburger menu
document.querySelector(".hamburg").addEventListener("click", hamburg);
document.querySelector(".cancel").addEventListener("click", cancel);
