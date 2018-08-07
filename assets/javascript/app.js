$(document).ready(function(){
  $("#start-button").on("click", game.start);
  $(document).on('click' , '.choice-button', game.checkGuess);
})
  
  var game = {
    // Using caps for global variables
    CORRECT: 0,
    INCORRECT: 0,
    QUESTIONNUMBER: 0,
    TIMER: 10,
    TIMERFLAG: false,
    TIMERID : "",

    question: {
      n1: "We can find Captain Salazar in which movie?",
      n2: 'In Harry Potter, what is Dumbledore"s first name?',
      n3: "Abominable Snowman is from which Disney movie?",
      n4: "Which of these Alien movies is set at a foundry facility and penal colony?",
      n5: "What is the fifth Star Wars movie called?",
      n6: "In the Hunger Games, what district is Thresh from?",
      n7: "In Frozen, how many sisters does Elsa have?",
      n8: 'Who does the voice of "Marty" in Madagascar?',
      n9: "In Saving Private Ryan, how many of the Ryan's brothers died?",
      n10: "What actor was offered the role of Maximus, but turned it down?"
    },
    choices: {
      n1: ["Justice League", "The Greatest Showman", "Pirates of the Carribbean", "American Made"],
      n2: ["Albus", "Severus", "Voldemort", "Arthur"],
      n3: ["Hercules", "Monsters,Inc.", "Aladdin", "Tarzan"],
      n4: ["Aliens", "Aliens:Resurrection", "Alien 3", "Alien"],
      n5: ["A New Hope","Return of the Jedi","The Empire Strikes Back","Revenge of the Sith"],
      n6: ["4","7","9","11"],
      n7: ["1","2","3","4"],
      n8: ["Chris Rock","David Schwimmer","Matthew Broderick","Chris Tucker"],
      n9: ["1","2","3","4"],
      n10: ["George Clooney","Mel Gibson","Bruce Willis","Tom Selleck"]
    },
    answer: {
      n1: "Pirates of the Carribbean",
      n2: "Albus",
      n3: "Monsters,Inc.",
      n4: "Alien 3",
      n5: "The Empire Strikes Back",
      n6: "11",
      n7: "1",
      n8: "Chris Rock",
      n9: "3",
      n10: "Mel Gibson"
    },

    // FUNCTIONS ====================================================================================================================================
    start: function() {
      // If the player decides to click the Start Game button then the game resetting the variables below
      game.QUESTIONNUMBER = 0;
      game.CORRECT = 0;
      game.INCORRECT = 0;
      clearInterval(game.TIMERID);

      $("#h1").text("Game in progress. . .");
      $("#h2").text("Choose your answer");
      $("#start-button").hide();
      $("#display-answer").html("");
      $("#main").show();
      document.getElementById("time").style.visibility = "visible";
      $("#remaining-time").show();
      $("#time-remaining").text(game.TIMER);

      game.selectQuestion();
    },

    selectQuestion: function() {
      game.TIMER = 15;
      $("#time-remaining").text(game.TIMER);

      if(!game.TIMERFLAG){
        game.TIMERID = setInterval(game.timeLeft, 500);
      }

      var question = Object.values(game.question)[game.QUESTIONNUMBER];
      $("#display-question").text(question);
      var choices = Object.values(game.choices)[game.QUESTIONNUMBER];
      
      // Creation of buttons for the user choices for the current question
      $.each(choices, function(index, key){
        $("#choices-to-choose-from").append($('<button class="choice-button btn btn-default btn-lg btn-block">' + key + "</button>"));
      })
    },

    timeLeft: function() {
      // When the game hits the last question and time runs out
      if (game.QUESTIONNUMBER === Object.keys(game.question).length){
        $("#display-answer").html("<h3>Thanks for playing.</h3>" +
          "<p>Correct: " + game.CORRECT + "</p>" +
          "<p>Incorrect: " + game.INCORRECT + "</p>" +
          '<p>Click, "Start Game" to play again!</p>');
  
          $("#main").hide();
          $("#start-button").show(); // to resart the game
      } 
      // When game is running normally
      else if (game.TIMER > -1 && game.QUESTIONNUMBER < Object.keys(game.question).length){
        $("#time-remaining").text(game.TIMER);
        game.TIMER--;      } 
      // When time hits 0
      else if (game.TIMER === -1){
        clearInterval(game.TIMERID);
        setTimeout(game.checkGuess, 1000);
        $("#display-answer").html("<h3>The correct answer was, " + Object.values(game.answer)[game.QUESTIONNUMBER] + "</h3>");
      }
    },

    checkGuess: function(){
      var answerToQuestion = Object.values(game.answer)[game.QUESTIONNUMBER];
      // When correct
      if ($(this).text() === answerToQuestion){
        game.CORRECT++;
        clearInterval(game.TIMERID);
        setTimeout(game.setUpForNextQuestion, 1000);

        $(".choice-button").prop("disabled",true);
        $(this).addClass("btn-success").removeClass("btn-default");
        document.getElementById("display-answer").style.visibility = "visible";
        $("#display-answer").html("<h3>That is correct!</h3>");
    }
      // When incorrect
      else {
        game.INCORRECT++;
        clearInterval(game.TIMERID);
        setTimeout(game.setUpForNextQuestion, 1000);

        $(".choice-button").prop("disabled",true);
        $(this).addClass("btn-danger").removeClass("btn-default");
        document.getElementById("display-answer").style.visibility = "visible";
        $("#display-answer").html("<h3>The correct answer was, " + answerToQuestion + "</h3>");
    }
  },

    setUpForNextQuestion : function(){
      game.QUESTIONNUMBER++;
      $(".choice-button").remove();
      $("#display-answer h3").remove();
      document.getElementById("display-answer").style.visibility = "hidden";
      game.selectQuestion();
  },
  
}