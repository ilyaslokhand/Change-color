// 1) First I generated a random color.
// 2) then i write the hax value for VideoColorS.
// 3) then i finally intialize color.
// 4) then i apply the loop on color so that i can get multiple color
// 5) After then i return the color so that it should work

let randomColor = function () {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;

let startChangingColor = function () {
  intervalId = setInterval(changeBgColor, 1000);
};

function changeBgColor() {
  document.body.style.backgroundColor = randomColor();
}

let stopChangingColor = function () {
  clearInterval(intervalId);
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);

// 1) query selector to select start and stop. and we also pass start and stop changing color to it.
// 2) now in start changingcolor we apply a interval and pass changebgcolorfuction to it and provide 1000.
// 3) we also declare the variable of interval global so that we can access it in clearInterval.
// 4) we also created a fuction changebgcolor so that we can change the background color.
