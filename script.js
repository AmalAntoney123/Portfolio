/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
    },

    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.6,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// Toggle sidebar
function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
}

// hero sub

const titles = ["Frontend Developer", "UI/UX Designer", "Backend Developer", "Graphic Designer"];
let titleIndex = 0;
let charIndex = 0;
let isTyping = true;

function typeTitle() {
  const header = document.getElementById("typing-header");
  const title = titles[titleIndex];

  if (isTyping) {
    header.innerHTML = title.substring(0, charIndex);
    charIndex++;
    if (charIndex > title.length) {
      isTyping = false;
      setTimeout(eraseTitle, 1000);
    } else {
      setTimeout(typeTitle, 100);
    }
  }
}

function eraseTitle() {
  const header = document.getElementById("typing-header");
  const title = titles[titleIndex];

  if (!isTyping) {
    header.innerHTML = title.substring(0, charIndex);
    charIndex--;
    if (charIndex === 0) {
      isTyping = true;
      titleIndex = (titleIndex + 1) % titles.length;
      setTimeout(typeTitle, 500);
    } else {
      setTimeout(eraseTitle, 100);
    }
  }
}

typeTitle();

// Image load
document.addEventListener("DOMContentLoaded", function () {
  const img = document.querySelector(".img-responsive");
  img.classList.add("animate");
});

document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector(".animate-text-from-left");
  text.classList.add("animate");
});


// Slidein Slideout sections

// Get all header links and content sections
const headerLinks = document.querySelectorAll(".nav-links");
const contentSections = document.querySelectorAll(".content-section");

// Function to hide all content sections
function hideAllSections() {
  contentSections.forEach((section) => {
    section.classList.remove("active");
    section.style.display = "none";

  });
}

function delay(time) {
  var d1 = new Date();
  var d2 = new Date();
  while (d2.valueOf() < d1.valueOf() + time) {
    d2 = new Date();
  }
}

// Function to show a specific content section by its ID
function showSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.style.display = "block";
    setTimeout(function() {
      section.classList.add("active");
    }, 1.5);
  }
}

// Add click event listeners to header links
headerLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Prevent default link behavior
    e.preventDefault();

    // Hide all content sections
    hideAllSections();

    // Get the target section ID from the link's href attribute
    const targetSectionId = link.getAttribute("href"); // Remove the '#' symbol
    console.log(targetSectionId);

    // Show the target section with a slight delay for better animation effect
    setTimeout(() => {
      showSection(targetSectionId);
    }, 100);
  });
});

// Hide all sections except the first one initially (e.g., "Home")
hideAllSections();
showSection("home"); // Assuming you have a "home" section
