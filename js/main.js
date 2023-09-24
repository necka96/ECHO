// swiper
var swiper = new Swiper(".testimonial-carousel", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

const toTopButton = document.querySelector("#toTop");

if (toTopButton !== null) {
  toTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// change Navbar class on scroll and add show class on toTopButton

function useScroll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-sticy");
      toTopButton.classList.add("show");
    } else {
      navbar.classList.remove("navbar-sticy");
      toTopButton.classList.remove("show");
    }
  });
}
// newsletter
const formElement = document.querySelector("#newsletter");
if (formElement !== null) {
  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const textElement = document.querySelector("#subscribe");
    const emailInput = formElement.querySelector("input");
    formElement.classList.add("d-none");
    textElement.classList.remove("d-none");
    setTimeout(() => {
      emailInput.value = "";
      formElement.classList.remove("d-none");
      textElement.classList.add("d-none");
    }, 6000);
  });
}

// animaitons

// headers
ScrollReveal({ reset: true }).reveal(".text-container", {
  duration: 2000,
  scale: 1.2,
});
ScrollReveal({ reset: true }).reveal(".image", {
  duration: 1500,
  scale: 1.2,
});

// features
ScrollReveal({ reset: true }).reveal(".feature-text", {
  duration: 2000,
  scale: 1.3,
});
ScrollReveal({ reset: true }).reveal(".feature-container  *", {
  duration: 1500,
  scale: 1.5,
});

// testimonial
ScrollReveal({ reset: true }).reveal(".testimonial-text", {
  duration: 2000,
  distance: "400px",
  origin: "right",
});
ScrollReveal({ reset: true }).reveal(".testimonial-col", {
  duration: 2200,
  distance: "100px",
  origin: "bottom",
});
// about
ScrollReveal({ reset: true }).reveal(".testimonial-text", {
  duration: 2000,
  distance: "400px",
  origin: "right",
});
ScrollReveal({ reset: true }).reveal(".avatar-icon p", {
  duration: 2200,
  distance: "100px",
  origin: "bottom",
});
ScrollReveal({ reset: true }).reveal(".avatar-icon h3", {
  duration: 2200,
  distance: "100px",
  origin: "bottom",
});
ScrollReveal({ reset: true }).reveal(".team-text", {
  duration: 2200,
  distance: "100px",
  origin: "top",
});
// services
ScrollReveal({ reset: true }).reveal(".services-text", {
  duration: 2000,
  scale: 1.3,
});
ScrollReveal({ reset: true }).reveal(".services .card", {
  duration: 1500,
  scale: 1.5,
});
ScrollReveal({ reset: true }).reveal(".stats .counter", {
  duration: 2000,
  distance: "400px",
  origin: "bottom",
});
ScrollReveal({ reset: true }).reveal(".stats .counter + p", {
  duration: 2500,
  distance: "400px",
  origin: "left",
});
ScrollReveal({ reset: true }).reveal(".stats-text", {
  duration: 2000,
  distance: "1000px",
  origin: "right",
});
// faq
ScrollReveal({ reset: true }).reveal(".faq-text", {
  duration: 2000,
  distance: "400px",
  origin: "right",
});
ScrollReveal({ reset: true }).reveal("#questions ", {
  distance: "1000px",
  origin: "left",
  duration: 2500,
});

// contact input
ScrollReveal({ reset: true }).reveal(".contact-text", {
  duration: 2000,
  distance: "400px",
  origin: "left",
});
ScrollReveal({ reset: true }).reveal("#form *", {
  distance: "1000px",
  origin: "left",
  duration: 2500,
});
document.addEventListener("DOMContentLoaded", useScroll);
