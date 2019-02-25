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
      var questionOneAnswer = $("input:radio[name=answer1]:checked").val();
      var questionTwoAnswer = $("input:radio[name=answer2]:checked").val();
      var questionThreeAnswer = $("input:radio[name=answer3]:checked").val();
      var questionFourAnswer = $("input:radio[name=answer4]:checked").val();
      var questionFiveAnswer = $("input:radio[name=answer5]:checked").val();

      var score = 0;

      var results = [questionOneAnswer, questionTwoAnswer, questionThreeAnswer, questionFourAnswer, questionFiveAnswer];

      // alert(results);
      // console.log(results);

      results.forEach(function(iteration) {
        if(iteration == "123246"){
          score += 1;
        }
        else if(iteration == "Function literal") {
          score +=1;
        }
        else if(iteration == "Stand-alone expressions") {
          score +=1;
        }
        else if(iteration == "Invocation expression") {
          score +=1;
        }
        else if(iteration == "Object creation expression"){
          score +=1;
        }
      });

      var finalScore = (score/5)*100;

      alert(finalScore);

      // if (questionOne[0].checked) {
      //   alert("That is the correct answer");
      //   console.log("THat is the correct answer");
      // }

  });

});

// var answerQuestionOne = "123123";
// var answerQuestionTwo = "Function literal";
// var answerQuestionThree = "Stand-alone expressions";
// var answerQuestionFour = "Invocation expression";
// var answerQuestionFive = "Object creation expression";
