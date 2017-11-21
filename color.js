 // TEST 1
/*function check() {
  document.getElementById("#day").checked = true;
}

function uncheck() {
  document.getElementById("#day").checked = false;
}
console.log('MAINTENANT');
if (day) {
    console.log('APRES');
    function changeBackground(color) {
    document.body.style.background = grey
}
*/
 // TEST 2
/*function DayOrNot()
{
   var night = document.getElementById('day')

   night.onclick = function()
   {
     alert("HI 2+2?")
    return false
   };
}
window.onload = DayOrNot
*/
 // TEST 3

//$('#dayyy').append('<h1>  </h1>')
// TEST 4
/* $('#dayyy').append($('<p>', {
    id: 'nouveau',
    "class": 'element',
    text: 'Je suis un nouvel élément',
    css: {
      border: '1px solid black',
      fontFamily: 'serif' // camelCase au lieu de tirets
    },
    click: function(){alert('Vous avez cliqué !')}
  })) */
  // TEST 5
  $('#day').click(function() {
    if ($('#day').is(':checked')) {
                      $("body").css({'background-color': 'yellow'});
					  $("nav").css({'background-color': 'blue'});
					  $("footer").css({'background-color': 'blue'});
          }
          else {
            $("body").css({'background-color': 'white'});
			$("nav").css({'background-color': 'grey'});
			$("footer").css({'background-color': 'grey'});
          }
    })
