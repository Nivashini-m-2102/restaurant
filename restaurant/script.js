const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 100; 
    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
function filterSelection(category, btn) {
  const buttons = document.querySelectorAll(".gallery-navbar button");
  buttons.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const items = document.querySelectorAll(".gallery-grid > div");
  items.forEach(item => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block"; 
    } else {
      item.style.display = "none"; 
    }
  });
}
