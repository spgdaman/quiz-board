$(document).ready(function() {

<<<<<<< HEAD
  $("#submit").click(function () {
    // alert("Hey there! I work as well!");
    //
    // var questionOneChoiceOne = document.getElementbyId("#option-1");
    // var questionOneChoiceTwo = document.getElementbyId("#option-2");
    // var questionOneChoiceThree = document.getElementbyId("#option-3");
    // var questionOneChoiceFour = document.getElementbyId("#option-4");
    //
    // var questionTwoChoiceOne = document.getElementbyId("#option-1");
    // var questionTwoChoiceTwo = document.getElementbyId("#option-2");
    // var questionTwoChoiceThree = document.getElementbyId("#option-3");
    // var questionTwoChoiceFour = document.getElementbyId("#option-4");
    //
    // var questionThreeChoiceOne = document.getElementbyId("#option-1");
    // var questionThreeChoiceTwo = document.getElementbyId("#option-2");
    // var questionThreeChoiceThree = document.getElementbyId("#option-3");
    // var questionThreeChoiceFour = document.getElementbyId("#option-4");
    //
    // var questionFourChoiceOne = document.getElementbyId("#option-1");
    // var questionFourChoiceTwo = document.getElementbyId("#option-2");
    // var questionFourChoiceThree = document.getElementbyId("#option-3");
    // var questionFourChoiceFour = document.getElementbyId("#option-4");
    //
    // var answerQuestionOne = "123123";
    // var answerQuestionTwo = "Function literal";
    // var answerQuestionThree = "Stand-alone expressions";
    // var answerQuestionFour = "Invocation expression";
    // var answerQuestionFive = "Invocation expression";
    //
    // console.log(questionOneChoiceOne);
    // confirm(questionOneChoiceOne);
    // return questionOneChoiceOne;
    //
    // alert("Hey there! I work as well!");

    var questionOneChoiceOne = $("input:radio[name=answer1]:checked").val();

    console.log(questionOneChoiceOne);
    alert(questionOneChoiceOne);

  $("#submit").click(function(event) {
    event.preventDefault();

    var questionOneAnswer = $("input:radio[name=answer1]:checked").val();
    var questionTwoAnswer = $("input:radio[name=answer2]:checked").val();
    var questionThreeAnswer = $("input:radio[name=answer3]:checked").val();
    var questionFourAnswer = $("input:radio[name=answer4]:checked").val();
    var questionFiveAnswer = $("input:radio[name=answer5]:checked").val();

    var score = 0;

    var results = [questionOneAnswer, questionTwoAnswer, questionThreeAnswer, questionFourAnswer, questionFiveAnswer];


    function gradeScore() {
      results.forEach(function(iteration) {
        if (iteration == "123246") {
          score += 1;
        } else if (iteration == "Function literal") {
          score += 1;
        } else if (iteration == "Stand-alone expressions") {
          score += 1;
        } else if (iteration == "Invocation expression") {
          score += 1;
        } else if (iteration == "Object creation expression") {
          score += 1;
        }
      });
    }

    gradeScore();

    var finalScore = (score / 5) * 100;

    $("form").hide("slow");

    function criteria() {
      if(finalScore>80) {
        $(".compliment").append("<p>You have Excellently passed the quiz</p>");
        $(".final-score .output").html(finalScore);
      }
      else if(finalScore>=50 && finalScore<= 80) {
        $(".compliment").append("<p>You have Fairly passed the quiz</p>");
        $(".final-score .output").html(finalScore);
      }
      else {
        $(".compliment").append("<p>You have scored Poorly, Retake The Test!</p>");
        $(".final-score .output").html(finalScore);
      }
    }
>>>>>>> get-by-name

    criteria();
    $(".final-score").show(slow);

  });

});

<<<<<<< HEAD
//
// var questionOneChoiceOne = $("#question-1 #option-1").val();
// // console.log("Hey! I work!");
// // console.log(questionOneChoiceOne);
// alert("I work too!");
// alert(questionOneChoiceOne);
=======
// var answerQuestionOne = "123123";
// var answerQuestionTwo = "Function literal";
// var answerQuestionThree = "Stand-alone expressions";
// var answerQuestionFour = "Invocation expression";
// var answerQuestionFive = "Object creation expression";
>>>>>>> get-by-name
