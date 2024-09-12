let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let user = document.getElementById("userInput");
let cont = document.getElementById("wordsContainer");
let but = document.getElementById("addBtn");
let p = document.getElementById("errorMsg");

but.onclick = function() {
    if (user.value === "") {
        p.textContent = "Please Enter a Word";
    } else {
        p.textContent = "";
        let a = (Math.ceil(Math.random() * 35));
        let spa = document.createElement("span");
        spa.style.fontSize = a + "px";
        spa.textContent = user.value;
        cont.appendChild(spa);
    }
}