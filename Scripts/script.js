
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
   if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
   if (event.target == modal) {
    modal.style.display = "none";
  }

}




var modal1 = document.getElementById("myModal1");

var btn1 = document.getElementById("myBtn1");

var span1 = document.getElementsByClassName("close1")[0];

btn1.onclick = function() {
  modal1.style.display = "block";
}


span1.onclick = function() {
  modal1.style.display = "none";
}

window.onclick = function(event) {

   if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
   if (event.target == modal) {
    modal.style.display = "none";
  }

}




var modal2 = document.getElementById("myModal2");

var btn2 = document.getElementById("myBtn2");

var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

var modal3 = document.getElementById("myModal3");

var btn3 = document.getElementById("myBtn3");

var span3 = document.getElementsByClassName("close3")[0];

btn3.onclick = function() {
  modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}



var modal4 = document.getElementById("myModal4");

var btn4 = document.getElementById("myBtn4");

var span4 = document.getElementsByClassName("close4")[0];

btn4.onclick = function() {
  modal4.style.display = "block";
}

span4.onclick = function() {
  modal4.style.display = "none";
}






window.onclick = function(event) {

if (event.target == modal4) {
    modal4.style.display = "none";
  }

if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
   if (event.target == modal) {
    modal.style.display = "none";
  }
}




