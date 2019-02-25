// function checkAnswer(){
//   var questionOne = document.getElementsbyName("answer1");
//
//   if (questionOne[0].checked) {
//     alert("THat is the correct answer");
//     console.log("THat is the correct answer");
//   }
// }




$(document).ready(function() {

  $("#submit").click(function() {
    alert("Hey there! I work as well 1");
    // var questionOneInput = $("#option-1['type=radio']:checked");
    var responses = 0;
    $("input[type=radio]:checked").each(function() {
      responses += parseInt($(this).val());
      alert(responses);
    });
    $('#submit').val(responses);



  });

});
