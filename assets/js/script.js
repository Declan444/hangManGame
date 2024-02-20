




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
    rightLeg: false

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
}
/**revealNextPart function uses an if statement to reveal each bodyPart and then call the function
 */
function revealNextPart(){
    if(!bodyPart.scaffold){
        bodyPart.scaffold = true;
        console.log(' to check if calling this function')
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
    }else{
        alert('Sorry you killed him :(')
    }
    
    drawStickman(bodyPart)
}



/**
 * getRandomWord function to randomely select a word from the array. return it as an array and assign it to selectedWord
 */

// create an array that contains 5 letter words

let fiveLetterWords = ['apple']
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
    console.log('calling create letter for keys function')
    let letters = []

    for (let i=97; i <= 122; i++){
        letters.push(String.fromCharCode(i))      
    }
let keysBox = document.getElementById('keys-box')

for (let i = 0; i < letters.length; i++){
    let keys = createKey(letters[i]);
    keysBox.appendChild(keys)
    console.log('did it get to here')
}
    
}
let getLetters = document.getElementById('getLetters')
            getLetters.addEventListener('click', createLettersForKeys)


/**
 * @param {createKey} letter function to create a key. Style the background red. Function call extra functionality when need the letter button click to call the revealNextPart
 * @returns 
 */
function createKey(letter){
    console.log('getting this far')
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
function checkAndHighlightLetter(clickedLetter){
    let letterMatched = false;
    for(let i = 0; i < randomWordArray.length; i++){
        let existingDiv = document.getElementById('letter-' + (i + 1));
        let randomLetter = randomWordArray[i]
    

        if(existingDiv && randomLetter === clickedLetter){
            existingDiv.style.backgroundColor = 'blue'
           
            console.log('pressed the right key')
            letterMatched = true;
            /**Working to here */
            /*break;*/
        }
            
        else{
            
            console.log('pressed the wrong button')
        }
        
        }
        if(!letterMatched){
        revealNextPart()
        }
        }

       







