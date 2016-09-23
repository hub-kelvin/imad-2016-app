console.log('Loaded!');
var counter=document.getElementById("value");
var c=0;
counter.onclick= function(){
    
    var req = new XMLhttpRequest();
    req.onreadystatechange = function()
    {
            if(req.readystate===4)
            {
            if(req.status===200)
                counter.innerhtml=(req.responseText).toString();
            }
    };
            req.open('GET',"http://hub-kelvin.imad.hasura-app.io/test",true);
            req.send(null);
};