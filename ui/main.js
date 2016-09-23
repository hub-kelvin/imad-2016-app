console.log('Loaded!');
var counter=document.getElementById("count");
var c=0;
counter.onclick= function(){
    
    var req = new XMLHttpRequest();
    req.onreadystatechange = function()
    {
        var span=document.getElementById("value");
            if(req.readyState===4)
            {
            if(req.status===200)
                span.innerhtml=(req.responseText).toString();
            }
    };
            req.open('GET',"http://hub-kelvin.imad.hasura-app.io/test",true);
            req.send(null);
};