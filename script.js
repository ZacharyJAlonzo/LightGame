var pattern = [0,0,0,0,0,0,0,0]; //generated in generatePattern()
//var guessPattern = [0,0,0,0,0,0,0,0]; //the old way of storing guesses

var progress = 0;
var gamePlaying = false;

var tonePlaying = false;
var volume = 0.5;

var successFailToneDuration = 1000;
var successFailToneDelay = 500; //delay before a success or fail tone plays

var clueHoldTime = 1000; //ms = 1 second
const cluePauseTime = 333;
const nextClueWaitTime = 1000;
const numberTurns = 8;
const maxNumberAttempts = 3;

var guessCount = 0;
var incorrectAttempts = 0;

var difficultyIncrease = 50;
var canClick = true;
var timeLeft = 10;
var handle;

function updateTimer()
{
  document.getElementById("timer").textContent=""+timeLeft;
  
  
  if(timeLeft == 0)
    {
      timeLeft = 10;
      loseGame();
    }
  
  timeLeft--;
}

function startGame()
{
  incorrectAttempts = 0;
  progress = 0;
  gamePlaying = true;
 
 
  //hide start button, unhide stop button
  document.getElementById("start").classList.add("hidden");
  document.getElementById("stop").classList.remove("hidden");
  
  document.getElementById("attempts").classList.remove("hidden");
  //start button now uses the .hidden CSS styling
 
  handle = setInterval(updateTimer, 1000);
  generatePattern();
  playClueSequence();
}

function generatePattern()
{
  for(let i = 0; i < 8; i++)
    {
      pattern[i] = Math.floor(Math.random() * 6 + 1);
    }
}

function stopGame()
{
  gamePlaying = false;
  resetTimer();
  //hide stop button, unhide start button
  document.getElementById("stop").classList.add("hidden");
  document.getElementById("start").classList.remove("hidden");
  document.getElementById("attempts").classList.add("hidden");
  document.getElementById("attempts").textContent="remaining tries: 3";
}

function lightButton(btn)
{
  if(gamePlaying)
    {
      document.getElementById("button"+btn).classList.add("lit");
      document.getElementById("img"+btn).classList.remove("hidden");
    }
  
}

function clearButton(btn)
{
  document.getElementById("button"+btn).classList.remove("lit");
  document.getElementById("img"+btn).classList.add("hidden");
}

function playSoundClue(btn, len)
{
  if(gamePlaying)
    {
      lightButton(btn);
      playTone(btn, len);
      setTimeout(clearButton, len, btn);
    }
}

function playClueSequence()
{
  let delay = nextClueWaitTime;
  guessCount = 0;
  //old way
  //var guessPattern = [0,0,0,0,0,0,0,0];
  
  let totalWait = 0;
  totalWait += cluePauseTime * (progress);
  totalWait += clueHoldTime * (progress);
  
  userInput();
  setTimeout(userInput, totalWait);
 
  
 
  for(let i = 0; i <= progress; i++)
    {
      console.log("play single clue: " + pattern[i] + " in " + delay + " ms");
      setTimeout(playSoundClue, delay, pattern[i], clueHoldTime );
      delay += clueHoldTime;
      delay += cluePauseTime;
    }
   
}

