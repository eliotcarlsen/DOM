$ (document).ready(function() {
  $("#catPic").click(function() {
    $("#bark").hide();
    $("#meow").toggle();
  });
  $("#dogPic").click(function() {
    $("#meow").hide();
    $("#bark").toggle();
  });
  $("#saveCat").click(function() {
    $("#meow").remove();
    $("#bark").remove();
    $("#ruffery").toggle();
  });
  $("#feed").click(function() {
    $("li#feed").append('<img src="img/food.jpeg" />');
  });
  $("#pet").click(function() {
    $("li#pet").append('<img src="img/dogpetting.jpeg" />');
  });
  $("#walk").click(function() {
    $("li#walk").append('<img src="img/catwalk.jpeg" />');
  });
  $("#kick").click(function() {
    $("li#kick").append('<img src="img/kickdog.jpeg" />');
  });
});
