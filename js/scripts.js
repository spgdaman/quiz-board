$(document).ready(function() {

  $("#submit").click(function(event) {
    event.preventDefault();

    // Gather values and store in variables
    var questionOneAnswer = $("input:radio[name=answer1]:checked").val();
    var questionTwoAnswer = $("input:radio[name=answer2]:checked").val();
    var questionThreeAnswer = $("input:radio[name=answer3]:checked").val();
    var questionFourAnswer = $("input:radio[name=answer4]:checked").val();
    var questionFiveAnswer = $("input:radio[name=answer5]:checked").val();

    // Initialize score to 0
    var score = 0;

    // Store the gethered values in an array
    var results = [questionOneAnswer, questionTwoAnswer, questionThreeAnswer, questionFourAnswer, questionFiveAnswer];

    // The function numerates the score based on the submitted values
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

    // The function grades the score based on the given criteria and displays it
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

    // Call the function declared above
    gradeScore();

    // Convert to percentages
    var finalScore = (score / 5) * 100;

    // Hide the form after
    $("form").hide("slow");

    // Call the function declared above
    criteria();

    // Toggle the hidden form from the final score
    $(".final-score").toggle();

  });

});

// var answerQuestionOne = "123123";
// var answerQuestionTwo = "Function literal";
// var answerQuestionThree = "Stand-alone expressions";
// var answerQuestionFour = "Invocation expression";
// var answerQuestionFive = "Object creation expression";
