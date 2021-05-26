function toggleTheme(){
    document.querySelector("body").classList.toggle("dark-mode");
}

buttonVariable = document.getElementById("toggleButton");
buttonVariable.onclick = toggleTheme;