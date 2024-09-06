function setActive(clickedLink) {
    // Remove the active class from all navigation links
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => link.classList.remove("active"));
  
    // Add the active class to the clicked link
    clickedLink.classList.add("active");
  }
  