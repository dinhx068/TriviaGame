$(document).ready(function(){

})
  
  var trivia = {
    correct: 0,
    incorrect: 0,
    currentQuestion: 0,
    timer: 10,
    timerOn: false,
    timerId : '',

    questions: {
      q1: 'We can find Captain Salazar in which movie?',
      q2: "In Harry Potter, what is Dumbledore's first name?",
      q3: 'Abominable Snowman is from which Disney movie??',
      q4: 'We can find Hank Williams in which movie?',
      q5: "What is the fifth Star Wars movie called?",
      q6: 'In the Hunger Games, what district is Thresh from?',
      q7: "In Frozen, how many sisters does Elsa have?",
      q8: "Who does the voice of 'Marty' in Madagascar?",
      q9: "How many of the Ryan brothers died in WWII ?",
      q10: "What actor was offered the role of Maximus, but turned it down?"
    },
    options: {
      q1: ['Justice League', 'The Greatest Showman', 'Pirates of the Carribbean', 'American Made'],
      q2: ['Albus', 'Severus', 'Voldemort', 'Arthur'],
      q3: ['Hercules', 'Monsters,Inc.', 'Aladdin', 'Tarzan'],
      q4: ['The Jungle Book', 'I Saw the Light', 'X-Men: Apocalypse', 'Fantastic Beasts and Where To Find Them'],
      q5: ['A New Hope','Return of the Jedi','The Empire Strikes Back','Revenge of the Sith'],
      q6: ['4','7','9','11'],
      q7: ['1','2','3','4'],
      q8: ['Chris Rock','David Schwimmer','Matthew Broderick','Chris Tucker'],
      q9: ['1','2','3','4'],
      q10: ['George Clooney','Mel Gibson','Bruce Willis','Tom Selleck']
    },
    answers: {
      q1: 'Pirates of the Carribbean',
      q2: 'Albus',
      q3: 'Monsters,Inc.',
      q4: 'I Saw the Light',
      q5: 'The Empire Strikes Back',
      q6: '11',
      q7: '1',
      q8: 'Chris Rock',
      q9: '3',
      q10: 'Mel Gibson'
    },
  }