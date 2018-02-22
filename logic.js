// JavaScript.Task1
var elements = document.querySelectorAll('.v1_cell');
for (var i = elements.length - 1; i >= 0; i--) {
  elements[i].onclick = function (e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    if (this == target) 
      alert(this.innerHTML);
    }
  };

// JavaScript.Task3
/*alert( "abcdbcdecdefbcdeabcd".match(/b\w*e/) );*/


// JavaScript.Task4
function f(i1,i2) // i1,i2 - input-элементы
{
  if (document.getElementById(i1).onchange)
    i2.value=i1.value;
}
