// const heading = document.getElementById("myH1");
// heading.addEventListener("click", () => {
//     heading.classList.add("trigger");
//     boxTextShow.classList.add("showTextBox");
// })

// function changeClass() {
//     const textBox = document.getElementsByClassName("hiddenTextBox");
//     textBox.classList.replace("hiddenTextBox", "showTextBox");
// }

const heading = document.getElementById("myH1");
const textBox = document.getElementById("boxOfText");
const pictureBox = document.getElementById("pictureBox")
function toggleBox() {
    heading.classList.add("trigger");
    textBox.classList.replace("hiddenTextBox", "showTextBox");
    pictureBox.classList.replace("hiddenPicture", "showPicture");
}

heading.addEventListener("click", toggleBox);
//"click" --> this event happens only when the element is clicked on
//toggleBox --> the function gets called when the event action is triggered(in this case "click")
//if we add  a set of () to the toggleBox when we call it, it will be called without the event "click" being required 
