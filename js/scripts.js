// function checkAnswer(){
//   var questionOne = document.getElementsbyName("answer1");
//
//   if (questionOne[0].checked) {
//     alert("THat is the correct answer");
//     console.log("THat is the correct answer");
//   }
// }

// var response = 0;
// $("input[type=radio]:checked").each(function() {
//   response += parseInt($(this).val());
//   alert(response);
// });
// $('#submit').val(response);


$(document).ready(function() {

  $("#submit").click(function() {
    function checkAnswer(){
      var questionOne = document.getElementsbyName("answer1");

      alert(questionOne);
      // if (questionOne[0].checked) {
      //   alert("That is the correct answer");
      //   console.log("THat is the correct answer");
      // }
    }


  });

});

// var answerQuestionOne = "123123";
// var answerQuestionTwo = "Function literal";
// var answerQuestionThree = "Stand-alone expressions";
// var answerQuestionFour = "Invocation expression";
// var answerQuestionFive = "Object creation expression";
