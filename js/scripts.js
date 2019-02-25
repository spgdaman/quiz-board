$(document).ready(function() {

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
      if (finalScore > 80) {
        $(".compliment").append("<p>You have Excellently passed the quiz</p>");
        $(".final-score .output").html(finalScore);
      } else if (finalScore >= 50 && finalScore <= 80) {
        $(".compliment").append("<p>You have Fairly passed the quiz</p>");
        $(".final-score .output").html(finalScore);
      } else {
        $(".compliment").append("<p>You have scored Poorly, Retake The Test!</p>");
        $(".final-score .output").html(finalScore);
      }
    }

    criteria();
    $(".final-score").show(slow);

  });

});

// var answerQuestionOne = "123123";
// var answerQuestionTwo = "Function literal";
// var answerQuestionThree = "Stand-alone expressions";
// var answerQuestionFour = "Invocation expression";
// var answerQuestionFive = "Object creation expression";
