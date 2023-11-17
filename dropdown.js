function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("drop-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunctionF() {
  document.getElementById("myDropdownF").classList.toggle("showF");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-flag')) {
    var dropdownsF = document.getElementsByClassName("drop-content-flag");
    var i;
    for (i = 0; i < dropdownsF.length; i++) {
      var openDropdownF = dropdownsF[i];
      if (openDropdownF.classList.contains('showF')) {
        openDropdownF.classList.remove('showF');
      }
    }
  }
}

// skrieno meni
function openBurger() {
  document.getElementById("menu").style.display = "flex";
}

function closeBurger() {
  document.getElementById("menu").style.display = "none";
}

// aktivnosti pop-up
function openPopup1() {
  document.getElementById("popup-1").style.display = "block";
}

function closePopup1() {
  document.getElementById("popup-1").style.display = "none";
}

function openPopup2() {
  document.getElementById("popup-2").style.display = "block";
}

function closePopup2() {
  document.getElementById("popup-2").style.display = "none";
}

function openPopup3() {
  document.getElementById("popup-3").style.display = "block";
}

function closePopup3() {
  document.getElementById("popup-3").style.display = "none";
}

function openPopup4() {
  document.getElementById("popup-4").style.display = "block";
}

function closePopup4() {
  document.getElementById("popup-4").style.display = "none";
}

function openPopup5() {
  document.getElementById("popup-5").style.display = "block";
}

function closePopup5() {
  document.getElementById("popup-5").style.display = "none";
}

function openPopup6() {
  document.getElementById("popup-6").style.display = "block";
}

function closePopup6() {
  document.getElementById("popup-6").style.display = "none";
}

function openPopup7() {
  document.getElementById("popup-7").style.display = "block";
}

function closePopup7() {
  document.getElementById("popup-7").style.display = "none";
}

function openPopup8() {
  document.getElementById("popup-8").style.display = "block";
}

function closePopup8() {
  document.getElementById("popup-8").style.display = "none";
}

function openPopup9() {
  document.getElementById("popup-9").style.display = "block";
}

function closePopup9() {
  document.getElementById("popup-9").style.display = "none";
}

function openPopup10() {
  document.getElementById("popup-10").style.display = "block";
}

function closePopup10() {
  document.getElementById("popup-10").style.display = "none";
}

function openPopup11() {
  document.getElementById("popup-11").style.display = "block";
}

function closePopup11() {
  document.getElementById("popup-11").style.display = "none";
}

function openPopup12() {
  document.getElementById("popup-12").style.display = "block";
}

function closePopup12() {
  document.getElementById("popup-12").style.display = "none";
}

function openPopup13() {
  document.getElementById("popup-13").style.display = "block";
}

function closePopup13() {
  document.getElementById("popup-13").style.display = "none";
}

function openPopup14() {
  document.getElementById("popup-14").style.display = "block";
}

function closePopup14() {
  document.getElementById("popup-14").style.display = "none";
}

function scrolTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function openBlock(blockId, clickedIcon) {
  var icons = document.querySelectorAll('.cls-5');
  icons.forEach(function(icon) {
    icon.classList.remove('active-icon');
  });
  clickedIcon.classList.add('active-icon');
  var initialText = document.getElementById('start');
  initialText.style.display = 'none';
  var blocks = document.querySelectorAll('.hide');
  blocks.forEach(function(block) {
      block.style.display = 'none';
  });
  var selectedBlock = document.getElementById(blockId);
  selectedBlock.style.display = 'flex';
}