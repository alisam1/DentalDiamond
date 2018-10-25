$(function() {

$(".menu_item--clinika a").click(function() {
var ul = $(this).next(),
    clone = $(".accordion_list").clone().css({"height":"auto"}).appendTo("body"),
    height = $(".accordion_list").css("height") === "0px" ? ul[0].scrollHeight + "px" : "0px";

clone.remove();
$(".accordion_list").animate({"height":height});
return false;
});
});
