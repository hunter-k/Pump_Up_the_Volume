function randomTop () {
  return Math.floor((Math.random() * 80) + 1) + '%';
}

function randomLeft () {
  return Math.floor((Math.random() * 80) + 1) + '%';
}

function randomID () {
  var assign = Math.floor((Math.random() * 2));
  if (assign === 1) {
    return "cir1";
  } else {
    return "cir2";
  }
}


function createCircle () {
  var rad = document.getElementById('rad').value;
  var diameter = parseInt(rad,10);
  diameter = diameter * 2;
  var circle = document.createElement('div');
  circle.id = randomID();
  circle.style.width = diameter + "px";
  circle.style.height = diameter + "px";
  circle.style.backgroundImage = "url('images/adam.JPG')";
  circle.style.backgroundSize = "100%";
  circle.style.left = randomLeft();
  circle.style.top= randomTop();
  dest = document.getElementById('dest');
  dest.appendChild(circle);
  addInfo();
}

function addInfo () {
  var rad = document.getElementById('rad').value;
  rad = parseInt(rad,10);
  var area = 3.14 * (rad * rad);
  var radOutput = document.getElementById('radOutput');
  radOutput.innerText = "You have created a circle with an area of " + area + " pixels.";
}
