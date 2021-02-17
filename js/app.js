'use strict';


let score =0;


let userName = prompt ('Hi there, whats your name ?' );
//console.log(userName);
alert ('Nice to meet you '+ userName + ' my name is Tamara');
alert (' lets see how much can you guess about me ^_^ , please answer only with a (y) or (n) ');


//first question//

const firstQuestion = function (){

  let numOfFriends = prompt ('lets start with the first question , do i have more than one best friend ? y/n ');
  numOfFriends = numOfFriends.toLowerCase();
  switch (numOfFriends){
  case 'y':
  case 'yes':
  //console.log('1st q answer is correct');
    alert ('Yes , that is correct , thier names are Roaya and Misaa' + ' good job '+ userName );
    score++;
    alert (' your current score is '+ score +' out of 7');
    break;
  case 'n':
  case 'no':
  //console.log('1st q answer is incorrect');
    alert ('I am sorry , it is the wrong answer , it is 2021 you can have more than one best friend XD , I have 2');
    alert (' your current score is '+ score +' out of 7');
    break;
  }
};

firstQuestion();

// second question //


function secondQuestion (){
  let animeFan = prompt ('so '+userName+' do you think I like to watch anime ? y/n');
  animeFan = animeFan.toLowerCase();
  switch (animeFan){
  case 'y':
  case 'yes':
  //console.log('2nd q answer is correct');
    alert ('Yes good job , i do love anime , i watch it all the time , you should try watching it too '+ userName);
    score++ ;
    alert (' your current score is '+ score +' out of 7');
    break;
  case 'n':
  case 'no':
  //console.log('2nd q answer is incorrect');
    alert ('Noooo , i love anime T-T');
    alert (' your current score is '+ score +' out of 7');
    break;
  }
}

secondQuestion();




// third question //


const thirdQuestion = function (){
  let gameFan = prompt ('now since we are talking about geeky stuff , do you think i like video games? y/n');
  gameFan = gameFan.toLowerCase();
  switch (gameFan){
  case 'y':
  case 'yes':
  //console.log('3rd q answer is correct');
    alert ('Yeees I am a gamer ');
    score++ ;
    alert (' your current score is '+ score +' out of 7');
    break;
  case 'n':
  case 'no':
  //console.log('3rd q answer is incorrect');
    alert ('no ,that was an easy one , most anime fans are also gamers T-T');
    alert (' your current score is '+ score +' out of 7');
    break;
  }
};

thirdQuestion();



// fourth question //


function fourthQuestion () {
  let artFan = prompt ('How about drawing , do I like to draw ? y/n');
  artFan = artFan.toLowerCase();
  switch (artFan){
  case 'y':
  case 'yes':
  //console.log('4th q answer is correct');
    alert ('yeah , I draw a little digitally , I am not very good at it though XD');
    score++ ;
    alert (' your current score is '+ score +' out of 7');
    break;
  case 'n':
  case 'no':
  //console.log('4th q answer is incorrect');
    alert ('incorrect , I actually draw a little in my free time, sorry '+ userName);
    alert (' your current score is '+ score +' out of 7');
    break;
  }
}

fourthQuestion();

// fifth question //


const fifthQuestion = function () {
  let birthDate = prompt ('here is a tricky question , there is an anime character named Tama the cat ,we share the same initials but `not` the same birth date ? y/n');
  birthDate= birthDate.toLowerCase();
  switch (birthDate){
  case 'y':
  case 'yes':
  //console.log('5th q answer is incorrect');
    alert ('sorry '+ userName+ ' we do share the same initials and birth date which is 28th of june');
    alert (' your current score is '+ score +' out of 7');
    break;
  case 'n':
  case 'no':
  //console.log('5th q answer is correct');
    alert ('yup , and that is why i call myself Tama , there is a picture for this cat in the website ^_^ ');
    score++ ;
    alert (' your current score is '+ score +' out of 7');
    break;
  }
};

fifthQuestion();




//sixth question //

function sixthQuestion () {
  alert ('now try to guess my favorite number , you have 4 attempts , here is a hint , its between 0 and 10 ');
  let favNum = prompt ('Now , what is my favorite number? ');
  let trials = 3;
  while (trials){
    if (favNum === '6'){
      alert (' correct answer ');
      score++ ;
      trials = 0;
    }else if (favNum !== 6){
      if (favNum < 6){
        alert ('too low , try again , maybe higher ');
        favNum = prompt ('what is my favorite number? ');
        trials--;
        score;
      }else if (favNum > 6){
        alert ('too high , try lower ');
        favNum = prompt ('what is my favorite number? ');
        trials--;
        score;
      }
    }
  }
  alert (' my favorite number is the number 6 because its my birthday month');
  alert (' your current score is '+ score +' out of 7');
}

sixthQuestion();




//seventh question //



const seventhQuestion = function () {
  let answer = ['zaid', 'saif'];
  let brothers = prompt ('I have two brothers , can you guess one of their names? hint : choose from these names(mohammad , ahmad, zaid, abdallah,saif,omar) you have 6 attempts');
  brothers.toLowerCase();
  let tryBrothers = 5;
  while (tryBrothers){
    if (brothers === answer [0] || brothers === answer [1] ){
      alert ('correct answer , good job '+ userName);
      tryBrothers = 0;
      score++;
    }else if (brothers !== answer) {
      alert ('wrong answer');
      brothers = prompt ('try again, guess one of their names? hint : choose from these names(mohammad , ahmad, zaid, abdallah,saif,omar)');
      tryBrothers--;
    }
  }


  alert (' my two brothers are Zaid and Saif ,');

};

seventhQuestion();





// final score //
alert (' your current score is '+ score +' out of 7');
if (score < 4){
  alert ('Im so sorry but you lost ');
}else {
  alert ('great , you WON , you did a great job '+ userName);
}
alert (' Thank you for playing along '+ userName +' This was fun ^_^');