function guess(btn)
{
  console.log("user guessed " + btn);
  if(!gamePlaying || !canClick)
    {
      return;
    }
  
  
  
  if(pattern[guessCount] == btn)
    {
    
      //turn over?
      if(guessCount >= progress)
        {
                  
          //last turn?
          if(guessCount == numberTurns-1)
            {
              
              resetTimer();
              setTimeout(playTone, successFailToneDelay, 7, successFailToneDuration);
              setTimeout(setBackgroundColor, successFailToneDelay, 2);               
              setTimeout(setBackgroundColor, successFailToneDelay + successFailToneDuration, 0);
              setTimeout(winGame, 2*successFailToneDelay + successFailToneDuration)
            }
          else
            {
              progress++;
              resetTimer();
              
              clueHoldTime -= 100;
              setTimeout(playTone, successFailToneDelay, 7, successFailToneDuration);
              setTimeout(setBackgroundColor, successFailToneDelay, 2);    
              setTimeout(setBackgroundColor, successFailToneDelay + successFailToneDuration, 0);
              setTimeout(playClueSequence, successFailToneDuration + successFailToneDelay);
              
             
            }
          
        }
      else
        {
          guessCount++;
        }
      
    }
    else
      {
        if(guessCount <= progress)
          {
            guessCount++;
            incorrectAttempts++;
            resetTimer();
            if(incorrectAttempts >= maxNumberAttempts)
            {
              document.getElementById("attempts").textContent="remaining tries: 0";
              setTimeout(playTone, successFailToneDelay, 0, successFailToneDuration);
              setTimeout(setBackgroundColor, successFailToneDelay, 1);               
              setTimeout(setBackgroundColor, successFailToneDelay + successFailToneDuration, 0);
              setTimeout(loseGame, 2*successFailToneDelay + successFailToneDuration)
            
            }
            else
            {
              resetTimer();
              
              document.getElementById("attempts").textContent="remaining tries: "+(maxNumberAttempts-incorrectAttempts);
              setTimeout(playTone, successFailToneDelay, 0, successFailToneDuration);
              setTimeout(setBackgroundColor, successFailToneDelay, 1);               
              setTimeout(setBackgroundColor, successFailToneDelay + successFailToneDuration, 0);             
              setTimeout(playClueSequence, successFailToneDelay + successFailToneDuration);
                      
            }
          }
     
      }

}

function resetTimer()
{
  clearInterval(handle);
  timeLeft=10;
  document.getElementById("timer").textContent=""+timeLeft;
}


//Originally was using an array to store guesses, but didn't need to do this
/*function validateGuesses()
{
  
  for(let i = 0; i <= progress; i++)
    {
      if(guessPattern[i] == pattern[i])
        {
          continue;
        }
      else
        {
          incorrectAttempts++;
        
          //play 'wrong' tone
          setTimeout(playTone, successFailToneDelay, 6, successFailToneDuration);
            if(incorrectAttempts < maxNumberAttempts)
            {
              setTimeout(incorrect, successFailToneDuration + successFailToneDelay, (maxNumberAttempts - incorrectAttempts) );
              setTimeout(playClueSequence(), successFailToneDuration + successFailToneDelay);
            }
          else
            {
              setTimeout(loseGame, successFailToneDuration + successFailToneDelay);
            }
          
          return;
        }
    }
  
  //play 'correct' tone  
  setTimeout(playTone, successFailToneDelay, 5, successFailToneDuration);
  progress++;  
  
  if(progress > numberTurns)
    {
      setTimeout(winGame, successFailToneDuration + successFailToneDelay);    
    }
  
  setTimeout(playClueSequence, successFailToneDuration + successFailToneDelay);    
}
*/

function userInput()
{
  canClick = !canClick;
  
  //this feels like it doesnt belong here, but works.
  if(canClick == true)
    {
      handle = setInterval(updateTimer, 1000);
    }
  else
    {
      clearInterval(handle);
    }
}

function setBackgroundColor(id)
{
  switch(id)
    {
      case 1:       
        document.getElementById("gameButtonArea").classList.remove("correct");
        document.getElementById("gameButtonArea").classList.remove("default");
        document.getElementById("gameButtonArea").classList.add("wrong");
        break;
        
      case 2:      
        document.getElementById("gameButtonArea").classList.remove("wrong");
        document.getElementById("gameButtonArea").classList.remove("default");
        document.getElementById("gameButtonArea").classList.add("correct");
        break;
               
      default:
        document.getElementById("gameButtonArea").classList.remove("wrong");
        document.getElementById("gameButtonArea").classList.remove("correct");
        document.getElementById("gameButtonArea").classList.add("default");      
        break;
    }
   
}

function loseGame()
{
  stopGame();
  alert("Game over, you lost!");
}
function winGame()
{
  stopGame();
  alert("You won!");
}



/////////////Musical Functions////////////////////
// Sound Synthesis Functions
const freqMap = {
  0: 220, //incorrect tone
  1: 261.6, 
  2: 329.6,
  3: 392,
  4: 493.83,//B4 sounds better
  5: 525, 
  6: 540,
  7: 600 //'Correct' tone
}
function playTone(btn, len){ 
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
  tonePlaying = true;
  setTimeout(function(){ stopTone(btn) }, len);
  
}
function startTone(btn){
  if(!tonePlaying && gamePlaying && canClick){
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
    tonePlaying = true;
    lightButton(btn);    
  }
}
function stopTone(btn){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025);
    tonePlaying = false;
    clearButton(btn);
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
//////////////////////////////////////////////////