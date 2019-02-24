$(document).ready(function () {
  console.log("I work!");
  $("#submit").click(function () {
    $("form").submit(function () {
      var questionOneChoiceOne = $("#question-1#option-1:checked").value();
      alert(questionOneChoiceOne);
      alert("Hey there! I work as well!");
    });

  });
});

//
// var questionOneChoiceOne = $("#question-1 #option-1").value();
// // console.log("Hey! I work!");
// // console.log(questionOneChoiceOne);
// alert("I work too!");
// alert(questionOneChoiceOne);
