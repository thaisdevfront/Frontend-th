const staggerSections = document.querySelectorAll(".stagger");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const items = entry.target.querySelectorAll(".stagger-item");

      items.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.15}s`;
        item.classList.add("show");
      });

      observer.unobserve(entry.target); // anima só uma vez
    }
  });
}, {
  threshold: 0.3
});

staggerSections.forEach(section => observer.observe(section));