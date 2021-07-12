for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        changeColor(this.innerHTML);
    });
}
function changeColor(color){
    switch(color) {
        case "Absolute Zero":
            document.querySelector("body").style.backgroundColor = "#0048BA";
            break;
        case "Acid Green":
            document.querySelector("body").style.backgroundColor = "#B0BF1A";
            break;
        case "Aero":
            document.querySelector("body").style.backgroundColor = "#7CB9E8";
            break;
        case "Aero Blue":
            document.querySelector("body").style.backgroundColor = "#C9FFE5";
            break;
        case "African Violet":
            document.querySelector("body").style.backgroundColor = "#B284BE";
            break;
        case "Air Superiority Blue":
            document.querySelector("body").style.backgroundColor = "#72A0C1";
            break;
        case "Alabaster":
            document.querySelector("body").style.backgroundColor = "#EDEADE";
            break;
        case "Alice Blue":
            document.querySelector("body").style.backgroundColor = "#F0F8FF";
            break;
        case "Alloy Orange":
            document.querySelector("body").style.backgroundColor = "#c46210";
            break;
        case "Almond":
            document.querySelector("body").style.backgroundColor = "#efdecd";
            break;
        case "Amarnath":
            document.querySelector("body").style.backgroundColor = "#E52B50";
            break;
        case "Aquamarine":
            document.querySelector("body").style.backgroundColor = "aquamarine";
            break;
        case "Azure":
            document.querySelector("body").style.backgroundColor = "azure";
            break;
        case "Blue":
            document.querySelector("body").style.backgroundColor = "blue";
            break;
        case "Brown":
            document.querySelector("body").style.backgroundColor = "brown";
            break;
        case "Chartreuse":
            document.querySelector("body").style.backgroundColor = "chartreuse";
            break;
        case "Chocolate":
            document.querySelector("body").style.backgroundColor = "chocolate";
            break;
        case "Coral":
            document.querySelector("body").style.backgroundColor = "#FF7F50";
            break;
        case "Crimson":
            document.querySelector("body").style.backgroundColor = "crimson";
            break;
        case "Cyan":
            document.querySelector("body").style.backgroundColor = "cyan";
            break;
        case "Gold":
            document.querySelector("body").style.backgroundColor = "gold";
            break;
        case "Gray":
            document.querySelector("body").style.backgroundColor = "gray";
            break;
        case "Green":
            document.querySelector("body").style.backgroundColor = "green";
            break;
        case "Ivory":
            document.querySelector("body").style.backgroundColor = "#FFFFF0";
            break;
        case "Lime":
            document.querySelector("body").style.backgroundColor = "lime";
            break;
        case "Lavender":
            document.querySelector("body").style.backgroundColor = "lavender";
            break;
        case "Magenta":
            document.querySelector("body").style.backgroundColor = "magenta";
            break;
        case "Maroon":
            document.querySelector("body").style.backgroundColor = "maroon";
            break;
        case "Misty Rose":
            document.querySelector("body").style.backgroundColor = "#ffe4e1";
            break;
        case "Olive":
            document.querySelector("body").style.backgroundColor = "olive";
            break;
        case "Orange":
            document.querySelector("body").style.backgroundColor = "orange";
            break;
        case "Pink":
            document.querySelector("body").style.backgroundColor = "pink";
            break;
        case "Plum":
            document.querySelector("body").style.backgroundColor = "plum";
            break;
        case "Red":
            document.querySelector("body").style.backgroundColor = "red";
            break;
        case "Salmon":
            document.querySelector("body").style.backgroundColor = "#fa8072";
            break;
        case "Silver":
            document.querySelector("body").style.backgroundColor = "silver";
            break;
        case "Tan":
            document.querySelector("body").style.backgroundColor = "tan";
            break;
        case "Teal":
            document.querySelector("body").style.backgroundColor = "teal";
            break;
        case "Turquoise":
            document.querySelector("body").style.backgroundColor = "turquoise";
            break;
        case "Violet":
            document.querySelector("body").style.backgroundColor = "violet";
            break;
        case "Yellow":
            document.querySelector("body").style.backgroundColor = "yellow";
            break;
    }
}