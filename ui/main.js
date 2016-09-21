console.log('Loaded!');
var element = document.getElementById('logo');
element.onclick = function () {
    setInterval(moveright,50);
    };
    var value=0;
function moveright(){
    
    element.style.marginLeft=value + 'px';
    value=value+10;
}    