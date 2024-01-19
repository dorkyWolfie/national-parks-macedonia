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