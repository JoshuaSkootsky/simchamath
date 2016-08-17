
function toRadians (angle) {
  return angle * (Math.PI / 180);
}





function getDistance()
{
  var shape_info = document.forms['shape_info'];

  var size = shape_info.elements['size'];
  var d = shape_info.elements['diameter'];
  var difference = shape_info.elements['difference'];

  var theta = 360 * difference / size;

  var theta = toRadians(theta);

  var distance = Math.sqrt(
    2 * Math.pow(d/2, 2) - Math.pow(d, 2) * Math.cos(theta) / 2
  );
  
  return distance;
}

function displayDistance() {
  var distance = getDistance();
  document.getElementById('answer').innerHTML =
                                      "Distance between points: "+distance;
}

