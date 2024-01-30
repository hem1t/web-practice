var nav_buttons = document.querySelectorAll(".nav-button");
var selected_nav = nav_buttons[0];

for (var navButton of nav_buttons) {
  navButton.addEventListener("click", function () {
    this.classList.add("selected");
    selected_nav.classList.remove("selected");
    selected_nav = this;
  });
}
