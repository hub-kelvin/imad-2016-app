console.log('Loaded!');
var counter=document.getElementById("count");
var c=0;

counter.onclick= function(){
    
    var req = new XMLHttpRequest();
    req.onreadystatechange = function()
    {
            if(req.readyState===4)
            {
            if(req.status===200)
            document.getElementById("value").innerHTML=(req.responseText).toString();
            }
    };
            req.open('GET',"http://hub-kelvin.imad.hasura-app.io/test",true);
            req.send(null);
};
//var Name=document.getElementById("inputname").value;
document.getElementById("submit").onclick = function(){
    
    document.getElementById("namelist").innerHTML='<li>'+'kjhjhkj'+'</li>';
};