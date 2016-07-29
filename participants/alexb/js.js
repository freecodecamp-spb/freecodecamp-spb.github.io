var span = document.getElementById("span");
var counter = 0;
var _array = ["stuff", "websites", "Javascript", "CSS", "webapps", "designs", "MEAN", "self awareness", "good habits", "sense of beauty", "fire"];
setInterval(function() {
    counter === _array.length - 1 ? counter = 0 : counter++;
    span.innerHTML = _array[counter];
}, 1000);