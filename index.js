var img = new Image();
img.src = "../assets/profile.jpg";
img.setAttribute("class", "profile");
document
  .getElementById("header")
  .insertBefore(img, document.getElementById("header").firstChild);

const center_x = img.offsetLeft + img.width / 2;
const center_y = img.offsetTop + img.height / 2;

document.onmousemove = function (event) {
  var radians = Math.atan2(event.pageX - center_x, event.pageY - center_y);
  var degree = radians * (180 / Math.PI) * -1 + 90;

  img.style.transform = "rotate(" + degree + "deg)";
};
