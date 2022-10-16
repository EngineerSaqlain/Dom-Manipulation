// const pTags = document.getElementsByTagName("p");
// pTags[0].innerHTML = "JavaScript has changed the first p content";

// const bgCustomTags = document.getElementsByClassName("bg-custom");

// const emailInputTag = document.getElementsByName("email");

// const h1 = document.getElementById("h1");

// const h1 = document.querySelector("h1");

const bgCustomTags = document.querySelectorAll(".bg-custom");
bgCustomTags[1].innerHTML = "JavaScript is Awesome";

const form = document.querySelector("form");
const div = document.querySelector("div");

const newTag = document.createElement("a");
newTag.setAttribute("href", "https://google.com");
const newTagText = document.createTextNode("Go to Google");
newTag.append(newTagText);
form.prepend(newTag);
form.removeChild(div);

const button = document.querySelector("button");
button.style.backgroundColor = "purple";
button.style.color = "white";

console.log(newTag.getAttribute("href"));