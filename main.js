window.onload = function () {
  var chrome = window.chrome;
  var reflect = document.getElementById("reflect");
  if (chrome) {
    reflect.style.display = "none";
  }
};

var date = new Date();

var dayString = new Array(
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
);
var monthString = new Array(
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
);

var num = document.querySelectorAll("p.num");
for (var i = 0; i < num.length; i++) {
  num[i].innerHTML = date.getDate();
}

var year = document.querySelectorAll("p.year");
for (var i = 0; i < year.length; i++) {
  year[i].innerHTML = date.getFullYear();
}

var day = document.querySelectorAll("p.day");
for (var i = 0; i < day.length; i++) {
  day[i].innerHTML = dayString[date.getDay()];
}

var month = document.querySelectorAll("p.month");
for (var i = 0; i < month.length; i++) {
  month[i].innerHTML = monthString[date.getMonth()];
}

function backgroundCalendar() {
  var bg = document.getElementById("bg");
  if ((month = monthString.indexOf("September", "October", "November"))) {
    bg.style.backgroundImage = "url(autumn.jpg)";
  } else if ((month = monthString.indexOf("December", "January", "February"))) {
    bg.style.backgroundImage = "url(winter.jpg)";
  } else if ((month = monthString.indexOf("March", "April", "May"))) {
    bg.style.backgroundImage = "url(spring.jpg)";
  } else if ((month = monthString.indexOf("June", "July", "August"))) {
    bg.style.backgroundImage = "url(summer.jpg)";
  } else;
}
backgroundCalendar();
