const texts = [
  "Web Development",
  "Software Development",
  "Mobile App Development",
  "Cyber Security",
  "IT Support",
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const typingTextElement = document.getElementById("typing-text");
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingTextElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingTextElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = 100;

  if (isDeleting) {
    typeSpeed /= 2;
  }

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", type);