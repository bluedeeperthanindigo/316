
var count = 0;
var button = document.getElementById('clickme');


button.onclick = function() {

  count = count + 5;
  button.innerHTML = "Bank Closed";

};
