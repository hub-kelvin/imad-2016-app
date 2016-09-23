console.log('Loaded!');
var counter=document.getElementById("count");
var c=0;
var Name="";
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

var input_btn=document.getElementById("input_button");
input_btn.onclick = function(){
    alert("ty");
};
  // var nl= document.getElementById("namelist");
  // nl.innerHTML+='<li>' + document.getElementById("inputname").value + '</li>';
