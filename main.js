var typed = new Typed(".text", {
  strings: [
    "Full Stack Developer",
    "BackEnd Developer",
    "FrontEnd Developer",
    "Web Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

document.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const button = document.getElementById("top");

  if (scrollTop > 600) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});
