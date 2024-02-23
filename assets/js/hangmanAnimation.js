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