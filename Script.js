document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdownBtn.addEventListener("click", function () {
      dropdownContent.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
      if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
          dropdownContent.classList.remove("active");
      }
  });
});

