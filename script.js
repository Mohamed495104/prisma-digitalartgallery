// Toggle mobile navigation menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", function () {
      document.querySelector(".nav-links").classList.toggle("show");
      this.classList.toggle("active");
    });
  }

  // Exhibition filter functionality (only on exhibitions page)
  const filterButtons = document.querySelectorAll(".filter-btn");
  const exhibitionCards = document.querySelectorAll(".exhibition-card");

  if (filterButtons.length > 0 && exhibitionCards.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Reset active class
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        // Get filter value
        const filterValue = button.getAttribute("data-filter");

        // Show/hide exhibitions based on filter
        exhibitionCards.forEach((card) => {
          if (filterValue === "all" || card.classList.contains(filterValue)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }
});
