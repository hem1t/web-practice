var nav_buttons = document.querySelectorAll(".nav-button");
var selected_nav = nav_buttons[0];

for (var navButton of nav_buttons) {
  navButton.addEventListener("click", function () {
    this.classList.add("selected");
    selected_nav.classList.remove("selected");
    selected_nav = this;
  });
}

var covers = document.getElementsByClassName("game-cover");
var current_cover = 0;
var last_cover = covers.length - 1;

function changeCover(hide_i, show_i) {
    covers[hide_i].classList.add('hidden-cover');
    covers[show_i].classList.remove('hidden-cover');
}

setInterval(() => {
    var [h, s] = [current_cover, current_cover + 1];
    if (current_cover == last_cover) { current_cover = 0; s = 0; }
    changeCover(h, s);
    current_cover += 1;
    // Why using ++ operator binds variables;
}, 5000);
