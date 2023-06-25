document.getElementsByClassName("custom-navbar-collapse")[0].addEventListener("mouseleave", function() {
    if (this.classList.contains("show")) {
        var navbarCollapse = new bootstrap.Collapse(this);
        navbarCollapse.hide();
      }
  });