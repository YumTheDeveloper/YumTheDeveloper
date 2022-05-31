"use strict";

function myfunction(){
let originalStory="Imagine how hard it is to break up asphalt with a pickaxe. Now imagine it's not even a very good pickaxe. And you've been doing it for days. The sun, hotter now, makes the sweat bead on your face, itchy like a bug landing on you. Sometimes enough water escapes your pores to form a little stream that carves a path down the black dust on your face. And it tortures you that your body is letting such a precious resource just drip onto the ground. Unretrievable.";

//Array to store user inputs
let userInputs=["(1)_______", "(2)_______", "(3)_______", "(4)_______", "(5)_______", "(6)_______"];

//to print our story with blanks
let userStory=`Imagine how hard it is to break up asphalt with a ${userInputs[0]}. ${userInputs[1]} imagine it's not even a very good ${userInputs[0]}. And you've been doing it for days. The ${userInputs[2]}, hotter ${userInputs[1]}, makes the sweat bead on your ${userInputs[3]}, itchy like a bug landing on you. Sometimes enough water escapes your ${userInputs[4]} to form a little stream that carves a path down the black dust on your face. And it tortures you that your body is letting such a ${userInputs[5]} resource just drip onto the ground. Unretrievable.`;

//to check if our program is running properly in console
console.log(userStory);

//total no of questions
let numberOfQuestions=6;

//Array to store questions
let questionArray=["Enter a noun", "Enter an adverb", "Enter a noun", "Enter a noun", "Enter a noun", "Enter an adjective"]

//iterating questions one by one and storing them in userInputs Array  
for (let i=0; i<questionArray.length; i++){  
  userInputs[i]=prompt(`\n${numberOfQuestions-1} question left. \n(${i+1}) ${questionArray[i]}?`);
  numberOfQuestions-=1;
}

//updating the story with words which user filled. 
let updatedStory=`Imagine how hard it is to break up asphalt with a <span class="highlight">${userInputs[0]}</span>. <span class="highlight">${userInputs[1]}</span> imagine it's not even a very good <span class="highlight">${userInputs[0]}</span>. And you've been doing it for days. The <span class="highlight">${userInputs[2]}</span>, hotter <span class="highlight">${userInputs[1]}</span>, makes the sweat bead on your <span class="highlight">${userInputs[3]}</span>, itchy like a bug landing on you. Sometimes enough water escapes your <span class="highlight">${userInputs[4]}</span> to form a little stream that carves a path down the black dust on your face. And it tortures you that your body is letting such a <span class="highlight">${userInputs[5]}</span> resource just drip onto the ground. Unretrievable.`

//to check if our program is running properly in console
console.log(`Imagine how hard it is to break up asphalt with a ${userInputs[0]}. ${userInputs[1]} imagine it's not even a very good ${userInputs[0]}. And you've been doing it for days. The ${userInputs[2]}, hotter ${userInputs[1]}, makes the sweat bead on your ${userInputs[3]}, itchy like a bug landing on you. Sometimes enough water escapes your ${userInputs[4]} to form a little stream that carves a path down the black dust on your face. And it tortures you that your body is letting such a ${userInputs[5]} resource just drip onto the ground. Unretrievable.`);

//updating the story and button on web page. Also printing a success message. 
document.getElementById('myparagraph').innerHTML=updatedStory;
document.getElementById('mypara').innerHTML='<p class="highlight">Congratulations you completed the story!</p>';

//To refresh our page with a button
document.getElementById("mybutton").innerHTML = 'Refresh';
document.getElementById("mybutton").onclick = "location.reload();";

}





/*"Imagine how hard it is to break up asphalt with a pickaxe. Now imagine it's not even a very good pickaxe. And you've been doing it for days. The sun, hotter now, makes the sweat bead on your face, itchy like a bug landing on you. Sometimes enough water escapes your pores to form a little stream that carves a path down the black dust on your face. And it tortures you that your body is letting such a precious resource just drip onto the ground. Unretrievable."*/