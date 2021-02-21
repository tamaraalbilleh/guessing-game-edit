'use strict';
let score =0;

// welcome message //
let userName = prompt ('Hi there, whats your name ?' );
function nameConfirmation (nameConfirmation){
  let empty = '';
  userName = nameConfirmation;
  while (userName === empty ){
    userName = prompt ('please enter your name ,I want us to be friends ');
  }
  return (nameConfirmation);
}

nameConfirmation (userName);
alert ('Nice to meet you '+ userName + ' my name is Tamara');
alert (' lets see how much you can guess about me ^_^ , please answer with a yes/y or no/n ');

//answer validity check//
function questionsYes (userAnswer,userAnswerResubmit,rightAnswerConsoleResponse,rightAnswerAlertResponse,wrongAnswerConsoleResponse,wrongAnswerAlertResponse){
  userAnswer.toLowerCase();
  while ((userAnswer.toLowerCase() !== 'yes') && (userAnswer.toLowerCase() !== 'y') && (userAnswer.toLowerCase() !== 'no') && (userAnswer.toLowerCase() !== 'n')){
    console.log ('Invalid answer, please try again with a yes/no or y/n');
    alert ('invalid answer , please try again with a yes/no or a y/n');
    userAnswer =prompt (userAnswerResubmit.toLowerCase());
  }
  switch (userAnswer.toLowerCase()){
  case 'y':
  case 'yes':
    console.log (rightAnswerConsoleResponse);
    alert (rightAnswerAlertResponse);
    score++;
    alert (' your current score is '+ score +' out of 7');
    break;
  case 'n':
  case 'no':
    console.log (wrongAnswerConsoleResponse);
    alert (wrongAnswerAlertResponse);
    alert (' your current score is '+ score +' out of 7');
    break;
  }
  return (userAnswer,userAnswerResubmit,rightAnswerConsoleResponse,rightAnswerAlertResponse,wrongAnswerConsoleResponse,wrongAnswerAlertResponse);
}

function questionsNo (userAnswer,userAnswerResubmit,rightAnswerConsoleResponse,rightAnswerAlertResponse,wrongAnswerConsoleResponse,wrongAnswerAlertResponse){
  userAnswer.toLowerCase();
  while ((userAnswer.toLowerCase() !== 'yes') && (userAnswer.toLowerCase() !== 'y') && (userAnswer.toLowerCase() !== 'no') && (userAnswer.toLowerCase() !== 'n')){
    console.log ('Invalid answer, please try again with a yes/no or y/n');
    alert ('invalid answer , please try again with a yes/no or a y/n');
    userAnswer =prompt (userAnswerResubmit.toLowerCase());
  }
  switch (userAnswer.toLowerCase()){
  case 'y':
  case 'yes':
    console.log (wrongAnswerConsoleResponse);
    alert (wrongAnswerAlertResponse);
    alert (' your current score is '+ score +' out of 7');
    break;
  case 'n':
  case 'no':
    console.log (rightAnswerConsoleResponse);
    alert (rightAnswerAlertResponse);
    score++;
    alert (' your current score is '+ score +' out of 7');
    break;
  }
  return (userAnswer,userAnswerResubmit,rightAnswerConsoleResponse,rightAnswerAlertResponse,wrongAnswerConsoleResponse,wrongAnswerAlertResponse);
}


// first question //

let numOfFriends = prompt ('lets start with the first question , do i have more than one best friend ? ');
numOfFriends = numOfFriends.toLowerCase();
let wrongMessage = ' do i have more than one best friend ? ';
let consoleMessageRight = '1st q answer is correct';
let consoleMessageWrong = '1st q answer is incorrect';
let userMessageRight = 'Yes , that is correct , thier names are Roaya and Misaa' + ' good job '+ userName ;
let userMessageWrong = 'I am sorry , it is the wrong answer , it is 2021 you can have more than one best friend XD , I have 2';
questionsYes (numOfFriends,wrongMessage,consoleMessageRight,userMessageRight,consoleMessageWrong,userMessageWrong);

// second question //
let animeFan = prompt ('so '+userName+' do you think I like to watch anime ?');
animeFan = animeFan.toLowerCase();
wrongMessage = 'do you think I like to watch anime ?';
consoleMessageRight = '2nd q answer is correct';
consoleMessageWrong = '2nd q answer is incorrect';
userMessageRight = ('Yes good job , i do love anime , i watch it all the time , you should try watching it too '+ userName) ;
userMessageWrong = 'Noooo , i love anime T-T';
questionsYes (animeFan,wrongMessage,consoleMessageRight,userMessageRight,consoleMessageWrong,userMessageWrong);

