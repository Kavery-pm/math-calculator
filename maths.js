
var playing = false;
var score = 0;
var action;
var timeremaining;
var correctanswer;
////if we click on the start/reset
document.getElementById("startreset").onclick = function(){
//if we are playing
if(playing == true){
location.reload();
}
else{
    //if we rae not playing
    playing = true;
    //chnage it to true
    score= 0;

    document.getElementById("scorevalue").innerHTML = score;
   
    document.getElementById("timeremaining").style.display = "block";
    timeremaining = 60;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    document.getElementById("startreset").innerHTML = "Reset game";
   startCountdown();
generate();
}
}
for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    //check if we are playing     
    if(playing == true){//yes
        if(this.innerHTML == correctanswer){
        //correct answer
        console.log(this.innerHTML.text);
        console.log(correctanswer);
            
            //increase score by 1
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            //hide wrong box and show correct box
            
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");   
            }, 1000);
            
            //Generate new Q&A
            
            generate();
        }else{
        //wrong answer
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");   
            }, 1000);
        }
    }
}   
}
function startCountdown(){
action = setInterval(() => {
  timeremaining -=1;  
  document.getElementById("timeremainingvalue").innerHTML = timeremaining;
  if(timeremaining === 0){
      stopcountdown();
      show("gameOver");
      document.getElementById("gameOver").innerHTML = "<p> your score is: " +score+ "</p>"
      hide("timeremaining");
      hide("correct");
      hide("wrong");
  }
}, 1000);
}
function stopcountdown(){
    clearInterval(action);
    
}
function hide(Id){
    document.getElementById(Id).style.display = "none";
}
function show(Id){
    document.getElementById(Id).style.display = "block";
}
function generate(){
    var x = 1+Math.round(9*Math.random());
    var y = 1+Math.round(9*Math.random());
     correctanswer = x*y;
    
    console.log(correctanswer);
    document.getElementById("question").innerHTML = x + 'X' + y;
    var correctPosition = Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctanswer;
    var answers = [correctanswer];
    for(i=1;i<5;i++){
        if(i!=correctPosition){
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
        }
    
