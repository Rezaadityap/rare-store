let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  navbar.classList.remove("active");
};

// scroll reveal
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-text", { origin: "top" });
ScrollReveal().reveal(".home-img", { origin: "bottom" });
ScrollReveal().reveal(".about-img", { origin: "left" });
ScrollReveal().reveal(".about-text", { origin: "right" });

ScrollReveal().reveal(".box, .s-box", {
  duration: 1000, // Durasi animasi dalam milidetik
  origin: "bottom", // Asal animasi (bottom, top, left, right)
  distance: "50px", // Jarak gerakan animasi
  easing: "ease-in-out", // Easing animasi
  reset: true, // Apakah animasi akan diulang saat elemen keluar dan masuk kembali ke viewport
  interval: 200, // Interval waktu antar elemen dalam milidetik
});
