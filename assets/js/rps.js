// first prevent js loading before DOM loading
document.addEventListener("DOMContentLoaded", function(){
///////////////////////////////
  //score loggers
  var win = 0;
  var loss = 0;
  var tie = 0;
  //plays
  var plays = ['r','p','s']
  //pick random
  function randomPick(plays){
    var random = Math.floor(Math.random() * plays.length);
    return(plays[random]);
  }
  //judge winner
  function judgeWinner(aiPlay, humanPlay){
    //handle humanPlay errors
    if(!plays.includes(humanPlay)) {
      return("Please press a valid key!!")
    } else {
      //determine tie first
      if(aiPlay===humanPlay){
        tie += 1;
        return("tie");
      } else { //determine others
        if(aiPlay==='r'&& humanPlay==='p') {
          win += 1;
          return("human");
        }
        else if (aiPlay==='r'&& humanPlay==='s') {
          loss += 1;
          return("ai");
        }
        else if (aiPlay==='p'&& humanPlay==='r') {
          loss += 1;
          return("ai");
        }
        else if (aiPlay==='p'&& humanPlay==='s') {
          win += 1;
          return("human");
        }
        else if (aiPlay==='s'&& humanPlay==='r') {
          win += 1;
          return("human");
        }
        else if (aiPlay==='s'&& humanPlay==='p') {
          loss += 1;
          return("ai");
        }
      }
    }
  }
  //Now we need a new function to update the score
  function updateScore(){
    var winEl= document.getElementById('win')
    var tieEl= document.getElementById('tie')
    var lossEl= document.getElementById('loss')
    winEl.innerHTML = win;
    tieEl.innerHTML = tie;
    lossEl.innerHTML = loss;
  }


  document.onkeyup = function(e){
    //prevent default keys behaviors
    e.preventDefault();
    //AI play
    var aiPlay = randomPick(plays);
    console.log('AI:'+ aiPlay);
    //Human Play
    var humanPlay = e.key;
    console.log('Human: ' + humanPlay);
    //Now we need to determine win/loss/tie
    console.log(judgeWinner(aiPlay,humanPlay));
    console.log(`win: ${win}, tie: ${tie}, loss: ${loss}`);
      //because this game's "engine" is player key press, this update function must be called every time a key is pressed, hence inside the keyup event
    updateScore();
  }



///////////////////////////////
});
