06.29 10:51
// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
}

// Load Theme
window.onload = function () {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    loadFont();
}

// Font Size
function increaseFont() {

    let size = parseInt(localStorage.getItem("font")) || 18;

    size += 2;

    localStorage.setItem("font", size);

    loadFont();

}

function decreaseFont() {

    let size = parseInt(localStorage.getItem("font")) || 18;

    if(size>14) size -=2;

    localStorage.setItem("font", size);

    loadFont();

}

function loadFont(){

    let size = parseInt(localStorage.getItem("font")) || 18;

    document.documentElement.style.setProperty("--fontSize",size+"px");

}


