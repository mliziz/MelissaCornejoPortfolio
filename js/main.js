
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("navLinks");
    if (nav && nav.classList.contains("show")) {
      const toggler = document.querySelector(".navbar-toggler");
      if (toggler) toggler.click();
    }
  });
});

window.addEventListener("load", () => {
  if (window.jQuery) {
    window.jQuery('body').scrollspy({ target: '#mainNav', offset: 90 });
  }
});
