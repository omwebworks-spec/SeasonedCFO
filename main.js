document.addEventListener("DOMContentLoaded", function () {
  
  fetch("/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
      setActiveMenu(); // ✅ important
    });

  fetch("/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });

});

function setActiveMenu() {

  const currentPath = window.location.pathname;

  document.querySelectorAll(".nav-link").forEach(link => {

    const linkPath = new URL(link.href).pathname;

    if (currentPath === linkPath) {
      link.classList.add("active");
    }

  });

}