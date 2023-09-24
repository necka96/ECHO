// form data
const contactForm = document.querySelector("#form");
const contactText = document.querySelector(".contact-text");

if (contactForm !== null) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = contactForm.querySelectorAll("input");
    const textArea = contactForm.querySelector("textarea");
    const contactFormData = new FormData(contactForm);
    const userName = contactFormData.get("name");
    function getCapitaliseUserName(userName) {
      let words = userName.split(" ");
      for (let i = 0; i < words.length; i++) {
        words[i] =
          words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
      }
      let capitalizedUserName = words.join(" ");
      return capitalizedUserName;
    }
    const correctUserName = getCapitaliseUserName(userName);
    const text = `${correctUserName} we would like to express our gratitude for contacting us. Your message has been received, and our team will carefully review it to provide you with the best response. `;
    contactForm.classList.add("d-none");
    contactText.classList.remove("d-none");
    contactText.textContent = text;
    setTimeout(() => {
      inputs.forEach((input) => {
        input.value = "";
      });
      textArea.value = "";
      contactForm.classList.remove("d-none");
      contactText.classList.add("d-none");
    }, 6000);
  });
}
