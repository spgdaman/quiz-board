$(document).ready(function () {

  $("#submit").click(function () {
    alert("Hey there! I work as well 1");
    alert("Hey there! I work as well 2");

    var questionOne = document.getElementsbyName("answer1");

    if (questionOne[0]) {
      alert("THat is the correct answer");
    }


  });

  // console.log("I work!");
  // $("form").hide();
});

//
// var questionOneChoiceOne = $("#question-1 #option-1").value();
// // console.log("Hey! I work!");
// // console.log(questionOneChoiceOne);
// alert("I work too!");
// alert(questionOneChoiceOne);
