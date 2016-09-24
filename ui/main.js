console.log('Loaded!');
var counter=document.getElementById("count");
var c=0;
var Name="";
var input_btn=document.getElementById("input_button");
input_btn.onclick = function(){
    
    var req = new XMLHttpRequest();
    req.onreadystatechange = function()
    {
            if(req.readyState===4)
            {
            if(req.status===200){
            
            var nl= document.getElementById("namelist");
            nl.innerHTML+='<li>' + req.responseText + '</li>';
                
            }
                
            }
    };
            req.open('GET',"http://hub-kelvin.imad.hasura-app.io/submit?=" + document.getElementById("inputname").value ,true);
            req.send(null);



};