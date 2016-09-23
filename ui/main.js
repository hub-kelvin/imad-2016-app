console.log('Loaded!');
var counter=document.getElementById("count");
var c=0;
counter.onclick= function(){
    
    var req = new XMLHttpRequest();
    req.onreadystatechange = function()
    {
            if(req.readyState===XMLHttpRequest.DONE)
            {
            if(req.status===200)
            document.getElementById("value").innerhtml="hello world";
            }
    };
            req.open('GET',"http://hub-kelvin.imad.hasura-app.io/test",true);
            req.send(null);
};