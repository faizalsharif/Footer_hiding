let lastScrollY = window.scrollY;
const footer = document.getElementById("footer");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // scrolling down
    footer.style.transform = "translateY(100%)";
  } else {
    // scrolling up 
    footer.style.transform = "translateY(0)";
  }
  lastScrollY = window.scrollY;
});
