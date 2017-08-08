console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML='This has been changed using JAVASCRIPT again!!';
var img = document.getElementById('madi');
function moveRight() {
    var marginLeft = marginLeft+10;
    img.style.marginLeft= marginLeft+'px';
} 
img.onclick = function() {
var interval=setInterval(moveRight,30);
};