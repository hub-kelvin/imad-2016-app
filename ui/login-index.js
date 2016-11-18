/*
$('#loginform').click(function(){
  $('.login').fadeToggle('slow');
  $(this).toggleClass('green');
});
*/
$( "#loginform" ).click(function() {
  alert( "Handler for .click() called." );
});
/*
$(document).mouseup(function (e)
{
    var container = $(".login");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
        $('#loginform').removeClass('green');
    }
});
*/
$(document).ready(function(){
    $("#loginform").click(function(){
        $("login").hide();
    });
    $("#loginform").click(function(){
        $("login").show();
    });
});