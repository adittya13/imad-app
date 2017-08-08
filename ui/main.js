console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML='This has been changed using JAVASCRIPT again!!';
var img = document.getElementById('madi');
img.onclick = function() {
var interval=setInterval(moveLeft,100);
};