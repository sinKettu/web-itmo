$(document).ready(function(){
    $("a").prepend(String.fromCodePoint(0x2197));
    $("a").attr("target", "_blank");
    $("a").each(function(){
        $(this).attr("href", $(this).attr("href").replace("http:", "https:"));
    });
    alert(1);
});

function revert()
{
    $("a").removeAttr("target");
    $("a").each(function(){
        $(this).html($(this).html().substr(1));
    });
}