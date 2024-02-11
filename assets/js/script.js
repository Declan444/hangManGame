//used W3 Schools to work out how to draw the stickman
const canvas = document.getElementById('stickmanCanvas');
const draw = canvas.getContext("2d");

let objectState ={
    scaffold: true,
    head: true,
    body: true,
    leftArm: true,
    rightArm: true,
    leftLeg: true,
    rightLeg: true

}

// scaffold
draw.beginPath()
draw.moveTo(40, 230);
draw.lineTo(10, 230)
draw.lineTo(10, 10)
draw.lineTo(150, 10)
draw.lineTo(150, 25)
draw.stroke();

//Head
draw.beginPath();
draw.arc(150, 50, 25, 0, 2 * Math.PI);
draw.stroke()
//Body
/*draw.beginPath();*/
draw.moveTo(150, 75)
draw.lineTo(150, 150)
draw.stroke()
// left arm
draw.moveTo(150, 100)
draw.lineTo(100, 100)
draw.stroke()
//right arm
draw.moveTo(150,100)
draw.lineTo(200, 100)
draw.stroke()
//left leg
draw.moveTo(150,150)
draw.lineTo(100, 200)
draw.stroke()
//right leg
draw.moveTo(150, 150)
draw.lineTo(200, 200)
draw.stroke()



console.log('testing again')