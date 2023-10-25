function group() {
    var dimension = 0;
    
    var GearButton = createButton('&#9881;');

    rotateLeftButton.onclick = function() {

    };

    function createButton() {
    var button = document.createElement('button');
    button.classList.add('vjs-menu-button');
    button.innerHTML = icon;
    button.style.fontSize = '1.8em';
    return button;
}
}

videojs.registerPlugin('group', group);
