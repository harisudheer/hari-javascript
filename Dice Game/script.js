let players=document.querySelectorAll("input");
let btns=document.querySelectorAll(".dice");
let score=document.querySelectorAll("span");
let endbutton=document.querySelector("#endButton")
let winMessage = document.querySelector("#winMessage")

console.log(score)

endbutton.disabled=true;

for (let t of btns){
    t.addEventListener("click",rollDice)
}
let btnClickCount=0

function rollDice(eventDetails){
    console.log(eventDetails)

let diceValue=1+parseInt(Math.random()*6)

let clickedButton=eventDetails.target
console.log(clickedButton)//this gives details about all 5 btns
let clickedButton_id=clickedButton.id
console.log(clickedButton_id)//btn1
let btn_id=clickedButton_id[3]
console.log(btn_id)
let btn_index=btn_id-1
console.log(btn_index)//0


console.log(score)
score[btn_index].innerText=diceValue

clickedButton.disabled=true;

btnClickCount=btnClickCount+1
if(btnClickCount==5){
    endbutton.disabled=false;
}
}

endbutton.addEventListener("click",findWinner)

function findWinner(){

    let highestScore=0;
    for(let t of score){
        let score_value=t.innerText;
    
        if(score_value>highestScore){
            highestScore=score_value
           
        }
}
console.log(highestScore)

let winnerIndex=[]
for(let i=0;i<=score.length-1;i++){
    let score_value=score[i].innerText
    console.log(score_value)
    if(score_value==highestScore){
        winnerIndex.push(i)//add the value at the end of array
    }
}
let playernames=""
for(let t of winnerIndex){
    playernames=playernames+players[t].value+","
}

winMessage.innerText=playernames+"wins"
 }