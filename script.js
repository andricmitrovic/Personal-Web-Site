AOS.init();
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

console.log("Henlo fren :)");

let counter = 0;

var style = document.createElement('style');
style.innerHTML =
	'img, header {' +
		'filter:invert(100%);' +
	'}';
 
$(document).on('click', function(){
  counter++;
  if(counter >=10)
  {
    var ref = document.querySelector('script');
    ref.parentNode.insertBefore(style, ref);
  }
});

