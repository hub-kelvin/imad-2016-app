console.log('Loaded!');
var counter=document.getElementById("count");
var c=0;
counter.onclick= function(){
    c=c+1;
    var temp=document.getElementById("value");
    temp.innerHTML=(c.toString());
}