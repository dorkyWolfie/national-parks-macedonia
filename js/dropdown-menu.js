function myFunctionM() {
  document.getElementById("myDropdownM").classList.toggle("showM");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-menu')) {
    var dropdownsM = document.getElementsByClassName("drop-content-menu");
    var i;
    for (i = 0; i < dropdownsM.length; i++) {
      var openDropdownM = dropdownsM[i];
      if (openDropdownM.classList.contains('showM')) {
        openDropdownM.classList.remove('showM');
      }
    }
  }
}