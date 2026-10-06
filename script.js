const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    projects.forEach(project => {
      const show = filter === "all" || project.dataset.category === filter;
      project.style.display = show ? "" : "none";
    });
  });
});

// Small reveal effect
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .08 });

document.querySelectorAll(".project").forEach(project => {
  project.style.opacity = "0";
  project.style.transform = "translateY(24px)";
  project.style.transition = "opacity .7s ease, transform .7s ease";
  observer.observe(project);
});
