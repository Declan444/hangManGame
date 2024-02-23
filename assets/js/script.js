
function resetGame(){
    console.log('calling resetGame function')
    location.reload()
   }
   let reset = document.getElementById('reset')
   reset.addEventListener('click', resetGame)


//used W3 Schools to work out how to draw the stickman
const canvas = document.getElementById('stickmanCanvas');
const draw = canvas.getContext("2d");
/**
 * BodyPart will be the object that contains all of the stickman sections. Set boolean to false to not appear on the canvas
 */
let bodyPart ={
    scaffold: false,
    head: false,
    body: false,
    leftArm: false,
    rightArm: false,
    leftLeg: false,
    rightLeg: false,
    dead:false

}
/**
 * 
 * @param {drawStickman} object the function that draws each part of the stickman on the canvas
 */
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
if(bodyPart.dead){
    draw.moveTo(100, 75)
    draw.lineTo(200, 75)
    draw.strokeStyle = 'red'
    draw.stroke()
}
}
/**revealNextPart function uses an if statement to reveal each bodyPart and then call the function
 */
function revealNextPart(){
    if(!bodyPart.scaffold){
        bodyPart.scaffold = true;
        
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
    }else if(!bodyPart.dead){
        bodyPart.dead = true;
        
    }else{
        alert('You killed me :(  The correct word was .....' + randomWordArray.join().toUpperCase());
    }
    
    drawStickman(bodyPart)
}



/**
 * getRandomWord function to randomely select a word from the array. return it as an array and assign it to selectedWord
 */

// create an array that contains 5 letter words

let fiveLetterWords = ['black', 'clock', 'brown', 'blast', 'stick', 'stamp', 'disty']
// function to randomly select a word from the array
function getRandomWord(){
    let randomWordIndex = Math.floor(Math.random() * fiveLetterWords.length);
    return fiveLetterWords[randomWordIndex]
    
}

let selectedWord = getRandomWord()
console.log(selectedWord)



//create an array from the selected word

let randomWordArray = selectedWord.split('')

console.log(randomWordArray)

// pushes the word into the underline divs. 

for(let i=0; i< randomWordArray.length; i++){
    let existingDiv = document.getElementById('letter-' + (i + 1))
    /*let randomLetter = randomWordArray[i]*/
    if (existingDiv){
        existingDiv.textContent = randomWordArray[i];  
    }

}



//trying to create the letter buttons in the keys box area 
//create keys


/**
 * createLetterForKeys function to create the letters, put the letters into the key from createKay
 */
function  createLettersForKeys(){
    
    let letters = []

    for (let i=97; i <= 122; i++){
        letters.push(String.fromCharCode(i))      
    }
let keysBox = document.getElementById('keys-box')

for (let i = 0; i < letters.length; i++){
    let keys = createKey(letters[i]);
    keysBox.appendChild(keys)
    
}
    
}
/*let getLetters = document.getElementById('getLetters')
    getLetters.addEventListener('click', createLettersForKeys)*/


/**
 * @param {createKey} letter function to create a key. Style the background red. Function call extra functionality when need the letter button click to call the revealNextPart
 * @returns 
 */
function createKey(letter){
    
    let key = document.createElement('span')
    key.className = 'key'
    key.textContent = letter;
/**
 * Event listener on Key to turn red when clicked and to call the checkAndHighlightLetter function
 */
    key.addEventListener('click', function(event){
        key.style.backgroundColor = 'red';
        checkAndHighlightLetter(letter);
          
    })
    return key;   
}
// push the letters from the random array into the underline div. made letters white in css  so cant see in div until it turns to blue and add to the eventlistener
/**
 * 
 * @param {checkAndHighlightLetter} clickedLetter function to check if the letter selected is in the array then it changes the div to blue and highlights the letter. Also to call the revealNextPart function if fased
 */
let clickedLettersArray = []

function checkAndHighlightLetter(clickedLetter){
    let letterMatched = false;
    
    for(let i = 0; i < randomWordArray.length; i++){
        let existingDiv = document.getElementById('letter-' + (i + 1));
        let randomLetter = randomWordArray[i]
        

        if(existingDiv && randomLetter === clickedLetter){
            existingDiv.style.backgroundColor = 'blue'
           
            
            letterMatched = true;
           
        } 
            
        }
        if(!letterMatched){
        revealNextPart()
        }
        
        handleClickedLetter(clickedLetter)
        areArraysEqual(randomWordArray, clickedLettersArray)
} 
       function handleClickedLetter(letter){
        clickedLettersArray.push(...letter)
        console.log(clickedLettersArray)

        return clickedLettersArray
        
        
    }
    
/**
 * 
 * @param {*} clickedLettersArray an array to store the clicked letters
 * @param {*} randomWordArray an array to store the random word selected
 * areArraysEqual check if all letters in the randomWordArray are present in the clickedLettersArray and if are, returns the win alert

 */ 
    function areArraysEqual(randomWordArray, clickedLettersArray){
        let alllettersPresent = randomWordArray.every(letter => clickedLettersArray.includes(letter));

        if(alllettersPresent){
           
            const canvas = document.getElementById('stickmanCanvas');
    const draw = canvas.getContext("2d");
       

        let x = 50
        let y = 75
        let a = 150
        let b = 100
        let c = 100
        let d = 150
        let e = 200
        let f = 150
        let g = 200
        function loop() {
            x +=1
            y +=1
            a +=1
            b +=1
            c +=1
            d +=1
            e +=1
            f +=1
            g +=1
            draw.clearRect(0, 0, canvas.width, canvas.height);
        // Draw head
        draw.beginPath();
        draw.arc(150, x, 25, 0, 2 * Math.PI);
        draw.stroke()
        // Draw smile
        draw.beginPath();
        draw.arc(150, x + 5, 15, 0.2 * Math.PI, 0.8 * Math.PI);
        draw.stroke();

        // Draw eyes
        draw.beginPath();
        draw.arc(140, x - 5, 2, 0, 2 * Math.PI);
        draw.stroke();

        draw.beginPath();
        draw.arc(160, x - 5, 2, 0, 2 * Math.PI);
        draw.stroke();
        // Draw body
        draw.moveTo(150, y)
        draw.lineTo(150, a)
        draw.stroke()
        //Draw right Arm
        draw.moveTo(150, b)
        draw.lineTo(100, 100)
        draw.stroke()
        //Draw left arm
        draw.moveTo(150,c)
        draw.lineTo(200, 100)
        draw.stroke()
        //Draw left leg
        draw.moveTo(150,d)
        draw.lineTo(100, e)
        draw.stroke()
        //Draw right leg
        draw.moveTo(150, f)
        draw.lineTo(200, g)
        draw.stroke()

        if (x < 100){
            window.requestAnimationFrame(loop)
        }
        
    
        }
        window.requestAnimationFrame(loop)  
        alert('Congratulations you saved the man')  

        //2D Animations with Canvas and JavaScript  Kyle Robinson Young Youtube video
       
        


    
 
    












    
    
        
        }else{
           console.log('not all letters present') 
        }
        
}


        
  



                

       
       
       
       









