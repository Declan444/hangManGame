//used W3 Schools to work out how to draw the stickman
const canvas = document.getElementById('stickmanCanvas');
const draw = canvas.getContext("2d");

let bodyPart ={
    scaffold: false,
    head: false,
    body: false,
    leftArm: false,
    rightArm: false,
    leftLeg: false,
    rightLeg: false

}
// function to draw the stickman in its parts
function drawStickman (object){

// scaffold
if(bodyPart.scaffold){
draw.beginPath()
draw.moveTo(40, 230);
draw.lineTo(10, 230)
draw.lineTo(10, 10)
draw.lineTo(150, 10)
draw.lineTo(150, 25)
draw.stroke();
}
if(bodyPart.head){
//Head
draw.beginPath();
draw.arc(150, 50, 25, 0, 2 * Math.PI);
draw.stroke()
}



//Body
if(bodyPart.body){
draw.moveTo(150, 75)
draw.lineTo(150, 150)
draw.stroke()
}
// left arm
if(bodyPart.leftArm){
draw.moveTo(150, 100)
draw.lineTo(100, 100)
draw.stroke()
}
if(bodyPart.rightArm){
//right arm
draw.moveTo(150,100)
draw.lineTo(200, 100)
draw.stroke()
}
if(bodyPart.leftLeg){
//left leg
draw.moveTo(150,150)
draw.lineTo(100, 200)
draw.stroke()
}
if(bodyPart.rightLeg){
//right leg
draw.moveTo(150, 150)
draw.lineTo(200, 200)
draw.stroke()
}
}

function revealNextPart(){
    if(!bodyPart.scaffold){
        bodyPart.scaffold = true;
        console.log('calling this function')
    }else if (!bodyPart.head){
        bodyPart.head = true;
    }else if (!bodyPart.body){
        bodyPart.body = true;
    }else if (!bodyPart.leftArm){
        bodyPart.leftArm = true;
    }else if (!bodyPart.rightArm){
        bodyPart.rightArm = true;
    }else if (!bodyPart.leftLeg){
        bodyPart.leftLeg = true;
    }else if (!bodyPart.rightLeg){
        bodyPart.rightLeg = true;
    }
    
    drawStickman(bodyPart)
}
let revealButton = document.getElementById('revealButton')
revealButton.addEventListener('click', revealNextPart)

console.log('testing again')

// all above working find. Leave for now

//trying to create the letter buttons in the keys box area 
//create keys
function  createLetterKeys(){
    let letters = []

    for (let i=97; i <= 122; i++){
        letters.push(String.fromCharCode(i))
        console.log(letters)
    }
    

//getting letters. letters is now an array of the alphabet in lowercase.



// get the keys-box div
let keysBox = document.getElementById('keys-box')

//iterate through the letters array
for (let i = 0; i < letters.length; i++){
    let key = createKay(letters[i]);
    keysBox.appendChild(key)
    console.log
}
createLetterKeys()
}
console.log('does the code run to here')