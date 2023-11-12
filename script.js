const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);
const textInput = document.getElementById('textInput');
    textInput.addEventListener('onkeydown', (event) => {
      if (event.key === 'Enter') {
        alert('Enter key pressed!');
      }
      else if (event.key === "arrowleft") {
        alert('Left arrow key pressed!')
      }
      else if (event.key === 69) {
        alert("You pressed e!")
      }
    })