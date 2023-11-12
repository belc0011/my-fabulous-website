const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);
const input1 = document.getElementById('interact');

function clickAction() {
    alert("Hello!");
}

input1.addEventListener('click', clickAction);
