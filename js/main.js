document.querySelectorAll("h1").forEach((el) => {
  el.innerHTML = el.textContent
    .trim()
    .split(" ")
    .map((word) => {
      return `<span class="first-letter">${word.charAt(0)}</span>${word.slice(
        1
      )}`;
    })
    .join(" ");
});

//====================================================
// Get all sections and navigation links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

// Function to update active class based on scroll position
function updateActiveClass() {
  let currentSection = "";

  // Loop through sections to find the one currently in the viewport
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });
  // Remove active class from all nav links
  navLinks.forEach((link) => {
    link.classList.remove("active");
    // Add active class to the link corresponding to the current section
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
}

// Listen to scroll events and run the updateActiveClass function
window.addEventListener("scroll", updateActiveClass);

//====================================================
// Navbar Blury Effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("glassy");
  } else {
    navbar.classList.remove("glassy");
  }
});

//====================================================
// blinking cursor
const text = "Front-End Developer";
let index = 0;
const typingSpeed = 100;
const deletingSpeed = 70;
const delayBeforeDeleting = 4000;
const typingEffect = document.getElementById("typingEffect");

function typeWriter() {
  if (index < text.length) {
    typingEffect.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    // After the text is fully typed, wait 5 seconds and then start deleting
    setTimeout(deleteWriter, delayBeforeDeleting);
  }
}

function deleteWriter() {
  if (index > 0) {
    typingEffect.textContent = text.substring(0, index - 1);
    index--;
    setTimeout(deleteWriter, deletingSpeed);
  } else {
    // Once deleted, start typing again
    setTimeout(typeWriter, typingSpeed);
  }
}
typeWriter();
// =================================

