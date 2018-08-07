$(document).ready(function(){
  $("#start-button").on("click", game.start);
  $(".choice-button").on("click", game.checkGuess);
})
  
  var game = {
    // Using caps for global variables
    CORRECT: 0,
    INCORRECT: 0,
    DIDNOTANSWER: 0,
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
      n9: "How many of the Ryan brothers died in WWII ?",
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
      game.CURRENTQUESTION = 0;
      game.CORRECT = 0;
      game.INCORRECT = 0;
      game.DIDNOTANSWER = 0;
      clearInterval(game.TIMERID);

      $("#h1").text("Game in progress. . .");
      $("#h2").text("Choose your answer");
      $("#start-button").hide();
      $("#results").html("");
      $("#game").show();
      document.getElementById("time").style.visibility = "visible";
      $("#remaining-time").show();
      $("#time-remaining").text(game.TIMER);

      game.selectQuestion();
    },

    selectQuestion: function() {
      game.TIMER = 15;
      $("#time-remaining").text(game.TIMER);

      if(!game.TIMERFLAG){
        game.TIMERID = setInterval(game.timeLeft, 1000);
      }

      var question = Object.values(game.question)[game.QUESTIONNUMBER];
      console.log(question);
      $("#display-question").text(question);
      
      var choices = Object.values(game.choices)[game.QUESTIONNUMBER];
      console.log(choices);

      $.each(choices, function(index, key){
        $("#choices-to-choose-from").append($('<button class="choice-button btn btn-default btn-lg btn-block">' + key + '</button>'));
      })
    },

    timeLeft: function() {
      if(game.TIMER > -1 && game.QUESTIONNUMBER < Object.keys(game.question).length){
        $("#time-remaining").text(game.TIMER);
        console.log(game.TIMER);
        game.TIMER--;
      }
    },

    checkGuess: function(){
      console.log("testing guess");
    },
    
  }