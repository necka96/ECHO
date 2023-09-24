// stats counter

const stats = document.querySelector(".stats");

function useIncrementStats() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    counter.textContent = 0;
    const updateCounter = () => {
      const target = +counter.getAttribute("data-bs-counter");
      const currentNumber = +counter.textContent;

      const smoothIcrement = target / 400;
      if (currentNumber < target) {
        counter.textContent = Math.ceil(currentNumber + smoothIcrement);
        setTimeout(updateCounter, 1);
      } else {
        counter.textContent = target;
      }
    };
    updateCounter();
  });
}
// start counter when you reach stats section
const obesrveCounter = new IntersectionObserver((itemToWatch) => {
  itemToWatch.forEach((item) => {
    if (item.isIntersecting) {
      useIncrementStats();
      obesrveCounter.unobserve(item.target);
    }
  });
});
obesrveCounter.observe(stats);
