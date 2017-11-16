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
function DayOrNot()
{
   var night = document.getElementById('day')

   night.onclick = function()
   {
     alert("HI 2+2?")
    return false
   };
}
window.onload = DayOrNot
