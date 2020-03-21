$(document).ready(function(){
    // make form childs disabled
    $('.form_child').prop("disabled", true);
});

function change_styles()
{
    $('.to_change_style').css("color", "red");
    $('.to_change_style').css("fontWeight", "bold");
    $('.to_change_style').css("background", "black");
}