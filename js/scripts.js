$ (document).ready(function() {
  $("#catPic").click(function() {
    $("#catPic").hide("#bark");
    $("#meow").toggle();
  });
  $("#dogPic").click(function() {
    $("#bark").toggle();
  });
});
