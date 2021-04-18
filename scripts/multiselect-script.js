let count = [0, 0, 0, 0, 0, 0, 0, 0];

function multiselect(x) {
  var index = x - 1;

  if (count[index] == 0) {
    count[index] = 1;
    var name = "change" + x;
    document.getElementById(name).style.background = "#7EA8BE";
    document.getElementById(name).style.color = "white";
  } else if (count[index] == 1) {
    count[index] = 0;
    var name = "change" + x;
    document.getElementById(name).style.background = "white";
    document.getElementById(name).style.color = "black";
  }

  document.getElementById('enter').style.visibility="hidden";

  for (i=0; i<8; i++) {
    if (count[i] == 1) {
      document.getElementById('enter').style.visibility="visible";
    }
  }
}