// third question //
let gameFan = prompt ('now since we are talking about geeky stuff , do you think i like video games? y/n');
gameFan = gameFan.toLowerCase();
wrongMessage = 'do you think I like video games ?';
consoleMessageRight = '3rd q answer is correct';
consoleMessageWrong = '3rd q answer is incorrect';
userMessageRight = ('Yeees I am a gamer ') ;
userMessageWrong = 'no ,that was an easy one , most anime fans are also gamers T-T';
questionsYes (gameFan,wrongMessage,consoleMessageRight,userMessageRight,consoleMessageWrong,userMessageWrong);

// fourth question //
let artFan = prompt ('How about drawing , do I like to draw ? y/n');
artFan = artFan.toLowerCase();
wrongMessage = 'do you think I like to draw ?';
consoleMessageRight = '4th q answer is correct';
consoleMessageWrong = '4th q answer is incorrect';
userMessageRight = ('yeah , I draw a little digitally , I am not very good at it though XD') ;
userMessageWrong = ('incorrect , I actually draw a little in my free time, sorry '+ userName);
questionsYes (artFan,wrongMessage,consoleMessageRight,userMessageRight,consoleMessageWrong,userMessageWrong);

// // fifth question //
let birthDate = prompt ('here is a tricky question , there is an anime character named Tama the cat ,we share the same initials but `not` the same birth date ? y/n');
birthDate= birthDate.toLowerCase();
wrongMessage = 'there is an anime character named Tama the cat ,we share the same initials but `not` the same birth date ? y/n';
consoleMessageRight = '5th q answer is correct';
consoleMessageWrong = '5th q answer is incorrect';
userMessageRight = ('yup , and that is why i call myself Tama , there is a picture for this cat in the website ^_^ ') ;
userMessageWrong = ('sorry '+ userName+ ' we do share the same initials and birth date which is 28th of june');
questionsNo (birthDate,wrongMessage,consoleMessageRight,userMessageRight,consoleMessageWrong,userMessageWrong);


// //sixth question //
alert ('now try to guess my favorite number , you have 4 attempts , here is a hint , its between 0 and 10 ');
let favNum = prompt ('Now , what is my favorite number? ');
let trials = 4;
// to extract a number from user answer //
while (favNum !== parseInt(favNum, 10).toString()){
  alert ('invalid answer , please enter a number');
  favNum = prompt ('what is my favorite number ?');
}
while (trials){
  if (favNum === '6'){
    alert (' correct answer ');
    score++ ;
    trials = 0;
  }else if (favNum !== 6){
    if (favNum < 6){
      alert ('too low , try again , maybe higher ');
      favNum = prompt ('what is my favorite number? ');
      trials = trials-1;
      score;
    }else if (favNum > 6){
      alert ('too high , try lower ');
      favNum = prompt ('what is my favorite number? ');
      trials = trials-1;
      score;
    }
  }
}
alert (' my favorite number is the number 6 because its my birthday month');
alert (' your current score is '+ score +' out of 7');

//seventh question //
let answer = ['zaid', 'saif'];
let brothers = prompt ('I have two brothers , can you guess one of their names? hint : choose from these names(mohammad , ahmad, zaid, abdallah,saif,omar) you have 6 attempts');
brothers.toLowerCase();
let tryBrothers = 5;
while (tryBrothers){
  if ((brothers.toLowerCase () === answer [0] )||( brothers.toLowerCase () === answer [1] )){
    alert ('correct answer , good job '+ userName);
    tryBrothers = 0;
    score++;
  }else if (brothers.toLowerCase () !== answer[0,1]) {
    alert ('wrong answer');
    brothers = prompt ('try again, guess one of their names? hint : choose from these names(mohammad , ahmad, zaid, abdallah,saif,omar)');
    tryBrothers--;
  }
}


alert (' my two brothers are Zaid and Saif ,');





// final score //
alert (' your current score is '+ score +' out of 7');
if (score < 4){
  alert ('Im so sorry but you lost ');
}else {
  alert ('great , you WON , you did a great job '+ userName);
}
alert (' Thank you for playing along '+ userName +' This was fun ^_^');




